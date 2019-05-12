import { useState, useEffect } from "react";
import { winScrolledDown$ } from "@/src/bus/window";

const ScrolledDown = (rowHeight) => {
  const [scrolledDown, setScrolledDown] = useState(true);
  useEffect(() => {
    const sub = winScrolledDown$.subscribe(scrolledDown => {
      setScrolledDown(scrolledDown);
    });
    
    return () => sub.unsubscribe();
  },[])

  return scrolledDown;
}

export default ScrolledDown;