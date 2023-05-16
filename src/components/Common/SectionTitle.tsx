

import { Typography } from 'antd';
const { Paragraph,Title } = Typography;


const SectionTitle = ({
  title,
}: {
  title: string;
}) => {
  return (
    <>
          <Title level={2}>{title}</Title>
    
    </>
  );
};

export default SectionTitle;
