import React from "react";
import { PrismicRichText } from "@prismicio/react";
export default function ParagraphSlice({ slice }) {
  return (
    <div className="mb-1 text-lg">
      <PrismicRichText field={slice?.primary.paragraph_rich_text_field} />{" "}
    </div>
  );
}
