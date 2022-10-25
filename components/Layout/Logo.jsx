/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

export default function Logo({children}) {
  return (
    
      <a
        className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform lg:text-3xl hover:text-gray-700 "
        href="/"
        alt=""
      >
        {children}
      </a>
    
  );
}
