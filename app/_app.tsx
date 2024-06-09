"use client";
import React from "react";
import { Layout } from "antd";

import Footer from "./components/Footer/Footer.lazy";
import NavBar from "./components/NavBar/NavBar.lazy";
import { ThemeProvider } from "./contexts/ThemeContext";

const { Content } = Layout;

// Define your layout component
const MyApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Layout>
        <NavBar />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
