import BannerPage from '@src/components/Banner/BannerPage';
import "animate.css/animate.min.css";
import { Tabs, TabsProps, Typography } from 'antd';
import Head from 'next/head';
const { Paragraph,Title } = Typography;

import React from 'react';
import Documents from './Documents';
import Faq from './Faq';
import Guide from './Guide';

const tabsData:TabsProps['items']= [
  {
    label: "FAQ",
    children: <Faq />,
    key: "faq",
  },
  {
    label: "Documents requêtes",
    children: <Documents />,
    key: "faq-doc",
  },  
   {
    label: "Guide d'utilisateurs",
    children: <Guide />,
    key: "faq-guide",
    
  }, 
];
const Informations: React.FC = () => (
<>
    <Head>
        <title>EXPO | Informations Utiles</title>
      </Head>
      <BannerPage title="Informations Utiles" />
      <div className='content-wrapper page-section'>

           <Tabs
          // tabPosition="left"
            defaultActiveKey="1"
            type="card"
            centered
            items={tabsData}
        />

     
      </div>
  </>
);

export default Informations;