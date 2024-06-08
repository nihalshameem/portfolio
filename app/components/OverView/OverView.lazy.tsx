import dynamic from "next/dynamic";
import React from "react";

const OverView = dynamic(() => import("./OverView"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default OverView;
