import { Col, Divider, Layout, Row } from "antd";
import Image from "next/image";
import logo from "../../assets/whitelogo.svg";
import Link from "next/link";
import {useState} from "react";
const { Footer } = Layout;
const FooterBottom = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Footer className="footer">
      <div >
        <Row>
          <Col span={24}>
            <Link href="/" >
              <div className="logo-header">
                <Image
                    className="logoFooter"
                    style={{
                      width: "100%",
                    }}
                    src={logo}
                    alt="logo"
                />
              </div>
            </Link>
          </Col>
          <Col span={24}>
            <div className="menuFooter">
              <ul>
                <li>
                  <Link
                      href="/about"
                      onClick={() => setIsActive(true)}
                      className={isActive ? "active" : ""}
                  >
                    <span className="nav-text">Connaitre EXOP</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/regulations"
                      onClick={() => setIsActive(true)}
                      className={isActive ? "active" : ""}
                  >
                    <span className="nav-text">Réglementations</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/informations"
                      onClick={() => setIsActive(true)}
                      className={isActive ? "active" : ""}
                  >
                    <span className="nav-text">Informations utiles</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/services"
                      onClick={() => setIsActive(true)}
                      className={isActive ? "active" : ""}
                  >
                    <span className="nav-text">E-Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/claims"
                      onClick={() => setIsActive(true)}
                      className={isActive ? "active" : ""}
                  >
                    <span className="nav-text">Réclamations</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/#contact-form"
                      onClick={() => setIsActive(true)}
                      className={isActive ? "active" : ""}
                  >
                    <span className="nav-text">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Divider />
        </Row>
        <Row className="copyrightSection">
          <Col className="copyright" xs={24} sm={24} md={12}>
            © {new Date().getFullYear()} BCT. Tous droits réserves.
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className="copyrightSection">
              <ul>
                <li>
                  <a>Termes et services</a>
                </li>
                <li>
                  <a>Vie privée</a>
                </li>
                <li>
                  <a>Cookies</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterBottom;
