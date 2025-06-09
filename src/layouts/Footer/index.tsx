import { Col, Divider, Layout, Row } from "antd";
import Image from "next/image";
import logo from "../../assets/whitelogo.svg";
import Link from "next/link";
const { Footer } = Layout;
const FooterBottom = () => {
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
                  >
                    <span className="nav-text">Connaitre EXOP</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/regulations"
                  >
                    <span className="nav-text">Réglementations</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/informations"
                  >
                    <span className="nav-text">Informations utiles</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/services"
                  >
                    <span className="nav-text">E-Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/claims"
                  >
                    <span className="nav-text">Réclamations</span>
                  </Link>
                </li>
                <li>
                  <Link
                      href="/#contact-form"
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
                  <Link href="/info?nav=terms"><span className="nav-text"> Termes et services</span></Link>
                </li>
                <li>
                  <Link href="/info?nav=privacy"><span className="nav-text">Vie privée</span></Link>
                </li>
                <li>
                  <Link href="/info?nav=notice"><span className="nav-text">Cookies</span></Link>
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
