import { useState } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Input,
  Switch,
  Checkbox,
  Typography,
} from "antd";
import useTitle from "hooks/useTitle";
import { postRequest } from "api";

import {
  useUserTokenStateDispatcher,
  userTokenAction,
} from "context/userToken";
import { useHistory } from "react-router-dom";
import { HOME_ROUTE } from "routes/constants";
import Style from "./style";

const { Item } = Form;
export function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();
  const { Title } = Typography;

  const tokenDispatcher = useUserTokenStateDispatcher();

  async function handleSubmit(values) {
    try {
      setLoading(true);
      const response = await postRequest("/login", values);

      userTokenAction(tokenDispatcher, response.data);

      navigate.push(HOME_ROUTE);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("response error", error);
    }
  }

  useTitle("login");
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
          <Row gutter={10}>
            <Col span={16} offset={4}>
              <Title>login</Title>
              <Form
                name="basic"
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                // className="row-col"
                initialValues={{ remember: false }}
              >
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
                  <Input placeholder="Email" />
                </Item>

                <Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Item>

                <Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Item>

                <Item wrapperCol={{ span: 4, alinItems: "end" }}>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    login
                  </Button>
                </Item>
                <a className="login-form-forgot" href="">
                  Forgot password?
                </a>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Style>
  );
}
export default Login;
