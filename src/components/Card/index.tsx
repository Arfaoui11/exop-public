import { createFromIconfontCN } from "@ant-design/icons";
import { Carousel, Col, Grid } from "antd";
import { useEffect, useState } from "react";
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

const { useBreakpoint } = Grid;

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
  {
    icon: <ZapIcon />,
    title: "title",
    paragraph: "description.",
    key: 5,
  },
];

export default function Box() {
  const screens = useBreakpoint();
  console.log(screens.sm);
  console.log(screens);
  const { xl } = useBreakpoint();
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(() => !xl);
  }, [xl]);

  const screen = () => {
    if (screens.sm) {
    }
  };
  return (
    <>
      {" "}
      <Carousel
        slidesToShow={
          screens.lg ? 4 : screens.md ? 3 : screens.sm ? 2 : screens.xs ? 1 : 4
        }
        autoplay
        dotPosition="bottom"
        dots
      >
        {featuresData.map(({ key, title, icon, paragraph }) => (
          <Col xs={24} key={key}>
            <div className="ani-card">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                duration={1}
                animateOnce={true}
                className="ani"
              >
                <div className="card">
                  <div className="icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{paragraph}</p>
                </div>
              </AnimationOnScroll>
            </div>{" "}
          </Col>
        ))}
      </Carousel>
    </>
  );
}
