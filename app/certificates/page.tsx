"use server";
import "../about/about.scss";
import React from "react";

import CertificateMain from "./CertificateMain";

export default async function Home() {
  return <CertificateMain />;
}
