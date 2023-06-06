import "animate.css/animate.min.css";
import { Collapse, Row, TabsProps, Typography } from "antd";
import Image from "next/image";
import imgAbout from "../../../assets/images/question.png";
import Acquisition from "./Acquisition";
import Declaration from "./Declaration";
import Investment from "./Investment";
import Notions from "./Notions";
const { Panel } = Collapse;
const { Paragraph, Title } = Typography;
interface IMainLayoutProps {}
const faqData: TabsProps["items"] = [
  {
    label: "Investissement à l'étranger",
    children: <Investment />,
    key: "faq-inv",
  },
  {
    label: "Notion de résidence",
    children: <Notions />,
    key: "faq-notion",
  },
  {
    label: "Déclaration d'investissement en Tunisie",
    children: <Declaration />,
    key: "faq-declaration",
  },
  {
    label: "Acquisition d'un bien immeuble en Tunisie",
    children: <Acquisition />,
    key: "faq-acquisition",
  },
];
const Faq: React.FC<IMainLayoutProps> = () => {
  return (
    <>
      <Title level={5} className="pb-3">
        <Row justify="center" align="top">
          <Image
            style={{ width: "174px", height: "auto" }}
            src={imgAbout}
            alt=""
            className="pb-3"
          />
        </Row>
        <Row justify="center" align="top">
          Retrouvez toutes les questions les plus fréquentes vous aider à
          investir en Tunisie.
        </Row>
      </Title>
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        size="large"
        accordion
        className="accordion-faq3"
      >
        {faqData.map((invItems, index) => (
          <>
            <Panel header={invItems.label} key={invItems.key}>
              <p>{invItems.children}</p>
            </Panel>
          </>
        ))}
      </Collapse>
      {/*  <Tabs
        defaultActiveKey="1"
        type="card"
        centered
        items={faqData}
        // tabPosition="left"
      />
       */}
    </>
  );
};

export default Faq;
