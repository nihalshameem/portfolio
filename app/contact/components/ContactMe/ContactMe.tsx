import React, { FC } from "react";

import { ContactMeWrapper } from "./ContactMe.styled";

import { Button, Col, Flex, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

import ContactCarousel from "../ContactCarousel/ContactCarousel.lazy";
import { FormInputTypes } from "../../ContactEntities";
import { formInputs } from "../../ContactRepositories";

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = () => {
  const [form] = Form.useForm<FormInputTypes>();

  const onFinish = (values: FormInputTypes) => {
    console.log("Form Values:", values);
    form.resetFields();
  };

  return (
    <ContactMeWrapper>
      <Flex justify="space-between" align="flex-start">
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
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  name={"first_name"}
                  label="First Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
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
            <Button className="submitBtn" size="large" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
        <ContactCarousel />
      </Flex>
    </ContactMeWrapper>
  );
};

export default ContactMe;
