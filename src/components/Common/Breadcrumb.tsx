
import { HomeOutlined, RightOutlined } from '@ant-design/icons';

const Breadcrumb = ({
  pageName,
}: {
  pageName: string;
}) => {
  return (
    <>
    <div>
      <HomeOutlined /> <RightOutlined /> {pageName}
    </div>
    </>
  );
};

export default Breadcrumb;
