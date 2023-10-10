import BannerPage from "@src/components/Banner/BannerPage";
import "animate.css/animate.min.css";
import { Collapse, Grid, TabsProps, Typography } from "antd";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Documents from "./Documents";
import Faq from "./Faq";
import Guide from "./Guide";

const { Paragraph, Title } = Typography;
interface IMainLayoutProps {}
const { useBreakpoint } = Grid;
const { Panel } = Collapse;
const tabsData: TabsProps["items"] = [
  {
    label: "FAQ",
    children: <Faq />,
    key: "faq",
  },
  {
    label: "Documents requis ",
    children: <Documents />,
    key: "faq-doc",
  },
  {
    label: "Guide d'utilisateurs",
    children: <Guide />,
    key: "faq-guide",
  },
  {
    label: "Opération courante",
    children: <Guide />,
    key: "faq-ope",
  },
];
const Informations: React.FC<IMainLayoutProps> = () => {
  const [isMobile, setMobile] = useState(false);
  const { lg } = useBreakpoint();

  useEffect(() => {
    setMobile(() => !lg);
  }, [lg]);
  return (
    <>
      <Head>
        <title>EXPO | Informations Utiles</title>
      </Head>
      <BannerPage title="Informations Utiles" />
      <div className="content-wrapper page-section">
        <Collapse defaultActiveKey={["1"]} size="large" ghost accordion>
          {tabsData.map((invItems, index) => (
            <>
              <Panel header={invItems.label} key={invItems.key}>
                <p>{invItems.children}</p>
              </Panel>
            </>
          ))}
        </Collapse>

        {/*  <Tabs
          //tabPosition={`${isMobile ? "top" : "left"}`}
          defaultActiveKey="1"
          type="card"
          centered
          items={tabsData}
        />
          */}
      </div>
    </>
  );
};

export default Informations;
