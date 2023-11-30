import Banner from "@src/components/Banner";
import Box from "@src/components/Card";
import Contact from "@src/components/Contact";
import "animate.css";
import {Button, Col, Row, Skeleton, Typography} from "antd";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {useEffect, useState} from "react";
import {PublicPageType} from "@src/types/page";
import {AxiosResponse} from "axios";
import {getPageContentEndpoint} from "@src/api";
import {mapContentToFormObject} from "@src/utils/methods";
const { Paragraph, Title } = Typography;

export default function Home() {

  const [page, setPage] = useState<PublicPageType | null>(null);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getPage();
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



  return (

      <>
        {page?.pageContents ? (
      <>
        <Banner />


            <>
              <div className="features content_padding">
                <div className="layout_padding">
                  <AnimationOnScroll
                      animateIn="animate__fadeIn"
                      duration={1}
                      animateOnce={true}
                  >
                    <Row gutter={[16, 48]}>
                      <Col>
                        <h4>{mappedData.title_1}</h4>
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
                        <h1>{mappedData.title_11}</h1>
                        <h3 className="InterRegularFont">
                          {mappedData.description_1}
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
                        <h1>{mappedData.title_2}</h1>
                      </Col>
                    </Row>
                    <Row justify="center" align="middle">
                      <Col>
                        <h3 className="InterRegularFont">
                          {mappedData.description_2}
                        </h3>
                      </Col>
                    </Row>
                    <Row justify="center" align="middle">
                      <Col>
                        <Button type="primary" className="InterSemiBoldFont">
                          <Link
                              target="_blanck"
                              href="http://192.168.34.135:7001/exop-frontoffice/"
                          >
                            Déposer une requête
                          </Link>
                        </Button>
                      </Col>
                    </Row>
                  </AnimationOnScroll>
                </div>
              </div>
            </>
        )
        <section id="contact-form">
          <Contact />
        </section>
      </>):(
            <div className="content-wrapper page-section">
              <Skeleton active/>
            </div>
        )}
      </>
  );
}
