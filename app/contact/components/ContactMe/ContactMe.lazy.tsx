"use client";
import React from "react";
import dynamic from "next/dynamic";

import { Skeleton } from "antd";

const ContactMe = dynamic(() => import("./ContactMe"), {
  loading: () => <Skeleton />,
  ssr: false,
});

export default ContactMe;
