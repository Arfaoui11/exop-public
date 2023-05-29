import { Button, Col, Row, Typography } from "antd";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Background from "../../assets/images/banner.gif";
//import styles from "./styles.module.css";
import { TopIcon } from "../../assets/icons";
const { Paragraph, Title } = Typography;
export default function Banner() {
  return (
    <>
      <div className="slide">
        <div className="bannerBgContainer">
          <div className="bannerContainer">
            <Row
              justify="space-between"
              align="middle"
              style={{ height: "100%" }}
            >
              <Col xs={24} md={12}>
                <div className="detailBox">
                  <div className="titleslide">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      duration={1}
                      animateOnce={true}
                    >
                      Découvrez notre nouvelle
                      <br /> plateforme EXOP.
                    </AnimationOnScroll>
                  </div>
                  <div className="textslide">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      duration={2}
                      animateOnce={true}
                    >
                      Une platforme digitale pour les citoyens, les opérateurs
                      économiques ainsi que le personnel de la banque centrale.
                    </AnimationOnScroll>
                  </div>

                  <div>
                    <Col xs={24} md={16}>
                      <AnimationOnScroll
                        animateIn="animate__fadeIn"
                        duration={5}
                        animateOnce={true}
                      >
                        <Button
                          type="primary"
                          icon={<TopIcon />}
                          className="btn-banner"
                        >
                          Déposer une requête
                        </Button>
                      </AnimationOnScroll>
                    </Col>
                  </div>
                </div>
              </Col>
              <Col xs={0} md={12} style={{ height: "100%" }}>
                <Image
                  alt="banner"
                  src={Background}
                  style={{ height: "95%", width: "auto" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
