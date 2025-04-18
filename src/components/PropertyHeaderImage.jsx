import Image from "next/image";

const PropertyHeaderImage = ({ image }) => {
  return (
    <section>
      <div className="m-auto">
        <div className="grid grid-cols-1">
          <Image src={`/properties/${image}`} alt="" className="object-cover h-100 w-full" width={0} height={0} sizes="100vw" />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
