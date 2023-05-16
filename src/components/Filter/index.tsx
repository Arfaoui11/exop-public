import { FilterOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Row,
  Select,
  Typography
} from 'antd';

import React from 'react';

const { Title, Paragraph } = Typography;


const { Item } = Form;
const { RangePicker } = DatePicker;

const Filter: React.FC = () => {
  const handleFilterSubmit = () => {
    //
  };

  return (


      <Form
        name="filter-form"
        size="large"
        onFinish={handleFilterSubmit}
        layout="vertical"
      >
        {/* First row */}
        <Row gutter={[16, 16]}>
          <Col md={8} sm={12} xs={24}>
            <Item >
              <Select placeholder="Nature du text" />
            </Item>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Item>
              <Select placeholder="Année" />
            </Item>
          </Col>
     
          <Col md={8} sm={24}>
            <Button type="primary">
              Filtrer <FilterOutlined />
            </Button>
          </Col>
        </Row>
      </Form>
  );
};

export default Filter;
