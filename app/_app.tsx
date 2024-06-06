"use client";
import { Breadcrumb, Layout } from "antd";
import Footer from "./components/Footer/Footer.lazy";
import Header from "./components/Header/Header.lazy";
const { Content } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

// Define your layout component
const MyApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MyApp;
