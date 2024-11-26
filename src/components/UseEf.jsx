import React, { useEffect } from "react";

export default function UseEf() {
  useEffect(() => {
    console.log("Hello");
  }, []);
  return <div></div>;
}
