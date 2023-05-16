import BannerPage from '@src/components/Banner/BannerPage';
import "animate.css/animate.min.css";
import { Col, Divider, Row, Typography } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import imgAbout from '../../assets/images/about.png';
const { Paragraph,Title } = Typography;
export default function Home() {
  return (
    <>
      <Head>
        <title>EXPO | Connaitre EXOP</title>
      </Head>
      <BannerPage title="Connaitre EXOP"/>
      <div className='content-wrapper page-section'>
        <Title level={3}>Texte introductif</Title>
        <Divider />
       <Title level={5}>
            Plateforme digitale qui centralise le traitement de toutes vos requêtes de change depuis leur dépôt jusqu’à la délivrance des décisions de la Banque Centrale de Tunisie 

        </Title>
        </div>
        <div className='content-wrapper page-section'>
        <Title level={3}>Points forts et principales fonctionnalités</Title>
        <Divider />
         <Row justify="center" align="middle">
        <Col xs={24} md={12}>
            <Paragraph>
                Faciliter la procédure de dépôt de vos requêtes de changes 
                offrir plus de visibilité sur le sort de ces requêtes 
                Rendre la communication avec l’équipe de la Banque Centrale de Tunisie plus fluide 
                Écourter les délais de traitements de vos requêtes de changes 

            </Paragraph>
        </Col>
        <Col xs={24} md={12} style={{textAlign: 'center'}}>
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
