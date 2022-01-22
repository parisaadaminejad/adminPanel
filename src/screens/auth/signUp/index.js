import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button, Checkbox, Input, Typography } from "antd";
import useTitle from "hooks/useTitle";
import { postRequest } from "api";
import {
  userTokenAction,
  useUserTokenStateDispatcher,
} from "context/userToken";
import { HOME_ROUTE } from "routes/constants";
import Style from "./style";

const { Item } = Form;

export function SignUp() {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const [confirm_term_and_conditions, setConfirmTerm] = useState(false);
  const [confirm_receive_emails, setConfirmEmails] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();
  useTitle("sign Up");
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const tokenDispatcher = useUserTokenStateDispatcher();
  async function handleSubmit(values) {
    values.confirm_term_and_conditions = confirm_term_and_conditions;
    values.confirm_receive_emails = confirm_receive_emails;
    console.log("valu", values);
    try {
      setLoading(true);
      const response = await postRequest("/register", values);
      console.log("response", response);
      userTokenAction(tokenDispatcher, response.data);

      navigate.push(HOME_ROUTE);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("response error" + JSON.stringify(error));
    }
  }
  return (
    <Style>
      <Row>
        <Col span={6} className="col-left">
          <div className="col-left-text">
            <p className="col-left-text1">thirdly</p>
            <p className="col-left-text2">thirdly official</p>
          </div>
        </Col>
        <Col span={18} className="col-right">
          <Form
            name="basic"
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={10} offset={2}>
                <Title>sign up</Title>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={10} offset={2}>
                <Item
                  className="username"
                  label="First name"
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your firstName",
                    },
                  ]}
                >
                  <Input placeholder="Enter your first name"></Input>
                </Item>
              </Col>
              <Col span={10}>
                <Item
                  className="username"
                  label="Last name"
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastName",
                    },
                  ]}
                >
                  <Input placeholder="Enter your Last name" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={10} offset={2}>
                <Item
                  className="username"
                  label="Phone number"
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number",
                    },
                  ]}
                >
                  <Input placeholder="++33" />
                </Item>
              </Col>
              <Col span={10}>
                <Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    { type: "email", message: "The input is not valid email" },
                  ]}
                >
                  <Input placeholder="Enter email address" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={10} offset={2}>
                <Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password",
                    },
                  ]}
                >
                  <Input.Password placeholder="********" />
                </Item>
              </Col>
              <Col span={10}>
                <Item
                  className="username"
                  label="Confirm password"
                  name="password_confirmation"
                  rules={[
                    {
                      required: true,
                      message: "Please input your confirmPassword!",
                    },
                  ]}
                >
                  <Input.Password />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={10} offset={2}>
                <Item name="confirm_term_and_conditions">
                  <Checkbox
                    checked={confirm_term_and_conditions}
                    onChange={(e) => setConfirmTerm(e.target.checked)}
                    defaultChecked={false}
                  >
                    I have read and agree to the Torms & Conditions
                  </Checkbox>
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={10} offset={2}>
                <Item name="confirm_receive_emails">
                  <Checkbox
                    checked={confirm_receive_emails}
                    onChange={(e) => setConfirmEmails(e.target.checked)}
                    defaultChecked={false}
                  >
                    Sing up for new emails{" "}
                  </Checkbox>
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={10} offset={19}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    background: " #3bd3d3f0",
                    color: "#ffffff",
                    textTransform: "uppercase",

                    borderRadius: 6,
                    border: "none",
                    marginTop: 50,
                  }}
                >
                  sing up
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Style>
  );
}
export default SignUp;
