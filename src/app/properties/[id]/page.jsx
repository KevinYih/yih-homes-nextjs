//nextjs 13: from next/router
//nextjs 14: from next/navigation

import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDB from "../../../../config/database";
import Property from "../../../../models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import PropertyDetails from "@/components/PropertyDetails";

const PropertyPage = async ({ params }) => {
  //params, searchParams
  const { id } = await params;
  await connectDB();
  const property = await Property.findById(id).lean();

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
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
