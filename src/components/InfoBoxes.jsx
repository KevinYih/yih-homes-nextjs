import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox heading="For Renters" bgColor="bg-gray-100" btnColor="bg-black" btnText="Browse Properties" btnHoverColor="bg-gray-700" link="/properties">
            Find your dream rental property. Bookmark properties and contact owners.
          </InfoBox>
          <InfoBox heading="For Property Owners" bgColor="bg-blue-100" btnColor="bg-blue-500" btnText="Add Property" btnHoverColor="bg-blue-600" link="/properties/add">
            List your properties and reach potential tenants. Rent as an airbnb or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
