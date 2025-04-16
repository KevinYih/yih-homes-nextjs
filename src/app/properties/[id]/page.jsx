//nextjs 13: from next/router
//nextjs 14: from next/navigation

import React from "react";

const PropertyPage = async ({ params }) => {
  const param = await params;
  console.log("param:", param);

  return (
    <div>
      <div>Property page</div>
      <div>Specific {param.id}</div>
    </div>
  );
};

export default PropertyPage;
