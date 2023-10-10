import BannerPage from "@src/components/Banner/BannerPage";
import "animate.css/animate.min.css";
import { Collapse, Grid, TabsProps } from "antd";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Documents from "./Documents";
import Faq from "./Faq";
import Guide from "./Guide";

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
const Informations: React.FC = () => {
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
          {tabsData.map(({ key, label, children }) => (
            <Panel header={label} key={key}>
              <p>{children}</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </>
  );
};

export default Informations;
