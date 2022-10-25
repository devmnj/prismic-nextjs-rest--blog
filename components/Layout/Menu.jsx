import React from "react";

export default function Menu({children}) {
  return (
    <div className="flex flex-col text-gray-600 capitalize   lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
      {children}
    </div>
  );
}
