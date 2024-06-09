import dynamic from "next/dynamic";
import React from "react";

const CallToAction = dynamic(() => import("./CallToAction"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default CallToAction;
