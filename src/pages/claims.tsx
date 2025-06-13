import { UploadOutlined } from "@ant-design/icons";
import { MessageSuccessIcon } from "@src/assets/icons";
import BannerPage from "@src/components/Banner/BannerPage";
import { ClaimType } from "@src/types/claim";
import { getClaimRules } from "@src/utils/rules";
import "animate.css/animate.min.css";
import { Alert, Button, Form, Input, Modal, Upload } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AxiosResponse } from 'axios';
import {sendClaim} from "@src/api/content-management";



export default function Claims() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { Item } = Form;
  const router = useRouter();

  async function submit(values: ClaimType) {
    setIsLoading(true);
    const formData = new FormData();

    if (values.files) {
      values.files.fileList.forEach((file) => {
        formData.append(`files`, file.originFileObj);
      });
    }

    delete values.files;
    formData.append("properties", JSON.stringify(values));
    try {
      const res: AxiosResponse<ClaimType> = await sendClaim(formData);
      if (res.data) {
        setIsModalOpen(true);
      }
    } catch (error : any) {
      if (error.general && error.general[0]  === 'ERROR_EXTENSIONS_NOT_SUPPORTED') {
        setError("Erreur extensions non prises en charge");
      }else {
        setError("Network Error");
      }
      setIsLoading(false);
    }
  }


  const handleOk = () => {
    setIsLoading(false);
    setIsModalOpen(false);
    router.push("/");
  };

  const handleCancel = () => {
    setIsLoading(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <BannerPage title="Réclamations" />
      <div className="content-wrapper page-section">
        <Form
          name="claim"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="vertical"
          style={{ maxWidth: 800 }}
          onFinish={submit}
          autoComplete="off"
        >
          <Item
            label="E-mail"
            name="email"
            rules={getClaimRules('email')}
          >
            <Input placeholder="E-mail" />
          </Item>

          <Item label="Référence requête" name="reference" rules={getClaimRules('requestReference')}>
            <Input placeholder="Référence requête" />
          </Item>

          <Item
            label="Objet"
            name="object"
            rules={getClaimRules('object')}
          >
            <Input placeholder="Objet" />
          </Item>

          <Item
            label="Description"
            name="description"
            rules={getClaimRules('description')}
          >
            <Input.TextArea placeholder="Description" />
          </Item>

          <Item name="files">
            <Upload
              multiple={false}
              className="upload-list-inline upload-claims"
              beforeUpload={()=> false}
            >
              <Button icon={<UploadOutlined />} type="text">
                Sélectionner une pièce jointe
              </Button>
            </Upload>
          </Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Envoyer
            </Button>
          </Form.Item>
          {error && <Alert message={error} type="error" />}
        </Form>
      </div>

      <Modal
        title=""
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        closable={false}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <>
          <MessageSuccessIcon />
          <h3>Réclamation envoyée</h3>
          <p>Votre réclamation a été bien envoyée</p>
        </>
      </Modal>
    </>
  );
}