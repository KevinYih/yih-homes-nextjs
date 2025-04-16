import React from "react";

const InfoBox = ({ heading, bgColor, btnColor, children, btnText, btnHoverColor }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <a href="/properties.html" className={`inline-block ${btnColor} text-white rounded-lg px-4 py-2 hover:${btnHoverColor}`}>
        {btnText}
      </a>
    </div>
  );
};

export default InfoBox;
