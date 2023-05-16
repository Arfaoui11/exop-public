
import Image from 'next/image';
interface SvgImageProps {
  src: string;
  alt: string;
  [key: string]: unknown;
  size?: number;
}

const SvgImage: React.FC<SvgImageProps> = ({ src, alt, size, ...restProps }) => {
  return  <Image src={src} alt={alt} {...restProps} className="exop-icon" style={{
    width: size || "auto"
  }}
                    
  />;
};

export default SvgImage;
