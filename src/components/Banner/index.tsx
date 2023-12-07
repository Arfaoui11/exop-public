import {Button, Col, Row} from "antd";
import Image from "next/image";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Background from "../../assets/images/banner.gif";
import React from "react";
import {FormObjectType} from "@src/utils/methods";
import {TopIcon} from "@src/assets/icons";
type bannerType = {
  content: FormObjectType
}
export default function Banner({content } :bannerType) {

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
                      {content.header}
                    </AnimationOnScroll>
                  </div>
                  <div className="textslide">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      duration={2}
                      animateOnce={true}
                    >
                      {content.body}
                    </AnimationOnScroll>
                  </div>

                  <div>
                    <Col xs={24} md={16}>
                      <AnimationOnScroll
                        animateIn="animate__fadeIn"
                        duration={5}
                        animateOnce={true}
                      >
                        {
                            content.button_link && (
                                <Button
                                    type="primary"
                                    icon={<TopIcon />}
                                    className="btn-banner"
                                >
                                  <Link
                                      target="_blanck"
                                      href={content.button_link}
                                  >
                                    {content.button_title}
                                  </Link>
                                </Button>
                            )
                        }
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
