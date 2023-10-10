import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import BannerPage from "@src/components/Banner/BannerPage";
import Filter from "@src/components/Filter";
import "animate.css/animate.min.css";
import { Button, Col, Divider, Input, Row, Typography } from "antd";
import Head from "next/head";
import Image from "next/image";
import imgAbout from "../assets/images/regle.png";
const { Paragraph, Title } = Typography;
export default function Regulations() {
  {
    /*  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setArticles(data);
    };
    getData();
  }, []);
   */
  }
  return (
    <>
      <Head>
        <title>EXPO | Réglementations</title>
      </Head>
      <BannerPage title="Réglementations" />
      <div className="content-wrapper page-section">
        {/*  {articles && (
          <>
            {articles.map((item: any) => {
              return (
                <>
                  <div className="article">{item.id}</div>
                </>
              );
            })}
          </>
          )}
          */}
        <Row>
          <Col xs={24} md={18}>
            <Paragraph className="pb-3">
              Veuillez visiter la rubrique{" "}
              <a
                href="https://www.bct.gov.tn/bct/siteprod/page.jsp?id=67"
                target="_blanck"
              >
                « Réglementation des Changes »{" "}
              </a>
              dans le site officiel de la Banque Centrale de Tunisie
            </Paragraph>
            <Filter />
            <Divider />
            <Input
              size="large"
              placeholder="Recherche"
              prefix={<SearchOutlined />}
            />
            <Divider />

            <Row gutter={[16, 16]}>
              <Col xs={32} md={32} lg={12} className="btn-pdf">
                <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
                  <Button type="primary" ghost icon={<EyeOutlined />}>
                    Facture .pdf
                  </Button>
                </a>
              </Col>
              <Col xs={32} md={32} lg={12} className="btn-pdf">
                <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
                  <Button type="primary" ghost icon={<EyeOutlined />}>
                    Facture Proforma description.pdf
                  </Button>
                </a>
              </Col>
              <Col xs={32} md={32} lg={12} className="btn-pdf">
                <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
                  <Button type="primary" ghost icon={<EyeOutlined />}>
                    Facture Proforma.pdf
                  </Button>
                </a>
              </Col>
              <Col xs={32} md={32} lg={12} className="btn-pdf">
                <a href="../../assets/pdf/exop.pdf" target="_blank" rel="">
                  <Button type="primary" ghost icon={<EyeOutlined />}>
                    Facture Proforma descrip.pdf
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={6} style={{ textAlign: "center" }}>
            <Image src={imgAbout} alt="" />
          </Col>
        </Row>
      </div>
    </>
  );
}
