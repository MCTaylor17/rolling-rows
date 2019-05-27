import React, { useState, useEffect, useRef } from "react";
import ScrollBox from "@/src/components/ScrollBox";
import MagicTable from "@/src/components/MagicTable";
import text from "./text";

import music from "@/src/music";

const title = "Once upon a time...";

const Story = props => {
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);

  const [volume, setVolume] = useState(.5);
  
  useEffect(() => {
    music.play("welcome");
  },[null]);
  

  props.init(setIsCookiesAccepted);
  
  const scrollEnter = () => {
    music.play("story");

  }

  const scrollExit = () => {
    music.play("welcome");
  }

  return (
    <>
     {isCookiesAccepted ? (
        <MagicTable onExitTop={()=>music.play("welcome")} 
                    onExitBottom={()=>music.play("ending")}
                    onEnter={() => music.stop()}
        />
     ) : (
       <div onMouseEnter={scrollEnter} onMouseLeave={scrollExit}>
        <ScrollBox title={title} subSkills={text}/>
       </div>
     )}
    </>
  );
};

export default Story;