import React from "react";
import Link from "next/link";


const HomePage = () => {
  return (
    <div className="text-2xl flex justify-center gap-3 pt-7">
      <div>
        <h1 className="text-3xl">Welcome</h1>
        <Link href="/properties">Go to properties</Link>
      </div>
      HomePage
    </div>
  );
};

export default HomePage;
