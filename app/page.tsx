"use client";
import React from "react";

import ShortIntro from "./components/ShortIntro/ShortIntro.lazy";
import OverView from "./components/OverView/OverView.lazy";
import CallToAction from "./components/CallToAction/CallToAction.lazy";

export default function Page() {
  return (
    <>
      <ShortIntro />
      <OverView />
      <CallToAction />
    </>
  );
}
