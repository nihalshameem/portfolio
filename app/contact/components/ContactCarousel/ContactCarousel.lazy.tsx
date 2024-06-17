import dynamic from "next/dynamic";
import React from "react";

import SkeletonImage from "antd/es/skeleton/Image";

const ContactCarousel = dynamic(() => import("./ContactCarousel"), {
  loading: () => <SkeletonImage />,
  ssr: true,
});

export default ContactCarousel;
