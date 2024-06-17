import dynamic from "next/dynamic";
import React from "react";

const ContactMe = dynamic(() => import("./ContactMe"), {
  loading: () => <p>loading</p>,
  ssr: false,
});

export default ContactMe;
