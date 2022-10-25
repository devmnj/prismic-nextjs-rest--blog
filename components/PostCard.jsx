import React from "react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import { PrismicImage } from "@prismicio/react";
export default function PostCard(props) {
  return (
    <a
      href={`/${props.slug}`}
      rel="noopener noreferrer"
      className="rounded-xl"
    >
      <PrismicImage role="presentation" className="" field={props.thumb} />
      <div className=" bg-gray-500">
        <div className="flex justify-between ">
          <span className="mt-3 mx-3 text-yellow-200">
            {" "}
            {prismicH.asDate(props?.pubDate)?.toDateString()}
          </span>
          <span className="mt-3 mx-3 text-yellow-200">
            {" "}
            {props.category || "Reactjs"}
          </span>
        </div>

        <div className="px-2 py-2 space-y-2 ">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
           { prismicH.asText( props?.title)}
          </h3>
          <summary className="align-baseline">
            <PrismicRichText field={props?.summary} />
          </summary>
        </div>
      </div>
    </a>
  );
}
