import {Alert, Button, Col, Form, Input, Row, Select, Typography} from "antd";
import React, {useEffect, useState} from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Video from "../Media/Video";
import {AxiosResponse} from "axios";
import {getPageContentEndpoint, sendEmailContact} from "@src/api";
import {PublicPageType} from "@src/types/page";
import {mapContentToFormObject} from "@src/utils/methods";
const { Paragraph, Title } = Typography;
const { Option } = Select;
const Contact: React.FC = () => {

    const [page, setPage] = useState<PublicPageType | null>(null);
    const [error, setError] = useState<string>();
    const [successMessage, setSuccessMessage] = useState<string | null>();
    useEffect(() => {
        getPage();
    }, []);
    const getPage = async () => {

        try {
            const res : AxiosResponse<PublicPageType> = await getPageContentEndpoint("CONTACT");
            // Handle the data as needed (e.g., set it in state)
            setPage(res.data);
        } catch (error) {
            // Handle the error as needed
            setError("Network Error");
        }
    };

    const mappedData = page ? mapContentToFormObject(page?.pageContents) : {};

  const onFinish = async (values: any) => {

      try {
          const res : AxiosResponse<String> = await sendEmailContact(values);
          // Handle the data as needed (e.g., set it in state)
          setSuccessMessage(res.data.toString());
          setTimeout(function () {
              setSuccessMessage(null);
          }, 5000)
      } catch (error) {
          // Handle the error as needed
          setError("Network Error");
      }

  };

  const onFinishFailed =  (errorInfo: any) => {
      setError(errorInfo.data);

  };

  const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select defaultValue="216" className="input-addon-before">
          <Option value="216">+216</Option>
          <Option value="213">+213</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
  );
  return (
      <>
        <Row className="contactSection">
          <Col className="contact-form" xs={24} md={12}>
            <div style={{ width: "100%" }}>
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
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                  <Row gutter={24}>
                    <Col xs={24} md={12}>
                      <Form.Item
                          name="firstName"
                          label="Nom"
                          rules={[
                            {
                              required: true,
                              message: "Veuillez saisir votre nom",
                            },
                          ]}
                      >
                        <Input placeholder="Nom" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                          name="lastName"
                          label="Prénom"
                          rules={[
                            {
                              required: true,
                              message: "Veuillez saisir votre Prénom",
                            },
                          ]}
                      >
                        <Input placeholder="Prénom" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                      label="Email"
                      name="email1"
                      rules={[
                        { required: true,type:"email", message: "Veuillez saisir votre Email" },
                      ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                      label="Email"
                      name="email2"
                      rules={[
                        { required: true,type:"email", message: "Veuillez saisir votre Email" },
                      ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                      className="input-phone"
                      name="phoneNumber"
                      label="Numéro de télephone"
                      rules={[
                        {
                          required: true,
                          message: "Veuillez saisir votre Numéro de télephone",
                        },
                      ]}
                  >
                    <Input
                        className="contact-form-phone"
                        placeholder="Numéro de télephone"
                        addonBefore={prefixSelector}
                        style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item
                      name="message"
                      label="Message"
                      rules={[
                        {
                          required: true,
                          message: "Veuillez saisir votre message!",
                        },
                      ]}
                  >
                    <Input.TextArea
                        placeholder="Ecrire votre demande ici..."
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      {" "}
                      Envoyer{" "}
                    </Button>
                  </Form.Item>
                    {error && <Alert message={error} type="error" />}
                    {successMessage && <Alert message={successMessage} type="success" />}
                </Form>
              </AnimationOnScroll>
            </div>
          </Col>
          <Col xs={0} md={12} className="player-wrapper">
            <Row>
                {
                    !!mappedData.videoContact && !!mappedData.title && (
                        <Video url={mappedData.videoContact} title={mappedData.title} />
                    )
                }

            </Row>
          </Col>
        </Row>
      </>
  );
};
export default Contact;
