import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[580px]">
      <img src="/nodata.svg" alt="" className="w-28 h-28" />
      <h1 className="text-4xl text-gray-400 mt-5">Not Found</h1>
    </div>
  );
};

export default NotFound;
