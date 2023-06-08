import { createFromIconfontCN } from "@ant-design/icons";
import { Col, Row } from "antd";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  BreakoutIcon,
  MessageIcon,
  MessageSmileIcon,
  ZapIcon,
} from "../../assets/icons";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const featuresData = [
  {
    icon: <BreakoutIcon />,
    title: "Parcours Digitalisé",
    paragraph:
      "Déposez, là où vous êtes, votre requête de change auprès de la Banque Centrale de Tunisie par un simple clic.",
    key: 1,
  },
  {
    icon: <MessageIcon />,
    title: "Suivi centralisé",
    paragraph:
      "Suivez sur EXOP l'avancement du traitement de votre requête en temps réel jusqu'à la délivrance de la décision de la BCT.",
    key: 2,
  },
  {
    icon: <MessageSmileIcon />,
    title: "Transactions sécurisées",
    paragraph:
      "Introduisez vos données sur EXOP en toute sécurité et confidentialité.",
    key: 3,
  },
  {
    icon: <ZapIcon />,
    title: "Support de proximité",
    paragraph:
      "Restez en contact avec les services de la BCT pour tout renseignement.",
    key: 4,
  },
];
export default function Box() {
  return (
    <>
      <Row gutter={[24, 48]}>
        {featuresData.map((feature, index) => (
          <>
            <Col
              xs={24}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              key={feature.key}
              className="ani-card"
            >
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                duration={1}
                animateOnce={true}
                className="ani"
              >
                <div className="card">
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.paragraph}</p>
                </div>
              </AnimationOnScroll>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
}
