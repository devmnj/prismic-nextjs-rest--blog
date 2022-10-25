 
import React  from "react";
import * as prismicH from '@prismicio/helpers'
import CodeHighlight from "../components/CodeHighlight";
 

export default function CodeSlice({slice}) {
    const code= prismicH.asText( slice?.primary.cod_text_field);
  return (
    <div>
      {" "}
      <CodeHighlight code={code} language="javascript" />
    </div>
  );
}
