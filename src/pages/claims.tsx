import { UploadOutlined } from "@ant-design/icons";
import { MessageSuccessIcon } from "@src/assets/icons";
import BannerPage from "@src/components/Banner/BannerPage";
import { ClaimType } from "@src/types/claim";
import { getClaimRules } from "@src/utils/rules";
import { ObjectKey, serverErrors } from "@src/utils/server-errors";
import "animate.css/animate.min.css";
import { Alert, Button, Form, Input, Modal, Upload } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Claims() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { Item } = Form;
  const router = useRouter();
  const forbiddenExtensions = ['.exe', '.msi', '.bat', '.cmd', '.sh', '.zip', '.rar', '.7z', '.tar.gz', '.tgz', '.tar.bz2' ];

  async function submit(values: ClaimType) {
    setIsLoading(true);
    const formData = new FormData();
    let forbiddenFile= false;

    if (values.files) {
        values.files.fileList.forEach((file: any) => {
        const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);
          if (forbiddenExtensions.includes('.' + fileExtension)) {
            forbiddenFile = true;
          }
      });
    }

    if (forbiddenFile) {
        setError("Les documents zippés ou compressés ou à exécuter ne sont pas autorisés.");
        setIsLoading(false);
    }

    else{
      if (values.files) {
        values.files.fileList.forEach((file) => {
        formData.append(`files`, file.originFileObj);
      });
      }

    delete values.files;
    formData.append("properties", JSON.stringify(values));
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API_URL_V2 + "/claims/public",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      if (data.error) {
        const errorMsg = data.message as ObjectKey;
        setError(serverErrors[errorMsg]);
        setIsLoading(false);
      } else {
        setIsModalOpen(true);
      }
    } catch (error) {
      setError("Network Error");
      setIsLoading(false);
    }
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