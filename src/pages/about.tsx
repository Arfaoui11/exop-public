import { getPageContentEndpoint } from "@src/api";
import BannerPage from "@src/components/Banner/BannerPage";
import { PublicPageType } from "@src/types/page";
import { mapContentToFormObject } from "@src/utils/methods";
import "animate.css/animate.min.css";
import { Alert, Col, Divider, Image, Row, Skeleton, Typography } from "antd";
import { AxiosResponse } from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
const { Paragraph, Title } = Typography;
export default function Home() {
  const [page, setPage] = useState<PublicPageType | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    getPage().then();
  }, []);

  const getPage = async () => {
    try {
      const res: AxiosResponse<PublicPageType> = await getPageContentEndpoint(
        "ABOUT_EXOP"
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
      <Head>
        <title>Exop | Connaitre Exop</title>
      </Head>
      <BannerPage title="Connaitre Exop" />
      {page?.pageContents ? (
        <div>
          <div className="content-wrapper page-section text-align">
            <Title level={5}>
              <div
                dangerouslySetInnerHTML={{
                  __html: mappedData.paragraphe_1 || "",
                }}
              />
            </Title>
          </div>
          <div className="content-wrapper page-section">
            <Title level={3}>Points forts et principales fonctionnalités</Title>
            <Divider />
            <Row >
              <Col xs={24} md={12}>
                <Paragraph>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: mappedData.paragraphe_2 || "",
                    }}
                  />
                </Paragraph>
              </Col>
              <Col xs={24} md={12} style={{ textAlign: "right" }}>
                <Row justify="center" align="middle">
                  <Col>
                    <Image
                      src={`data:image/jpeg;base64,${mappedData.imageKey}`}
                      alt="no image found"
                      preview={false}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {error && <Alert message={error} type="error" />}
        </div>
      ) : (
        <div className="content-wrapper page-section">
          <Skeleton active />
        </div>
      )}
    </>
  );
}
