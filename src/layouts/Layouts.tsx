import { Layout as AntLayout } from 'antd';
import React from "react";
import Footer from "./Footer/index";
import Navbar from "./Header/index";
type LayoutProps = {
  children?: React.ReactNode; 
}
const {Content} = AntLayout;
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
     <>
      <Navbar />
      <Content className=''>{children}</Content>
      <Footer />
    </>
  )
}

export default Layout
