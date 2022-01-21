import { Form, Col, Row, Button, Checkbox, Input, Typography } from "antd";
import useTitle from "hooks/useTitle";
import { postRequest } from "api";
import Style from "./style";
import { useState } from "react";
import {
  userTokenAction,
  useUserTokenStateDispatcher,
  useUserTokenState,
} from "context/userToken";
const { Item } = Form;

export function SignUp() {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const [confirm_term_and_conditions, setConfirmTerm] = useState(false);
  const [confirm_receive_emails, setConfirmEmails] = useState(false);

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
      // setLoading(true);
      const response = await postRequest("/register", values);
      console.log("response", response);
      userTokenAction(tokenDispatcher, response.data);

      // navigate.push(HOME_ROUTE);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
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
          <Title
            style={{
              marginLeft: 80,
              marginTop: 30,
              textTransform: "uppercase",
            }}
          >
            sign up
          </Title>
          <Row gutter={16}>
            <Col span={10} push={2} style={{ marginTop: 50 }}>
              <Form
                name="basic"
                form={form}
                onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Item className="username" label="First name" name="first_name">
                  <Input placeholder="Enter your first name"></Input>
                </Item>

                <Item
                  className="username"
                  label="Phone number"
                  name="phone_number"
                >
                  <Input placeholder="++33" />
                </Item>
                <Item className="username" label="Password" name="password">
                  <Input placeholder="********" />
                </Item>
                <Item name="confirm_term_and_conditions">
                  <Checkbox
                    checked={confirm_term_and_conditions}
                    onChange={(e) => setConfirmTerm(e.target.checked)}
                    defaultChecked={false}
                  >
                    I have read and agree to the Torms & Conditions
                  </Checkbox>
                </Item>
                <Item name="confirm_receive_emails">
                  <Checkbox
                    checked={confirm_receive_emails}
                    onChange={(e) => setConfirmEmails(e.target.checked)}
                    defaultChecked={false}
                  >
                    Sing up for new emails{" "}
                  </Checkbox>
                </Item>
              </Form>
            </Col>
            <Col span={10} push={2} style={{ marginTop: 50 }}>
              <Form
                name="basic"
                form={form}
                onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Item className="username" label="Last name" name="last_name">
                  <Input placeholder="Enter your Last name" />
                </Item>

                <Item className="username" label="Email" name="email">
                  <Input placeholder="Enter email address" />
                </Item>
                <Item
                  className="username"
                  label="Confirm password"
                  name="password_confirmation"
                >
                  <Input />
                </Item>

                <Item wrapperCol={{ offset: 18, span: 6 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      background: " #3bd3d3f0",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      width: 100,
                      borderRadius: 6,
                      border: "none",
                      marginTop: 50,
                    }}
                  >
                    sing up
                  </Button>
                </Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Style>
  );
}
export default SignUp;
