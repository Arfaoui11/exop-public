import { Layout as AntLayout } from "antd";
import React from "react";
import Footer from "./Footer/index";
import Header from "./Header/index";
type LayoutProps = {
  children?: React.ReactNode;
};
const { Content } = AntLayout;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <div className="container-footer">
          <Header/>
          <Content className="">{children}</Content>
          <Footer/>
      </div>
  );
};

export default Layout;
