import { Carousel, Grid } from "antd";
import { useEffect, useState } from "react";
import {
  BreakoutIcon,
  MessageIcon,
  MessageSmileIcon, TopIcon,
  ZapIcon,
} from "../../assets/icons";
import { PublicPageType, PageContentType } from "@src/types/page";
import { AxiosResponse } from "axios";
import { getPageContentEndpoint } from "@src/api";

const { useBreakpoint } = Grid;


const Box = () => {
  const [cardsData, setCardsData] = useState<PublicPageType | null>(null);
  const [isMobile, setMobile] = useState(false);
  const [error, setError] = useState<string>('');
  const screens = useBreakpoint();
  const { xl } = useBreakpoint();


  useEffect(() => {
    setMobile(() => !xl);
  }, [xl]);

  useEffect(() => {
    const getPage = async () => {
      try {
        const res: AxiosResponse<PublicPageType> = await getPageContentEndpoint("HOME_PAGE");
        setCardsData(res.data);
        setError('');
      } catch (error) {
        setError("Network Error");
      }
    };

    getPage();
  }, []);

  const filteredCardsData: PageContentType[] = cardsData?.pageContents?.filter(
      (content) => content.type === 'CARD'
  ) || [];

  // Assuming iconOptions is defined somewhere in your code
  const iconOptions = [
    { icon: <BreakoutIcon />, value: '<BreakoutIcon />' },
    { icon: <MessageIcon />, value: '<MessageIcon />' },
    { icon: <MessageSmileIcon />, value: '<MessageSmileIcon />' },
    { icon: <ZapIcon />, value: '<ZapIcon />' },
    { icon: <TopIcon />, value: '<TopIcon />' },
  ];

  // Define a function to get the icon component based on the icon name
  const getIconComponent = (iconName:string) => {
    const foundIcon = iconOptions.find(({ value }) => value === iconName);
    return foundIcon ? foundIcon.icon : null;
  }

  const featuresData = filteredCardsData.map((card) => ({
    key: card.id,
    icon: getIconComponent(card.icon), // Use contentValue as the icon type or provide a default value
    title: card.title,
    paragraph: card.contentValue || "", // Use contentValue as the paragraph content or provide a default value
  }));

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

  const settings = {
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

  return (
      <>
        <Carousel arrows {...settings}>
          {featuresData.map(({ key, title, icon, paragraph }) => (
              <div className="card" key={key}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{paragraph}</p>
              </div>
          ))}
        </Carousel>
      </>
  );
};

export default Box;
