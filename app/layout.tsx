import { Metadata } from "next";
import React from "react";

import "./globals.css";

import MyApp from "./_app";

export const metadata: Metadata = {
  title: "Nihal Shameem | Senior Software Engineer & Web Developer | Home",
  description:
    "Discover the portfolio of Nihal Shameem, a Senior Software Engineer at Novac Technology Solutions. Specializing in web development, I create innovative and scalable solutions to meet your digital needs. Explore my projects, skills, and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
