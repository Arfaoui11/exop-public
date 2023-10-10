import { Button, type MenuProps } from "antd";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type MenuItem = Required<MenuProps>["items"][number];

export const renderMenuItems = (
  isActive: boolean,
  setIsActive: Dispatch<SetStateAction<boolean>>
): MenuItem[] => [
  {
    label: (
      <Link
        href="/about"
        onClick={() => setIsActive(true)}
        className={isActive ? "active" : ""}
      >
        <span className="nav-text">Connaitre EXOP</span>
      </Link>
    ),
    type: "group",
  },
  {
    label: (
      <Link
        href="/regulations"
        onClick={() => setIsActive(true)}
        className={isActive ? "active" : ""}
      >
        <span className="nav-text">Réglementations</span>
      </Link>
    ),
    type: "group",
  },
  {
    label: (
      <Link
        href="/informations"
        onClick={() => setIsActive(true)}
        className={isActive ? "active" : ""}
      >
        <span className="nav-text">Informations utiles</span>
      </Link>
    ),
    type: "group",
  },
  {
    label: (
      <Link
        href="/services"
        onClick={() => setIsActive(true)}
        className={isActive ? "active" : ""}
      >
        <span className="nav-text">E-Services</span>
      </Link>
    ),
    type: "group",
  },
  {
    label: (
      <Link
        href="/claims"
        onClick={() => setIsActive(true)}
        className={isActive ? "active" : ""}
      >
        <span className="nav-text">Réclamations</span>
      </Link>
    ),
    type: "group",
  },
  {
    label: (
      <Link
        href="/#contact-form"
        onClick={() => setIsActive(true)}
        className={isActive ? "active" : ""}
      >
        <span className="nav-text">Contact</span>
      </Link>
    ),
    type: "group",
  },
  {
    label: (
      <div className="contact-form">
        <Button type="primary" className="InterSemiBoldFont btn-link">
          <Link
            target="_blanck"
            href="http://192.168.34.135:7001/exop-frontoffice/"
          >
            Déposer une requête
          </Link>
        </Button>
      </div>
    ),
    type: "group",
  },
];
