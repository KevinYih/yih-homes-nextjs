import Link from "next/link";
import React from "react";

const InfoBox = ({ heading, bgColor, btnColor, children, btnText, btnHoverColor, link }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link href={link} className={`inline-block ${btnColor} text-white rounded-lg px-4 py-2 hover:${btnHoverColor}`}>
        {btnText}
      </Link>
    </div>
  );
};

export default InfoBox;
