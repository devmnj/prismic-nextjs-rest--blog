import React from "react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

export default function HeadingSlice({ slice }) {
  const heading = prismicH.asText(slice?.primary?.header_rich_text_field)
  return (<>
    <div className="text-2xl text-purple-500  mt-1 mb-1">
      {heading}
    </div>
    </>
  );
}
