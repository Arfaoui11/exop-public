import { Button, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/exop.svg";
import menuData from "../Menu/menuData";
const { Content, Sider, Footer } = Layout;

const Navbar = () => {
  return (
    <div className="header">
      <div className="content-menu">
        <div className="links">
          <Link href="/">
            <div className="logo-header">
              <Image className="logo-header-img" src={logo} alt="logo" />
            </div>
          </Link>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="InterSemiBoldFont"
          >
            {menuData.map((menuItem, index) => (
              <>
                <Menu.Item key={index}>
                  <Link href={menuItem.path}>
                    <span className="nav-text">{menuItem.title}</span>
                  </Link>
                </Menu.Item>
              </>
            ))}
            <Menu.Item className="contact-form" key="contact">
              <Button type="primary" className="InterSemiBoldFont">
                Déposer une requete
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
