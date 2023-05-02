import Banner from '@src/components/Banner';
import Contact from '@src/components/Contact';
import { Button, Col, Row, Typography } from 'antd';
const { Paragraph,Title } = Typography;

import { createFromIconfontCN } from '@ant-design/icons';
import Image from 'next/image';
import chart from '../assets/chart-breakout-square.svg';
import messageChat from '../assets/message-chat-circle.svg';
import messageSmile from '../assets/message-smile-circle.svg';
import zap from '../assets/zap.svg';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


export default function Home() {
  return (
    <>
  
      <Banner />

      <div className="features content_padding">
        <div className='layout_padding'>
        <Row  gutter={[16, 48]}><Col><h4>Fonctionalités</h4></Col></Row>
        <Row  gutter={[16, 48]}>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <h1>Une nouvelle plateforme revolutionnaire pour la BCT.</h1>
            <h3 className='InterRegularFont'>
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </h3>
          </Col> 
        </Row>
        <Row gutter={[24, 48]} >
          <Col  xs={24} sm={12} md={12} lg={6} xl={6}>
               <div className="card">
                <div className="icon">
                    <Image
                    src={messageChat}
                    alt="messageChat"
                    
                  />
               </div>
                  
                  <h3>Share team inboxes</h3>
                  <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
          </Col>
          <Col  xs={24} sm={12} md={12} lg={6} xl={6}>
               <div className="card">
                  <div className="icon">
                      <Image
                      src={zap}
                      alt="zap"
                    />
                  </div>
                  <h3>Share team inboxes</h3>
                  <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
          </Col>
          <Col  xs={24} sm={12} md={12} lg={6} xl={6}>
               <div className="card">
                  <div className="icon">
                      <Image
                      src={chart}
                      alt="chart"
                    />
                  </div>
                  <h3>Share team inboxes</h3>
                  <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
          </Col>
          <Col  xs={24} sm={12} md={12} lg={6} xl={6}>
               <div className="card">
                  <div className="icon">
                      <Image
                      src={messageSmile}
                      alt="messageSmile"
                    />
                  </div>
                  <h3>Share team inboxes</h3>
                  <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
          </Col>
        </Row>
         </div>
       </div>
      
      <div className="request-section">
        <div className='content_padding'>
          <Row justify="center" align="middle">
           <Col><h1>Soumettre votre demande maintenant.</h1></Col>
         </Row>
         <Row justify="center" align="middle">
          <Col>
            <h3 className='InterRegularFont'>
               Forem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
            </Col>
          </Row>
          <Row justify="center" align="middle">
           <Col>
              <Button type="primary" className='InterSemiBoldFont' >Déposer une requete</Button>
            </Col>
          </Row>
       </div>
    </div>
      <Contact />
    </>
  )
}
