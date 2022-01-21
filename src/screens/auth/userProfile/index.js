import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import {
  useUserTokenState,
  useUserTokenStateDispatcher,
  userTokenAction,
} from "context/userToken";
import Header from "../../../layout/header";
import { POST_API_URL } from "./constants";
import { postRequest } from "api";
import useTitle from "hooks/useTitle";
import { Row, Col, Button, Form, Input } from "antd";
import Style from "./style";
const { Item } = Form;
export function UserProfile() {
  const [form] = Form.useForm();
  const userDetails = useUserTokenState();
  const history = useHistory();
  const dispatch = useUserTokenStateDispatcher();
  const tokenDispatcher = useUserTokenStateDispatcher();
  async function handleSubmit(values) {
    try {
      const response = await postRequest(POST_API_URL, values);
      console.log("res", response);
      userTokenAction(tokenDispatcher, response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  }
  useTitle("userProfile");
  return (
    <Fragment>
      <Header />
      <Style>
        <div className="container">
          <Row gutter={10}>
            <Col span={10} push={2} style={{ marginTop: 50 }}>
              <Form
                name="basic"
                form={form}
                onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Item className="username" label="First name">
                  <Input
                    placeholder="enter your first name"
                    value={userDetails.first_name}
                  ></Input>
                </Item>

                <Item className="username" label="Phone number">
                  <Input value={userDetails.phone_number} />
                </Item>
              </Form>
            </Col>
            <Col span={10} push={2} style={{ marginTop: 50 }}>
              <Form
                name="basic"
                form={form}
                // onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Item className="username" label="Last name">
                  <Input
                    placeholder="enter your Last name"
                    value={userDetails.last_name}
                  />
                </Item>

                <Item className="username" label="Email">
                  <Input value={userDetails.last_name} />
                </Item>

                <Item wrapperCol={{ offset: 14, span: 10 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      background: " #3bd3d3f0",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      width: 118,
                      borderRadius: 6,
                      border: "none",
                    }}
                  >
                    Save changes
                  </Button>
                </Item>
              </Form>
            </Col>
          </Row>
        </div>
      </Style>
    </Fragment>
  );
}
export default UserProfile;
