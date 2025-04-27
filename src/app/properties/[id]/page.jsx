//nextjs 13: from next/router
//nextjs 14: from next/navigation

import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDB from "../../../../config/database";
import Property from "../../../../models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import BookmarkButtons from "@/components/BookmarkButtons";
import ShareButton from "@/components/ShareButton";
import PropertyContactForm from "@/components/PropertyContactForm";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import { convertToSerializableObject } from "@/utils/convertToObject";

const PropertyPage = async ({ params }) => {
  //params, searchParams
  const { id } = await params;
  await connectDB();

  const propertyDoc = await Property.findById(id).lean();
  const property = convertToSerializableObject(propertyDoc);

  if (!property) {
    return <h1 className="text-center text-2xl font-bold mt-10">Property Not Found</h1>;
  }

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link href="/properties" className="text-green-500 hover:text-green-600 flex items-center">
            <FaArrowLeft className="mr-2" />
            Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-green-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_28%] w-full gap-6">
            <PropertyDetails property={property} />
            <aside className="space-y-4">
              <BookmarkButtons property={property}/>
              {/* <ShareButton property={property}/> */}   
              <PropertyContactForm property={property}/>
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
