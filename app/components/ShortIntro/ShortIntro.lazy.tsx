import dynamic from "next/dynamic";
import React from "react";

const ShortIntro = dynamic(() => import("./ShortIntro"), {
  loading: () => <p>Loading...</p>, 
  ssr: false, 
});

export default ShortIntro;
