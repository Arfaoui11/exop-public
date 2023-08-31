import { UploadOutlined } from '@ant-design/icons';
import BannerPage from '@src/components/Banner/BannerPage';
import { ClaimType } from '@src/types/claim';
import { ObjectKey, serverErrors } from '@src/utils/server-errors';
import "animate.css/animate.min.css";
import { Alert, Button, Form, Input, Modal, Upload } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Claims() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError]= useState<string>();
  const {Item} = Form;
  const router = useRouter();

  async function  submit (values: ClaimType) {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('properties', JSON.stringify(values));
    if (values.files)
    values.files.fileList.forEach((file) => {
      const blob = new Blob([file], { type: file.type });
      formData.append(`files`, blob, file.name);
    });
    try {
      const response = await fetch('http://192.168.34.135:7001/api/claims', {
      method: 'POST',
      body: formData,
    })
      const data = await response.json();
      const msg = data.error as ObjectKey;

      //if (data.error){
      //setError(serverErrors[msg])
      //setIsLoading(false);
      //}
      //else {
        setIsModalOpen(true)
      //};
    } catch (error) {
      setError('Network Error');
      setIsLoading(false);
    }
  }
    const handleOk = () => {
    setIsLoading(false);
    setIsModalOpen(false);
    router.push('/')
  };
  return (
  <>
  <BannerPage title="Réclamations" />
  <div className='content-wrapper page-section'>
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
      rules={[{ required: true, message: 'champs obligatoire!' },{ type: 'email', message: 'email non valide'}]}
    >
      <Input />
    </Item>

    <Item
      label="Référence requête"
      name="reference"
      rules={[{ required: true, message: 'champs obligatoire!' }]}
    >
      <Input />
    </Item>
    
    <Item
      label="Objet"
      name="objet"
      rules={[{ required: true, message: 'champs obligatoire!' }]}
    >
      <Input />
    </Item>

    <Item
      label="Description"
      name="description"
      rules={[{ required: true, message: 'champs obligatoire!' }]}
    >
      <Input.TextArea />
    </Item>

      <Item name="files">
        <Upload multiple={false} beforeUpload={() => false}>
          <Button
            block
            icon={<UploadOutlined />}
            type="text"
          >
            Sélectionner une pièce jointe
          </Button>
        </Upload>
      </Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" loading={isLoading}>
        Envoyer
      </Button>
    </Form.Item>
    {error && ( <Alert message={error} type="error" /> )}
  </Form>
  </div>
  <Modal 
    title="Succès" 
    open={isModalOpen}  
    footer={[<Button key="submit" type="primary"  onClick={handleOk}>OK</Button>]}>
    <p>Réclamation envoyée</p>
  </Modal>
    </>
  )
}
