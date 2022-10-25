import React from "react";

export default function Container({children}) {
  return (
    <>
      <nav className="bg-white shadow sticky top-0">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          {children}
        </div>
      </nav>
    </>
  );
}
