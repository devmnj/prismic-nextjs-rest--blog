/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from "react";
import * as prismicH from "@prismicio/helpers";
import {
  PrismicRichText,
  PrismicText,
  PrismicNextImage,
} from "@prismicio/react";

export default function StickyPost(props) {
   
  return (
    <div>
      {/* {JSON.stringify(src)} */}
      <a
        rel="noopener noreferrer"
        href={`/${props.slug || "404"}`}
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
      >        
        <img
          src= {props.img}
          alt=" "
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
        />
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            <PrismicRichText field={props?.title} />
          </h3>
          <span className="text-xs dark:text-gray-400">
            {prismicH.asDate(props.pubDate)?.toDateString() ||
              "February 19, 2021"}
          </span>
          <p>
            <PrismicRichText field={props?.summary} />{" "}
          </p>
        </div>
      </a>
    </div>
  );
}
