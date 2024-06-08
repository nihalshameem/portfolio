"use client";

import "./globals.css";

import React from 'react';


import MyApp from "./_app";

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
