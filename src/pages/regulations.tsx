import Filter from "@src/components/Filter";
import "animate.css/animate.min.css";
import {Button, Col, Divider, Input, Pagination, PaginationProps, Row, Skeleton, Typography} from "antd";
import Head from "next/head";
import Image from "next/image";
import {useEffect, useState} from "react";
import {IFilterParams, IPublicDocument, PublicDocument, PublicPageType} from "@src/types/page";
import {AxiosResponse} from "axios/index";
import {getPageContentEndpoint, getPublicDocumentsEndpoint, viewDocumentEndpoint} from "@src/api";
import {formatFileSize, mapContentToFormObject} from "@src/utils/methods";
import {ListDataType} from "@src/utils/types";
import {DownloadOutlined, EyeOutlined} from "@ant-design/icons";
const { Paragraph, Title } = Typography;
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
    });
    getPage();
  }, []);


  const getPage = async () => {

    try {

      const res : AxiosResponse<PublicPageType> = await getPageContentEndpoint("E_SERVICES");
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
    getDocuments(params);
  }

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
    getDocuments({
      page: page,
      pageSize: 6,
      isActive: true
    });
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
      newWindow.name = "hello ";
    }


  };


  const mappedData = page ? mapContentToFormObject(page?.pageContents) : {};

  return (
    <>
      <Head>
        <title>EXPO | Réglementationss</title>
      </Head>
      {
        page?.pageContents ?   (
                <div className="content-wrapper page-section">
                  <Row>
                    <Col xs={24} md={18}>
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


                      <Row gutter={[16, 16]} className="files-container">
                        {documents && (
                            <>
                              {documents?.content.map((document: PublicDocument) => {
                                return (
                                    <>
                                      <Col xs={24} md={12}   className="btn-pdf">
                                        <a target="_blank" rel="">
                                          {
                                            document.type.includes("application/pdf") ?
                                                (<Button type="primary" ghost icon={<EyeOutlined/>}
                                                         onClick={() => viewPdf(document?.id)}>
                                                  {document.fileName} - {formatFileSize(document.fileSize)}
                                                </Button>) :
                                                (<Button type="primary" ghost icon={<DownloadOutlined/>}
                                                         onClick={() => download(document?.id)}>
                                                  {document.fileName} - {formatFileSize(document.fileSize)}
                                                </Button>)
                                          }
                                        </a>

                                      </Col>
                                    </>
                                );
                              })}
                            </>
                        )}

                      </Row>
                    </Col>
                    {
                        mappedData.imageKey &&
                        (<Col xs={24} md={6} style={{textAlign: "center"}}>
                          <Image width="350" height="500" src={`data:image/jpeg;base64,${mappedData.imageKey}`}
                                 alt=""/>
                        </Col>)
                    }
                    <Divider/>
                    <Col xs={24} md={18}>
                      <Pagination defaultCurrent={current} onChange={onChange} total={documents?.totalElement}
                                  showTotal={(total) => `Total ${total} items`} defaultPageSize={6}/>
                    </Col>
                  </Row>
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
