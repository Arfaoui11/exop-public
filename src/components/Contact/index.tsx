import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Video from "../Media/Video";
const { Paragraph, Title } = Typography;
const { Option } = Select;
const Contact: React.FC = () => {
  const video = "@src/assets/videos/video.mp4";

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
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
                  name="email"
                  rules={[
                    { required: true, message: "Veuillez saisir votre Email" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  className="input-phone"
                  name="phone"
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
                  name={"message"}
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
              </Form>
            </AnimationOnScroll>
          </div>
        </Col>
        <Col xs={0} md={12} className="player-wrapper">
          <Row>
            <Video />
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Contact;
