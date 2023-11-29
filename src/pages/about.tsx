import BannerPage from "@src/components/Banner/BannerPage";
import "animate.css/animate.min.css";
import {Col, Divider, Row, Skeleton, Typography} from "antd";
import Head from "next/head";
import Image from "next/image";
import {useEffect, useState} from "react";
import {PublicPageType} from "@src/types/page";
import {getPageContentEndpoint} from "@src/api";
import {mapContentToFormObject} from "@src/pages/methods";
import {AxiosResponse} from "axios";
const { Paragraph, Title } = Typography;
export default function Home() {
  const [page, setPage] = useState<PublicPageType | null>(null);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getPage();
  }, []);
  const getPage = async () => {

    try {

      const res : AxiosResponse<PublicPageType> = await getPageContentEndpoint("ABOUT_EXOP");
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
      <Head>
        <title>EXPO | Connaitre EXOP</title>
      </Head>
      <BannerPage title="Connaitre EXOP" />
      {page?.pageContents ? (
          <div>
            <div className="content-wrapper page-section">
              <Title level={5}>
                <div dangerouslySetInnerHTML={{__html: mappedData.paragraphe_1 || ""}}/>
              </Title>

            </div>
            <div className="content-wrapper page-section">
              <Title level={3}>Points forts et principales fonctionnalités</Title>
              <Divider/>
              <Row justify="center" align="middle">
                <Col xs={24} md={12}>
                  <Paragraph>
                    <div dangerouslySetInnerHTML={{__html: mappedData.paragraphe_2 || ""}}/>
                  </Paragraph>
                </Col>
                <Col xs={24} md={12} style={{textAlign: "right"}}>
                  <Image className="image-wrapper" src={`data:image/jpeg;base64,${mappedData.imageKey}`}
                         alt=""/>
                </Col>
              </Row>
            </div>
          </div>
      ) : (
          <div className="content-wrapper page-section">
            <Skeleton active/>
          </div>
      )
      }
    </>
  );
}
