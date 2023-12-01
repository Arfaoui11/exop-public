import {Button, Col, Row, Skeleton, Typography} from "antd";
import Image from "next/image";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TopIcon } from "../../assets/icons";
import Background from "../../assets/images/banner.gif";
import {useEffect, useState} from "react";
import {PublicPageType} from "@src/types/page";
import {AxiosResponse} from "axios";
import {getPageContentEndpoint} from "@src/api";
import {mapContentToFormObject} from "@src/utils/methods";
export default function Banner() {

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
                      {mappedData.header}
                    </AnimationOnScroll>
                  </div>
                  <div className="textslide">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      duration={2}
                      animateOnce={true}
                    >
                      {mappedData.body}
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
