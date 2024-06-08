import dynamic from "next/dynamic";
import React from "react";

const ShortIntro = dynamic(() => import("./ShortIntro"), {
  loading: () => <p>Loading...</p>, // Optional: A component to show while loading
  ssr: false, // Optional: Disable server-side rendering for this component
});

export default ShortIntro;
