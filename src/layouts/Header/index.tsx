import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/exop.svg";
import { renderMenuItems } from "../Menu/menuData";

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
            className="public-menu InterSemiBoldFont"
            items={renderMenuItems(isActive, setIsActive)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
