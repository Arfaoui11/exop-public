import { FilePdfOutlined } from "@ant-design/icons";
import "animate.css/animate.min.css";
import { Button, Col, Divider, Row, Typography } from "antd";
const { Paragraph, Title } = Typography;

const Documents: React.FC = () => {
  return (
    <>
      <div className="page-section">
        <Row>
          <Col md={24}>
            <Title level={4}>Title Documnet</Title>
          </Col>
          <Title level={5}>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit
          </Title>
          <Col xs={32} md={32} lg={12} className="btn-pdf">
            <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
              <Button type="primary" ghost icon={<FilePdfOutlined />}>
                Facture .pdf
              </Button>
            </a>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col md={24}>
            <Title level={4}>Title Documnet</Title>
          </Col>
          <Title level={5}>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit
          </Title>
          <Col xs={32} md={32} lg={12} className="btn-pdf">
            <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
              <Button type="primary" ghost icon={<FilePdfOutlined />}>
                Facture .pdf
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Documents;
