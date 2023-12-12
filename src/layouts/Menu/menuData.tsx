import { Button } from "antd";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export const renderMenuItems = (
  isActive: boolean,
  setIsActive: Dispatch<SetStateAction<boolean>>,
  title: string | null,
  link: string | null
): any[] => [
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
  },
  {
    label: (
      <div className="contact-form">
        {link && (
          <Button type="primary" className="InterSemiBoldFont btn-link">
            <Link target="_blanck" href={link}>
              {title}
            </Link>
          </Button>
        )}
      </div>
    ),
  },
];
