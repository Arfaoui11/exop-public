import Banner from "@src/components/Banner";
import Box from "@src/components/Card";
import Contact from "@src/components/Contact";
import "animate.css";
import { Button, Col, Row, Typography } from "antd";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
const { Paragraph, Title } = Typography;

export default function Home() {
  return (
    <>
      <Banner />

      <div className="features content_padding">
        <div className="layout_padding">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            duration={1}
            animateOnce={true}
          >
            <Row gutter={[16, 48]}>
              <Col>
                <h4>Fonctionalités</h4>
              </Col>
            </Row>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            duration={2}
            animateOnce={true}
          >
            <Row gutter={[16, 48]}>
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <h1>Une nouvelle plateforme revolutionnaire pour la BCT.</h1>
                <h3 className="InterRegularFont">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </h3>
              </Col>
            </Row>
          </AnimationOnScroll>
          <Box />
        </div>
      </div>

      <div className="request-section">
        <div className="content_padding">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            duration={1}
            animateOnce={true}
          >
            <Row justify="center" align="middle">
              <Col>
                <h1>Soumettre votre demande maintenant.</h1>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <Col>
                <h3 className="InterRegularFont">
                  Forem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <Col>
                <Button type="primary" className="InterSemiBoldFont">
                  <Link target="_blanck" href="http://192.168.34.41:3001/">
                    Déposer une requete
                  </Link>
                </Button>
              </Col>
            </Row>
          </AnimationOnScroll>
        </div>
      </div>
      <section id="contact-form">
        <Contact />
      </section>
    </>
  );
}
