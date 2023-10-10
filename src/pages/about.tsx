import BannerPage from "@src/components/Banner/BannerPage";
import "animate.css/animate.min.css";
import { Col, Divider, Row, Typography } from "antd";
import Head from "next/head";
import Image from "next/image";
import imgAbout from "../assets/images/about.png";
const { Paragraph, Title } = Typography;
export default function Home() {
  return (
    <>
      <Head>
        <title>EXPO | Connaitre EXOP</title>
      </Head>
      <BannerPage title="Connaitre EXOP" />
      <div className="content-wrapper page-section">
        <Title level={5}>
          Dans le cadre de son plan stratégique et afin de digitaliser ses
          processus métiers et améliorer la qualité de ses services offerts aux
          intermédiaires agréés, opérateurs économiques et citoyens, la Banque
          Centrale de Tunisie a mis en place la plateforme « EXOP » dédiée au
          dépôt et au traitement électronique des requêtes en matière de change.
          <br />
          <br />
          Cette plateforme vient dématérialiser les formalités et les démarches
          afférentes à l’introduction des demandes d’autorisation auprès de la
          BCT et permettra aux opérateurs économiques et citoyens de déclarer en
          ligne leurs requêtes de change, communiquer instantanément avec les
          services de la BCT et suivre l’état d’avancement du traitement
          desdites requêtes.
          <br /> <br />
          EXOP offrira ainsi à toute personne physique ou morale, à titre
          professionnel ou personnel, un accès simple et rapide à ses
          différentes fonctionnalités et prévoit un module exclusif aux
          Intermédiaires Agréés, leur permettant de déposer une requête pour
          leur propre compte ou pour le compte de leur clientèle.
        </Title>
      </div>
      <div className="content-wrapper page-section">
        <Title level={3}>Points forts et principales fonctionnalités</Title>
        <Divider />
        <Row justify="center" align="middle">
          <Col xs={24} md={12}>
            <Paragraph>
              - Faciliter la procédure de dépôt des requêtes de changes
              <br />- Offrir plus de visibilité sur le sort des requêtes de
              change, <br />
              - Rendre la communication avec les services de la BCT plus fluide,
              <br />- Ecourter les délais de traitement des requêtes de changes
            </Paragraph>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <Image src={imgAbout} alt="" />
          </Col>
        </Row>
      </div>
    </>
  );
}
