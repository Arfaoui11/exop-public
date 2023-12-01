import {FilterOutlined, SearchOutlined} from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker, Divider,
  Form, Input,
  Row,
  Select,
  Typography
} from 'antd';

import React from 'react';
import dayjs from "dayjs";
import {IFilterParams, IListPublicDocsParams} from "@src/types/page";

const { Title, Paragraph } = Typography;


const { Item } = Form;
const { RangePicker } = DatePicker;

type FilterPropsType = {
  onFilter: (params: IFilterParams) => void;
}

const Filter: React.FC<FilterPropsType> = ({ onFilter }) => {




  const regulationNaturesOptions = [
    {label: "Loi", value: "LOI"},
    {label: "Décret-loi", value: "DECRET_LOI"},
    {label: "Décret", value: "DECRET"},
    {label: "Avis de change", value: "AVIS_DE_CHANGE"},
    {label: "Circulaire", value: "CIRCULAIRE"},
    {label: "Note aux IAT", value: "NOTE_AUX_IAT"},
  ];


  const {Item} = Form;
  // const { RangePicker } = DatePicker;

  const [filterForm] = Form.useForm();

  const mapValuesToSearchParams = (values: IListPublicDocsParams) => {
    return Object.keys(values).reduce((acc: { [key: string]: any }, key) => {
      if (values[key as keyof IListPublicDocsParams]) acc[key] = values[key as keyof IListPublicDocsParams];
      return acc;
    }, {});
  }
  const handleDisableDate = (date: dayjs.Dayjs) => date.year() < 1956 || date.year() > dayjs().year();

  const handleFilterChange = (values: IListPublicDocsParams) => {

    const newValues: IListPublicDocsParams = mapValuesToSearchParams(values)
    const params: IFilterParams = {
      ...newValues,
      page: 1,
      pageSize :4,
      isActive: true,
    };
    if (newValues.creationYear) params.creationYear = String(dayjs(newValues.creationYear).year());
    onFilter(params);
  }



  return (
      <Form
          form={filterForm}
          name="filter-form"
          size="large"
          onFinish={handleFilterChange}
          layout="vertical"
          autoComplete="off"
      >
        {/* First row */}
        <Row gutter={[16, 16]}>
          <Col md={12} sm={12} xs={24}>
            <Item name="nature" label="Nature du document">
              <Select
                  placeholder="Nature du document"
                  allowClear
                  options={regulationNaturesOptions}
              />
            </Item>
          </Col>
          <Col md={12} sm={16} xs={12}>
            <Item name="creationYear" label="Année de création">
              <DatePicker
                  picker="year"
                  placeholder="Année de création"
                  allowClear
                  disabledDate={handleDisableDate}
              />
            </Item>
          </Col>
          <Col md={18} sm={12} xs={24}>
            <Item name="search" label="Mots clés">
              <Input
                  placeholder="Recherche"
                  prefix={<SearchOutlined />}
                  allowClear
              />
            </Item>
          </Col>
          <Col md={6} sm={12} xs={24} style={{ paddingTop: '53px' }}>
            <Button type="primary" htmlType="submit">
              Filtrer <FilterOutlined />
            </Button>
          </Col>
          <Divider />
        </Row>
      </Form>
  );
};

export default Filter;
