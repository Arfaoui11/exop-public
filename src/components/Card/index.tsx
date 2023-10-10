import { createFromIconfontCN } from "@ant-design/icons";
import { Grid } from "antd";
import { useEffect, useState } from "react";
import Slider from "react-slick";
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
    title: "Transactions sécurisées ",
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
    title: "-- Support de proximité --",
    paragraph:
      "-- Restez en contact avec les services de la BCT pour tout renseignement. --",
    key: 5,
  },
];
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}
export default function Box() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <Slider {...settings}>
        {featuresData.map(({ key, title, icon, paragraph }) => (
          <div className="card" key={key}>
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
        ))}
      </Slider>
    </>
  );
}
