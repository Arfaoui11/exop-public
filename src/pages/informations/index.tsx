import BannerPage from "@src/components/Banner/BannerPage";
import "animate.css/animate.min.css";
import {Button, Col, Collapse, Grid, Row, Image, Typography, Alert, Skeleton} from "antd";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {getPageContentInfoEndpoint} from "@src/api";
import {IChildType, UtilInformationType} from "@src/utils/types";
import { FilePdfOutlined} from "@ant-design/icons";
import {AxiosResponse} from "axios";

const { Paragraph, Title } = Typography;
interface IMainLayoutProps {}
const { useBreakpoint } = Grid;
const { Panel } = Collapse;

const Informations: React.FC<IMainLayoutProps> = () => {

  const [page, setPage] = useState<UtilInformationType | null>(null);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getPage();
  }, []);
  const getPage = async () => {

    try {

      const res : AxiosResponse<UtilInformationType> = await getPageContentInfoEndpoint();
      // Handle the data as needed (e.g., set it in state)
      setPage(res.data);
    } catch (error) {
      // Handle the error as needed
      setError("Network Error");
    }
  };

  const viewPdf = (pdf: any) => {
      // Convert base64 to binary
      const binaryData = Uint8Array.from(atob(pdf), char => char.charCodeAt(0));

      // Create a Blob from the Uint8Array
      const blob = new Blob([binaryData], {type: 'application/pdf'});

      // Create a Blob URL using window.URL.createObjectURL
      const blobUrl = window.URL.createObjectURL(blob);
      // Open PDF in a new window
      const newWindow = window.open(blobUrl, '_blank');

      // Optionally, set the window title
      if (newWindow) {
          newWindow.document.title = 'PDF Viewer';
      }
  };

  const renderCollapseItem = (sections?: IChildType[]) => {
    if (!sections) return null;
    return sections.map((section) => {
      return (
          <Collapse defaultActiveKey={["1"]} size="large" ghost accordion key={section.id}>
            <Panel header={section.title} key={section.id}>
                {
                    !!section.contentValue && section.type.includes("SECTION")  && (
                        <Title level={5} className="pb-3">
                            <Row justify="center" align="top">
                                <Image
                                    style={{ width: "300px", height: "auto" }}
                                    src={`data:image/jpeg;base64,${section.mediaFileContent}` }
                                    alt=""
                                    preview={false}
                                    className="pb-3"
                                />
                            </Row>
                            <Row justify="center" align="top">
                                {section.contentValue}
                            </Row>
                        </Title>
                    )
                }
              {renderContent(section)}
            </Panel>
          </Collapse>
      );
    })
  }

  const renderContent = (data: IChildType) => {

    switch (data.type) {
      case "LINK":
        return (
            <Col span={24}>
                <a href={data.contentValue} target="_blank" rel="noreferrer">
                    <Button type="link">{data.title}</Button>
                </a>
            </Col>
        );

      case "SECTION": return (
          <Collapse
              defaultActiveKey={["1"]}
              ghost
              size="large"
              accordion
              className="accordion-faq3"
          >
                {renderCollapseItem(data.domains)}
          </Collapse>
      );

      case "DOMAIN":return (
          <Collapse accordion className="accordion-inv">
                  {renderCollapseItem(data.questions)}
          </Collapse>
      );

      case "VIDEO":
        return (
          <>
              <div className="page-section">
                  <Row>
                      <div>
                          <h2>{data.title}</h2>
                          <iframe
                              width="560"
                              height="315"
                              src={data.contentValue}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                          ></iframe>
                      </div>
                  </Row>
              </div>
          </>
        );
      case "DOC" : return (
          <div className="page-section">
              <Row>
                  <Col md={24}>
                      <Title level={4}>{data.title}</Title>
                  </Col>
                  <Col xs={32} md={32} lg={12} className="btn-pdf">
                      <a  target="_blank" rel="">
                          {
                              data.mediaFileContent && (
                                  <Button type="primary" ghost onClick={() => viewPdf(data.mediaFileContent)} icon={<FilePdfOutlined />}>
                                      {data.contentValue}
                                  </Button>
                              )
                          }

                      </a>
                  </Col>
              </Row>
          </div>
      );
      case "QUESTION": {
        return data.answer && (
            <Col span={24}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.answer.title || "",
                    }}
                />
            </Col>
        )
      }
        default:
            return null;
    }
  }

    return (
        <>
            <Head>
                <title>EXPO | Informations Utiles</title>
            </Head>
            <BannerPage title="Informations Utiles" />
        {
            page?.sections ?
                (
                    <div className="content-wrapper page-section text-align">
                        {!!page && renderCollapseItem(page.sections)}

                        {error && <Alert message={error} type="error"/>}
                    </div>
                ):
                (
                <div className="content-wrapper page-section">
                    <Skeleton active/>
                </div>
                )
        }
    </>
  );
};

export default Informations;
