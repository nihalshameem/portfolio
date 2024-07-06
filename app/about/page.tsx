"use client";
import React from "react";
import About from "./components/About/About.lazy";
import Experience from "./components/Experience/Experience.lazy";

export default function Home() {
  return (
    <>
      <About />
      <Experience />
    </>
  );
}
