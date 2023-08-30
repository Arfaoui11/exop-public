import { Button, Col, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TopIcon } from "../../assets/icons";
import Background from "../../assets/images/banner.gif";
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
                      Découvrez EXOP
                    </AnimationOnScroll>
                  </div>
                  <div className="textslide">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      duration={2}
                      animateOnce={true}
                    >
                      Une plateforme digitale de la Banque Centrale de Tunisie
                      dédiée au dépôt des requêtes qui concernent les opérations
                      en capital, les opérations de commerce extérieur et les
                      opérations courantes. Elle est destinée aux intermédiaires
                      agrées, opérateurs économiques et citoyens
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
                          <Link
                            target="_blanck"
                            href="http://192.168.34.135:7001/exop-frontoffice/"
                          >
                            Déposer une requête
                          </Link>
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
