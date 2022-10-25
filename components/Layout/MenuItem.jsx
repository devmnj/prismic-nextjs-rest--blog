import Link from "next/link";
import React from "react";

export default function MenuItem(props) {
  return (
    <>
      <a
        href={props.path || "/"}
        className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900  "
      >
        {props.caption}
      </a>
    </>
  );
}
