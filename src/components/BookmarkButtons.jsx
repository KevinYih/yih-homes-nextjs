"use client";

import { FaBookmark } from "react-icons/fa";
import bookmarkProperty from "@/app/actions/bookmarkProperty";
import { useSession } from "next-auth/react";
import checkBookmarkStatus from "@/app/actions/checkBookmarkStatus";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const BookmarkButtons = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
      setLoading(false);
    });
  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    
    if (!userId) {
      toast.error("You need to be signed in to boomark a listing");
      return;
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);
      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
    
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return isBookmarked ? (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" onClick={handleClick}>
      <FaBookmark className="mr-3 text-xl text-red-500" /> Remove Bookmark
    </button>
  ) : (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" onClick={handleClick}>
      <FaBookmark className="mr-3 text-xl" /> Bookmark Property
    </button>
  );
};

export default BookmarkButtons;
