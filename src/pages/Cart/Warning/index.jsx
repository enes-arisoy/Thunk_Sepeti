import React from "react";
import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-32">
      <p>No items in the cart.</p>
      <Link to="/" className="border p-2 px-4 shadow rounded hover:bg-gray-100">
        {" "}
        Home Page
      </Link>
    </div>
  );
};

export default Warning;
