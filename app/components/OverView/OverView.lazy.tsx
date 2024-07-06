import dynamic from "next/dynamic";
import React from "react";

import { Col, Row, Skeleton } from "antd";

const OverView = dynamic(() => import("./OverView"), {
  loading: () => (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
      <Col span={6}>
        <Skeleton />
      </Col>
      <Col span={6}>
        <Skeleton />
      </Col>
    </Row>
  ),
  ssr: false,
});

export default OverView;
