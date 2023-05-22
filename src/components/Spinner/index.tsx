import { Spin } from "antd";
import React from "react";

const Spinner: React.FC = () => (
  <div className="example">
    <Spin delay={30} />
  </div>
);

export default Spinner;
