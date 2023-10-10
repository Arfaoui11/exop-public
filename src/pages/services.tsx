import { EyeOutlined } from "@ant-design/icons";
import BannerPage from "@src/components/Banner/BannerPage";
import "animate.css/animate.min.css";
import { Button, Col, Divider, Row, Typography } from "antd";
import Head from "next/head";
const { Paragraph, Title } = Typography;
export default function Services() {
  return (
    <>
      <Head>
        <title>EXPO | E-services</title>
      </Head>
      <BannerPage title="E-services" />
      <div className="content-wrapper page-section">
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
      </div>
    </>
  );
}
