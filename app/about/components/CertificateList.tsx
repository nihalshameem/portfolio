"use client";
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

import { Col, Row } from "antd";

import { imagePath } from "@/app/utils/config";

interface DataInterface {
  title: string;
  image_path: string;
  slug: string;
}

interface Props {
  certificates: DataInterface[];
}

const CertificateList: FC<Props> = ({ certificates }) => {
  return (
    <div className="certificate-list">
      <h4>Certificate</h4>
      <Row align={"middle"} gutter={[16, 24]} justify="center">
        {certificates.map((item, i) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={8} key={i}>
            <div className="cert-card">
              <Link href={"/certificates/" + item.slug}>
                <Image
                  src={imagePath + item.image_path}
                  alt="image"
                  priority
                  width={200}
                  height={200}
                />
                <p className="title">{item.title}</p>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CertificateList;
