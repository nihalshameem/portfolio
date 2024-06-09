import dynamic from "next/dynamic";
import React from "react";

const Footer = dynamic(() => import("./Footer"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default Footer;
