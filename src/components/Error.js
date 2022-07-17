import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen flex-wrap flex-col gap-8">
        <h1 className="text-2xl text-center dark:text-white font-bold ">404 not found.</h1>
      <div className="">
        <Link
          to={"/"}
          className="px-6 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white border-2 border-gray-400 font-semibold"
        >
         Go Back !
        </Link>
      </div>
    </div>
  );
}
