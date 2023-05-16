import { EyeOutlined, SearchOutlined } from '@ant-design/icons';
import BannerPage from '@src/components/Banner/BannerPage';
import Filter from '@src/components/Filter';
import "animate.css/animate.min.css";
import { Button, Col, Divider, Input, Row, Typography } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import imgAbout from '../../assets/images/regle.png';
const { Paragraph,Title } = Typography;
export default function Regulations() {
  return (
    <>
      <Head>
        <title>EXPO | Réglementations</title>
      </Head>
      <BannerPage title="Réglementations"/>
      <div className='content-wrapper page-section'>
          <Row>
            <Col xs={24} md={18}>
              <Title level={3}>Texte introductif</Title>
              <Paragraph className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
              <Filter />
              <Divider />
              <Input size="large" placeholder="Recherche" prefix={<SearchOutlined />} />
              <Divider />
                
               
                <Row gutter={[16, 16]}>
                  <Col xs={32} md={32} lg={12} className='btn-pdf'>
                    <a href='../../assets/pdf/exop.pdf'  target='_blank' rel=''>
                      <Button  type="primary" ghost icon={<EyeOutlined />}>Facture .pdf</Button>
                  </a>
                  </Col>
                  <Col xs={32} md={32} lg={12}  className='btn-pdf'>
                    <a href='../../assets/pdf/exop.pdf'  target='_blank' rel=''>
                        <Button  type="primary" ghost icon={<EyeOutlined />}>Facture Proforma description.pdf</Button>
                    </a>
                  </Col>
                <Col xs={32} md={32} lg={12}  className='btn-pdf'>
                    <a href='../../assets/pdf/exop.pdf'  target='_blank' rel=''>
                      <Button  type="primary" ghost icon={<EyeOutlined />}>Facture Proforma.pdf</Button>
                  </a>
                  </Col>
                  <Col xs={32} md={32} lg={12}  className='btn-pdf'>
                    <a href='../../assets/pdf/exop.pdf'  target='_blank' rel=''>
                        <Button  type="primary" ghost icon={<EyeOutlined />}>Facture Proforma descrip.pdf</Button>
                    </a>
                  </Col>
                </Row>
            </Col>
            <Col xs={24} md={6} style={{textAlign: 'center'}}>
              <Image
                src={imgAbout}
                alt=""
              />
            </Col>
          </Row>
        </div>
    </>
  )
}
