import React, {useEffect, useState} from "react";
import Head from "next/head";
import {Alert, Col, Layout, Menu, Row, Skeleton, Typography} from "antd";
import {AxiosResponse} from "axios";
import {getPageContentEndpoint} from "@src/api";
import {PageContentType, PublicPageType} from "@src/types/page";
import {useRouter} from "next/router";
import BannerPage from "@src/components/Banner/BannerPage";

const {Sider} = Layout;
const {Title} = Typography;
const Info: React.FC = () => {

    const [error, setError] = useState<string>();
    const [page, setPage] = useState<PublicPageType | null>(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState<string>();
    const [contentItem, setContentItem] = useState<PageContentType | null>(null);
    const router = useRouter();
    const {nav} = router.query;

    const getPage = async () => {
        try {
            const res: AxiosResponse<PublicPageType> = await getPageContentEndpoint("INFO");

            // Handle the data as needed (e.g., set it in state)
            setPage(res.data);
        } catch (error) {
            setError("Network Error");
            // Handle the error as needed
        }
    };
    const handleMenuItemClick = (item: any) => {
        setSelectedMenuItem(item.key);
    };


    const list = page?.pageContents.sort((a, b) => parseInt(a.id) - parseInt(b.id) ) || [];

    const dataList = list.map((tab) => ({
        key: tab.id,
        icon: tab.mediaFileContent, // Use contentValue as the icon type or provide a default value
        title: tab.title,
        label: tab.title,
    }));

    useEffect(() => {
        getPage().then();
    }, []);


    useEffect(() => {
        page?.pageContents.forEach(t => {
            if (t.id == selectedMenuItem) setContentItem(t);
        })

    }, [selectedMenuItem, page]);

    useEffect(() => {
        const content = list && list.find((content) => content.name === nav);
        if (content) {
            setContentItem(content);
        } else {
            const content = list && list[0];
            content && setContentItem(content);
        }

    }, [page, nav]);

    return (
        <>
            <Head>
                <title>PI | Droits</title>
            </Head>
            <BannerPage title="Droits de l'utilisateurs" />
            <div className="content-wrapper page-section">
                <Layout>
                    <Sider width={300} theme="light" className="sidebar-inv">
                        <Title level={4}>Droits de l&apos;utilisateurs</Title>
                        {
                            page && (
                                <Menu
                                    mode="inline"
                                    selectedKeys={[contentItem?.id.toString() || '']}
                                    style={{height: "100%"}}
                                    onClick={handleMenuItemClick}
                                    items={dataList}
                                />
                            )
                        }
                    </Sider>
                    <Layout.Content>
                        {
                            contentItem ? (
                                <Row className="content-page-inv">
                                    <Col xs={24} lg={24}>
                                        <Title level={3}>{contentItem.title}</Title>
                                    </Col>
                                    <Col xs={24} lg={24}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: contentItem.contentValue || "",
                                            }}
                                        />
                                    </Col>
                                </Row>
                            ) : (
                                <div className="content-page-inv" style={{whiteSpace: "pre-line"}}>
                                    <Skeleton active/>
                                    <br/>
                                    <Col xs={8} className="center-text">
                                        {error && <Alert message={error} type="error"/>}
                                    </Col>
                                </div>
                            )
                        }
                    </Layout.Content>
                </Layout>
            </div>
        </>
    );
};

export default Info;

