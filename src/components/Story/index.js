import React, { useState, useEffect, useRef } from "react";
import ScrollBox from "@/src/components/ScrollBox";
import MagicTable from "@/src/components/MagicTable";
import text from "./text";

const title = "Once upon a time...";

const Story = props => {
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);
  
  props.init(setIsCookiesAccepted);
  console.log(isCookiesAccepted);
  return (
    <>
     {isCookiesAccepted ? (
       <MagicTable/>
     ) : (
       <ScrollBox title={title} subSkills={text}/>
     )}
    </>
  );
};

export default Story;