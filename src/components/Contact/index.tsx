import {Alert, Button, Col, Form, Input, Row, Select} from "antd";
import React, {useEffect, useState} from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import Video from "../Media/Video";
import {AxiosResponse} from "axios";
import {getPageContentEndpoint, sendEmailContact} from "@src/api";
import {PublicPageType, sendEmailType} from "@src/types/page";
import {mapContentToFormObject} from "@src/utils/methods";
import {getContactRules} from "@src/utils/rules";
import {prefixOptions} from "@src/utils/types";

const Contact: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<PublicPageType | null>(null);
    const [error, setError] = useState<string>();
    const [successMessage, setSuccessMessage] = useState<string | null>();
    const [form] = Form.useForm();
    const {Item} = Form;

    const {
        resetFields,
    } = form;

    useEffect(() => {
        getPage().then();
    }, []);
    const getPage = async () => {

        try {
            const res: AxiosResponse<PublicPageType> = await getPageContentEndpoint("CONTACT");
            // Handle the data as needed (e.g., set it in state)
            setPage(res.data);
        } catch (error) {
            // Handle the error as needed
            setError("Network Error");
        }
    };

    const mappedData = page ? mapContentToFormObject(page?.pageContents) : {};

    const onFinish = async (values: sendEmailType) => {
        setIsLoading(true);
        try {
            const res: AxiosResponse<String> = await sendEmailContact(values);
            // Handle the data as needed (e.g., set it in state)
            setSuccessMessage(res.data.toString());
            setIsLoading(false);
            resetFields();
            setTimeout(function () {
                setSuccessMessage(null);
            }, 2000)
        } catch (error) {
            // Handle the error as needed
            setError("Network Error");
            setIsLoading(false);
        }

    };

    const onFinishFailed = (errorInfo: any) => {
        setError(errorInfo.data);
        setIsLoading(false);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                defaultValue="216"
                className="input-addon-before"
                allowClear
                options={prefixOptions}
            />
        </Form.Item>
    );
    return (
        <>
            <Row className="contactSection">
                <Col className="contact-form" xs={24} md={12}>
                    <div style={{width: "100%"}}>
                        <AnimationOnScroll
                            animateIn="animate__fadeInLeft"
                            duration={1}
                            animateOnce={true}
                        >
                            <h1>Nous contacter</h1>
                            <h5>Contactez notre équipe ici.</h5>
                            <Form
                                name="contact-form"
                                layout="vertical"
                                labelWrap
                                form={form}
                                initialValues={{remember: true}}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Row gutter={24}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="firstName"
                                            label="Nom"
                                            rules={getContactRules('firstName')}
                                        >
                                            <Input placeholder="Nom"/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="lastName"
                                            label="Prénom"
                                            rules={getContactRules('lastName')}
                                        >
                                            <Input placeholder="Prénom"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Item
                                    label="Email"
                                    name="email"
                                    rules={getContactRules('email')}
                                >
                                    <Input placeholder="Email"/>
                                </Item>
                                <Item
                                    className="input-phone"
                                    name="phoneNumber"
                                    label="Numéro de télephone"
                                    rules={getContactRules('phoneNumber')}
                                >
                                    <Input
                                        className="contact-form-phone"
                                        placeholder="Numéro de télephone"
                                        addonBefore={prefixSelector}
                                        style={{width: "100%"}}
                                    />
                                </Item>
                                <Item
                                    name="message"
                                    label="Message"
                                    rules={getContactRules('message')}
                                >
                                    <Input.TextArea
                                        placeholder="Ecrire votre demande ici..."
                                        autoSize={{minRows: 3, maxRows: 5}}
                                    />
                                </Item>
                                <Item>
                                    <Button type="primary" htmlType="submit" loading={isLoading} block>
                                        {" "}
                                        Envoyer{" "}
                                    </Button>
                                </Item>
                            </Form>
                            <Row gutter={[8, 8]}>
                                {error && <Alert message={error} type="error"/>}
                                {successMessage && <Alert message={successMessage} type="success"/>}
                            </Row>
                            <br/>
                        </AnimationOnScroll>
                    </div>
                </Col>
                <Col xs={0} md={12} className="player-wrapper">
                    <Row>
                        {
                            !!mappedData.videoContact && !!mappedData.title && (
                                <Video url={mappedData.videoContact} title={mappedData.title}/>
                            )
                        }

                    </Row>
                </Col>
            </Row>
        </>
    );
};
export default Contact;
