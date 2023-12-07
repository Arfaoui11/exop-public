import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import logo from "../../assets/exop.svg";
import { renderMenuItems } from "../Menu/menuData";
import {PublicPageType} from "@src/types/page";
import {AxiosResponse} from "axios/index";
import {getPageContentEndpoint} from "@src/api";
import {mapContentToFormObject} from "@src/utils/methods";

const Navbar = () => {
  const [page, setPage] = useState<PublicPageType | null>(null);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getPage().then();
  }, []);
  const getPage = async () => {

    try {

      const res : AxiosResponse<PublicPageType> = await getPageContentEndpoint("HOME_PAGE");
      // Handle the data as needed (e.g., set it in state)
      setPage(res.data);
    } catch (error) {
      setError("Network Error");
      // Handle the error as needed
    }
  };

  const mappedData = page ? mapContentToFormObject(page?.pageContents) : {};

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
            items={renderMenuItems(isActive, setIsActive,mappedData.button_title,mappedData.button_link)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
