import { Col, Divider, Layout, Row } from 'antd';
import Image from 'next/image';
import logo from '../../assets/whitelogo.svg';
const { Footer} = Layout;
const FooterBottom = () => {
  return (
     <Footer className="footer">
      
      <div>
        <Row>
          <Col span={24}>
          <Image
          className="logoFooter"
            style={{
              width: '100%',
            }}
                src={logo}
                alt="logo"
                
              />
          </Col>
          <Col span={24}>
            <div className="menuFooter">
              <ul>
                <li><a >Connaitre EXOP</a></li>
                <li><a >Réglementations</a></li>
                <li><a >Informations utiles</a></li>
                <li><a >E-Services</a></li>
                <li><a >Réclamations</a></li>
                <li><a >Contact</a></li>
              </ul>
            </div>
          </Col>
          <Divider />

        </Row>
        <Row  className="copyrightSection">
          <Col className="copyright" xs={24} sm={24} md={12}>© 2023 BCT. Tous droits réserves.</Col>
          <Col xs={24} sm={24} md={12}>
            <div className="copyrightSection">
          <ul>
            <li><a>Termes et services</a></li>
            <li><a>Vie privée</a></li>
            <li><a>Cookies</a></li>
            </ul>
            </div>
          </Col>
        </Row>
      </div>
      </Footer>
  )
}

export default FooterBottom