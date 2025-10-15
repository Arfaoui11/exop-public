import Filter from "@src/components/Filter";
import "animate.css/animate.min.css";
import {
  Alert,
  Col,
  Image,
  Divider,
  Pagination,
  PaginationProps,
  Row,
  Skeleton,
  Typography,
  Tooltip, Card, Avatar
} from "antd";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import {IFilterParams, IPublicDocument, PublicDocument, PublicPageType} from "@src/types/page";
import {getPageContentEndpoint, getPublicDocumentsEndpoint, viewDocumentEndpoint} from "@src/api";
import { mapContentToFormObject} from "@src/utils/methods";
import {formatFileSize, ListDataType} from "@src/utils/types";
import {AxiosResponse} from "axios";
import BannerPage from "@src/components/Banner/BannerPage";
import { DownloadOutlined, EyeOutlined} from "@ant-design/icons";

const { Paragraph } = Typography;
const { Meta } = Card;
export default function Regulations() {
  const [documents, setDocuments] = useState<ListDataType<IPublicDocument[]> | null>(null);
  const [page, setPage] = useState<PublicPageType | null>(null);
  const [current, setCurrent] = useState(1);
  const [error, setError] = useState<string>();
  useEffect(() => {
    getDocuments({
      isActive: true,
      page: 1,
      pageSize: 6
    }).then();
    getPage().then();
  }, []);


  const getPage = async () => {

    try {

      const res : AxiosResponse<PublicPageType> = await getPageContentEndpoint("REGULATION");
      // Handle the data as needed (e.g., set it in state)
      setPage(res.data);
    } catch (error) {
      setError("Network Error");
      // Handle the error as needed
    }
  };

  const getDocuments = async (params: any) => {
    try {
      const res : AxiosResponse<ListDataType<IPublicDocument[]>> = await getPublicDocumentsEndpoint(params);


      // Handle the data as needed (e.g., set it in state)
      setDocuments(res.data);
    } catch (error) {
      setError("Network Error");
      // Handle the error as needed
    }
  };

  const handleFilterSubmit = (params: IFilterParams) => {
    // * filter documents by criteria
    params.page = current;
    getDocuments(params).then();
  }

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
    getDocuments({
      page: page,
      pageSize: 6,
      isActive: true
    }).then();
  };

  const download = async (id: string) => {

    const res : AxiosResponse<Blob> = await viewDocumentEndpoint(id);

    // Convert Blob to URL
    const data = window.URL.createObjectURL(res.data);

    const link = document.createElement('a');
    link.href = data;
    link.download = "document";

    link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}))

    setTimeout(function () {
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 1000)

  };


  const viewPdf = async (id: string) => {

    const res : AxiosResponse<Blob> = await viewDocumentEndpoint(id);

    // Convert Blob to URL
    const data = window.URL.createObjectURL(res.data);
    // Open PDF in a new window
    const newWindow = window.open(data, '_blank');

    // Optionally, set the window title
    if (newWindow) {
      newWindow.document.title = 'PDF Viewer';
      newWindow.name = "PDF Viewer";
    }


  };


  const mappedData = page ? mapContentToFormObject(page?.pageContents) : {};

  return (
    <>
      <Head>
        <title>Exop | Réglementations</title>
      </Head>
      <BannerPage title={mappedData.title || ""} />
      {
        page?.pageContents ?   (
                <div className="content-wrapper page-section">
                  <Row justify="center" align="middle">
                    <Col xs={24} md={14}>
                      <Paragraph className="pb-3">
                        {mappedData.description} {" "}
                        {
                            !!mappedData.link && (
                                <a
                                    href={mappedData.link || ""}
                                    target="_blanck"
                                >
                                  « Réglementation des Changes »{" "}
                                </a>
                            )
                        }
                      </Paragraph>
                      <Filter
                          onFilter={handleFilterSubmit}
                      />
                      <Row gutter={[20, 20]} className="files-container">
                        {documents && (
                            <>
                              {documents?.content.map((document: PublicDocument) => {
                                return (
                                    <>
                                      <Col key={document.id} sm={10} xs={24}>
                                        <Card className="attachment-card">
                                          <Meta
                                              avatar={<Avatar icon={<EyeOutlined />} />}
                                              title={(
                                                  <Tooltip title={document.fileName} placement="topLeft">
                                                    {document.fileName}
                                                  </Tooltip>
                                              )}
                                              description={formatFileSize(document.fileSize)}
                                              className="attachment-avatar"
                                          />
                                          {
                                            document.type.includes("application/pdf") && (
                                                  <Tooltip title="Voir">
                                                    <EyeOutlined className="attachment-checkmark" onClick={() => viewPdf(document.id)} />
                                                  </Tooltip>
                                              )
                                          }
                                          <Tooltip title="Télécharger">
                                            <DownloadOutlined className="attachment-download" onClick={() => download(document.id)} />
                                          </Tooltip>
                                        </Card>
                                      </Col>
                                    </>
                                );
                              })}
                            </>
                        )}
                      </Row>
                    </Col>
                    {
                        !!mappedData.imageKey &&
                        (
                            <Col xs={24} md={8} style={{ textAlign: "right" }}>
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
                        )
                    }
                    <Divider/>
                    <Col xs={24} md={18}>
                      <Pagination defaultCurrent={current} onChange={onChange} total={documents?.totalElement}
                                  showTotal={(total) => `Total ${total} articles`} defaultPageSize={6}/>
                    </Col>
                  </Row>

                  {error && <Alert message={error} type="error" />}
                </div>
            ) :
            (
                <div className="content-wrapper page-section">
                  <Skeleton active />
                </div>
            )
      }
    </>
  );
}
