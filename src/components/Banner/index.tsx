import { Button, Typography } from 'antd';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from "./styles.module.css";

const { Paragraph,Title } = Typography;
export default function Banner() {
  return (
    <>

       <div className={styles.slide}>
        <div className={styles.bannerBgContainer}>
          <div className={styles.bannerContainer}>
            <div className={styles.detailBox}>
              <div className={styles.titleslide}>
                <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1} animateOnce={true}>
                Découvrez notre nouvelle plateforme EXOP.
                </AnimationOnScroll>
              </div>
              <div className={styles.textslide}> 
               <AnimationOnScroll animateIn="animate__fadeInLeft" duration={2} animateOnce={true}>
                Une platforme digitale pour les citoyens, les opérateurs économiques ainsi que le personnel de la banque centrale.
                </AnimationOnScroll>
              </div>
              
              <div> 
                <AnimationOnScroll animateIn="animate__fadeIn" duration={5} animateOnce={true}>
                  <Button type="primary">
                    Déposer une requete
                  </Button>
                 </AnimationOnScroll>
                  
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}
