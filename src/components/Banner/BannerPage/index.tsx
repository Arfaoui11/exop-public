import Breadcrumb from '@src/components/Common/Breadcrumb';
import SectionTitle from '@src/components/Common/SectionTitle';
import { Row, Typography } from 'antd';
const { Paragraph,Title } = Typography;


const BannerPage = ({
  title,
}: {
  title: string;
}) => {
  return (
    <>
      <Row  className="BannerPage"  justify="space-between" align="middle">
        <SectionTitle title={title} />
        <Breadcrumb pageName={title} />
      </Row>
    
    </>
  );
};

export default BannerPage;

