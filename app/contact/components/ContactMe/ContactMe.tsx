import React, { FC, useState } from "react";

import { ContactMeWrapper } from "./ContactMe.styled";

import TextArea from "antd/es/input/TextArea";
import { Button, Col, Form, Input, message, Row } from "antd";
import { NoticeType } from "antd/es/message/interface";

import ContactCarousel from "../ContactCarousel/ContactCarousel.lazy";
import { apiRequest } from "@/app/utils/apiRequest";
import { errMessageIns } from "@/app/utils/commonUtils";
import { FormInputTypes } from "../../ContactEntities";
import { formInputs } from "../../ContactRepositories";

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = () => {
  const [form] = Form.useForm<FormInputTypes>();
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState<boolean>(false);

  const conactMeApicall = async (
    req: any,
    cb: (type: NoticeType, msg: string) => void
  ) => {
    try {
      const data = await apiRequest("contact-me", "POST", req);
      if (data && data.status === "success") {
        cb(
          "success",
          data && data.message ? data.message : "Submitted Successfully"
        );
      } else {
        cb(
          "error",
          data && data.message ? data.message : "Something went wrong!"
        );
      }
    } catch (error) {
      cb("error", errMessageIns(error));
    }
  };

  const onFinish = (values: FormInputTypes) => {
    setLoading(true);
    conactMeApicall(values, (type, msg) => {
      setLoading(false);
      type === "success" && form.resetFields();
      messageApi.open({
        type: type,
        content: msg,
      });
    });
  };

  return (
    <ContactMeWrapper>
      {contextHolder}
      <Row gutter={[30, 30]} justify="center" align={"bottom"}>
        <Col xs={24} md={12} className="form-col">
          <div className="form-div">
            <h4>Contact me</h4>
            <h5>For any questions or feedback, please reach out</h5>
            <Form
              form={form}
              className="contact-form"
              initialValues={formInputs}
              onFinish={onFinish}
            >
              <Row gutter={[30, 0]}>
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    name={"first_name"}
                    label="First Name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    name={"last_name"}
                    label="Last Name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    name={"email"}
                    label="Email"
                    rules={[
                      { required: true, message: "Invalid email Id" },
                      { type: "email", message: "Invalid email Id" },
                    ]}
                  >
                    <Input type="email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    name={"message"}
                    label="Your Message"
                    rules={[{ required: true }]}
                  >
                    <TextArea
                      rows={5}
                      maxLength={500}
                      showCount
                      style={{ resize: "none" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Button
                className="submitBtn"
                size="large"
                htmlType="submit"
                loading={loading}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs={24} md={12} className="carousel-col">
          <ContactCarousel />
        </Col>
      </Row>
    </ContactMeWrapper>
  );
};

export default ContactMe;
