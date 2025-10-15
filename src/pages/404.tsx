import BannerPage from '@src/components/Banner/BannerPage';
import "animate.css/animate.min.css";
import { Divider, Typography } from 'antd';
import Head from 'next/head';
const { Title } = Typography;
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Exop | 404</title>
      </Head>
      <BannerPage title="404" />
      <div className='content-wrapper page-section error-page'>
      
              <Title level={3}>Page introuvable ..</Title>
             
              <Divider />
            
        
        </div>
    </>
  )
}
