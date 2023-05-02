
import { Button, Layout, Menu } from 'antd';
import Image from 'next/image';
import logo from '../../assets/exop.svg';
const {  Content,  Sider ,Footer} = Layout;


const Navbar = () => {

return (
  <div className="header" style={{ height:'80px' }}>
  <div className='content-menu' >
      <div style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%',height:'80px' }}>
        <div
          style={{
            float: 'left',
            width: 140,
            height: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Image
          style={{
            width: '100%',
          }}
              src={logo}
              alt="logo"
              
            />
          </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className='InterSemiBoldFont'
          
        >
            <Menu.Item >
                <span className="nav-text">Connaitre EXOP</span>
            </Menu.Item>

            <Menu.Item>
                <span className="nav-text">Réglementations</span>
            </Menu.Item>
           <Menu.Item>
                <span className="nav-text">Informations utiles</span>
            </Menu.Item>

            <Menu.Item>
                <span className="nav-text">E-Services</span>
            </Menu.Item>
            
            <Menu.Item>
                <span className="nav-text">Réclamations</span>
            </Menu.Item>

            <Menu.Item>
                <span className="nav-text">Contact</span>
            </Menu.Item>
           <Menu.Item className='last-link '>
              <Button type="primary" className='InterSemiBoldFont' >Déposer une requete</Button>
            </Menu.Item>

          </Menu>
      </div>
      </div>
      </div>
    );
}

export default Navbar
