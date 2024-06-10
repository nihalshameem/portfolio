import dynamic from "next/dynamic";
import React from "react";

const Experience = dynamic(() => import("./Experience"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default Experience;
