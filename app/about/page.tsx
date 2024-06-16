"use client";
import React from "react";
import About from "./components/About/About.lazy";
import Experience from "./components/Experience/Experience.lazy";

export default function Home() {
  return (
    <div className="container">
      <About />
      <Experience />
    </div>
  );
}
