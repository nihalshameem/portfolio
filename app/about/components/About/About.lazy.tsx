import dynamic from "next/dynamic";
import React from "react";

const About = dynamic(() => import("./About"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default About;
