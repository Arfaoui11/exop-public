import { getPageContentEndpoint } from "@src/api";
import Banner from "@src/components/Banner";
import Box from "@src/components/Card";
import Contact from "@src/components/Contact";
import { PublicPageType } from "@src/types/page";
import { mapContentToFormObject } from "@src/utils/methods";
import "animate.css";
import { Alert, Button, Col, Row, Skeleton } from "antd";
import { AxiosResponse } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Home() {
  const [page, setPage] = useState<PublicPageType | null>(null);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getPage().then();
  }, []);
  const getPage = async () => {
    try {
      const res: AxiosResponse<PublicPageType> = await getPageContentEndpoint(
        "HOME_PAGE"
      );
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
          <Banner content={mappedData} />
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
                      {mappedData.button_link && (
                        <Button type="primary" className="InterSemiBoldFont">
                          <Link target="_blanck" href={mappedData.button_link}>
                            {mappedData.button_title}
                          </Link>
                        </Button>
                      )}
                    </Col>
                  </Row>
                </AnimationOnScroll>
              </div>
            </div>
            {error && <Alert message={error} type="error" />}
          </>
          <section id="contact-form">
            <Contact />
          </section>
        </>
      ) : (
        <div className="content-wrapper page-section">
          <Skeleton active />
        </div>
      )}
    </>
  );
}
