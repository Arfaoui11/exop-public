import Image from 'next/image';
import Background from '../../../assets/section.png';
const BackgroundImage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', height: '100vh' }}>
 
      <Image
      alt="banner"
      src={Background}
      placeholder="blur"
      style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
    />
    </div>
  );
};

export default BackgroundImage;
