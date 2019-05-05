import { useState, useEffect } from "react";
import { numberOfRows$ } from "../api";

const NumberOfRows = () => {
  const [numberOfRows, setNumberOfRows] = useState(0);

  useEffect(() => {
    const sub = numberOfRows$.subscribe(setNumberOfRows);
    
    return () => sub.unsubscribe();
  },[]);
  
  return numberOfRows;
}

export default NumberOfRows;