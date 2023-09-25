import { Button, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/exop.svg";
import menuData from "../Menu/menuData";
const { Content, Sider, Footer } = Layout;
const {Item} = Menu;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="header">
      <div className="content-menu">
        <div className="links">
          <Link href="/" onClick={() => setIsActive(false)}>
            <div className="logo-header">
              <Image className="logo-header-img" src={logo} alt="logo" />
              {isActive}
            </div>
          </Link>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="InterSemiBoldFont"
          >
            {menuData.map((menuItem, index) => (
              <>
                <Item key={index}>
                  <Link
                    href={menuItem.path}
                    onClick={() => setIsActive(true)}
                    className={`${isActive ? "active" : ""}`}
                  >
                    <span className="nav-text">{menuItem.title}</span>
                  </Link>
                </Item>
              </>
            ))}
            <Item className="contact-form" key="contact">
              <Button type="primary" className="InterSemiBoldFont">
                <Link
                  target="_blanck"
                  href="http://192.168.34.135:7001/exop-frontoffice/"
                >
                  Déposer une requête
                </Link>
              </Button>
            </Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
