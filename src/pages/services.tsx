import { GlobalOutlined } from "@ant-design/icons";
import { getPageContentEndpoint } from "@src/api";
import BannerPage from "@src/components/Banner/BannerPage";
import { PublicPageType } from "@src/types/page";
import "animate.css/animate.min.css";
import { Alert, Card, Col, Row, Skeleton, Typography } from "antd";
import { AxiosResponse } from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

export default function Services() {
  const [page, setPage] = useState<PublicPageType | null>(null);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getPage().then();
  }, []);
  const getPage = async () => {
    try {
      const res: AxiosResponse<PublicPageType> = await getPageContentEndpoint(
        "E_SERVICES"
      );

      // Handle the data as needed (e.g., set it in state)
      setPage(res.data);
    } catch (error) {
      setError("Network Error");
      // Handle the error as needed
    }
  };

  return (
    <>
      <Head>
        <title>EXPO | E-services</title>
      </Head>
      <BannerPage title="E-services" />
      {page?.pageContents ? (
        <div className="content-wrapper page-section services">
          <Row>
            <Col xs={8} md={12}>
              <Title level={1}>Links</Title>
            </Col>
            <Col xs={24} md={18}>
              {page.pageContents.map(({ id, title, contentValue }) => (
                <Card key={id} className="service-card">
                  <GlobalOutlined />
                  <Text strong>
                    <a href={contentValue || ""} target="_blank">
                      {title}
                    </a>
                  </Text>
                </Card>
              ))}
            </Col>
          </Row>
          {error && <Alert message={error} type="error" />}
        </div>
      ) : (
        <div className="content-wrapper page-section">
          <Skeleton active />
        </div>
      )}
      {/*<div className="content-wrapper page-section">
        <Row>
          <Col xs={24}>
            <Title level={4}>Services Title</Title>
          </Col>
          <Col xs={24}>
            <Paragraph>Services description</Paragraph>
          </Col>
          <Col xs={24}>
            <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
              <Button type="primary" ghost icon={<EyeOutlined />}>
                Services1.pdf
              </Button>
            </a>
          </Col>
          <Divider />
        </Row>

        <Row>
          <Col xs={24}>
            <Title level={4}>Services Title</Title>
          </Col>
          <Col xs={24}>
            <Paragraph>Services description</Paragraph>
          </Col>
          <Col xs={24}>
            <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
              <Button type="primary" ghost icon={<EyeOutlined />}>
                Services2.pdf
              </Button>
            </a>
          </Col>
          <Divider />
        </Row>
      </div>*/}
    </>
  );
}
