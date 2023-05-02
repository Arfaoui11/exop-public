import { Button, Typography } from 'antd';
import styles from "./styles.module.css";


const { Paragraph,Title } = Typography;
export default function Banner() {
  return (
    <>

       <div className={styles.slide}>
        <div className={styles.bannerBgContainer}>
          <div className={styles.bannerContainer}>
            <div className={styles.detailBox}>
              <div className={styles.titleslide}>Découvrez notre nouvelle plateforme EXOP.</div>
              <div className={styles.textslide}> Une platforme digitale pour les citoyens, les opérateurs économiques ainsi que le personnel de la banque centrale. </div>
              <div>
                <Button type="primary">Déposer une requete</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}
