import { Input, Typography } from "antd";
import { AnimationOnScroll } from "react-animation-on-scroll";
//import styles from "./styles.module.css";

const { Paragraph, Title } = Typography;
export default function Banner() {
  return (
    <>
      <div className="slide">
        <div className="bannerBgContainer">
          <div className="bannerContainer">
            <div className="detailBox">
              <div className="titleslide">
                <AnimationOnScroll
                  animateIn="animate__fadeInLeft"
                  duration={1}
                  animateOnce={true}
                >
                  Découvrez notre nouvelle plateforme EXOP.
                </AnimationOnScroll>
              </div>
              <div className="textslide">
                <AnimationOnScroll
                  animateIn="animate__fadeInLeft"
                  duration={2}
                  animateOnce={true}
                >
                  Une platforme digitale pour les citoyens, les opérateurs
                  économiques ainsi que le personnel de la banque centrale.
                </AnimationOnScroll>
              </div>

              <div>
                <AnimationOnScroll
                  animateIn="animate__fadeIn"
                  duration={5}
                  animateOnce={true}
                >
                  <Input size="large" placeholder="Enter your email" />
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
