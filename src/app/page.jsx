import React from "react";

import { MdOutlineAddHomeWork } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="text-2xl flex justify-center gap-3 pt-7">
      <div>
        <MdOutlineAddHomeWork size={100} className="text-indigo-600" />
      </div>
      HomePage
    </div>
  );
};

export default HomePage;
