import { Fragment } from "react";
import { Row, Col, Button, Form, Input } from "antd";
import {
  useUserTokenState,
  useUserTokenStateDispatcher,
  userTokenAction,
} from "context/userToken";
import Header from "layout/header";
import { POST_API_URL } from "./constants";
import { postRequest } from "api";
import useTitle from "hooks/useTitle";
import { MD5 } from "./helper";
import Style from "./style";

const { Item } = Form;
export function UserProfile() {
  const [form] = Form.useForm();
  const userDetails = useUserTokenState();

  const tokenDispatcher = useUserTokenStateDispatcher();
  async function handleSubmit(values) {
    try {
      const response = await postRequest(POST_API_URL, values);
      console.log("res", response);
      // userTokenAction(tokenDispatcher, response.data);
    } catch (error) {
      console.log("error", "response error" + JSON.stringify(error));
    }
  }
  useTitle("userProfile");
  return (
    <Fragment>
      <Header />
      <Style>
        <div className="container">
          <Form
            name="basic"
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            className="row-col"
            initialValues={{
              email: userDetails.email,
              first_name: userDetails.first_name,
              last_name: userDetails.last_name,
              phone_number: userDetails.phone_number,
              image: userDetails.image,
            }}
          >
            <Row gutter={10}>
              <Col span={10} offset={6}>
                <Item name="image">
                  <img
                    src={`https://www.gravatar.com/avatar/${MD5(
                      userDetails.email
                    )}`}
                  />
                </Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col span={10} offset={2} style={{ marginTop: 20 }}>
                <Item className="username" label="First name" name="first_name">
                  <Input placeholder="enter your first name"></Input>
                </Item>
              </Col>
              <Col span={10} style={{ marginTop: 20 }}>
                <Item className="username" label="last name" name="last_name">
                  <Input placeholder="enter your last name"></Input>
                </Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col span={10} offset={2}>
                <Item
                  className="username"
                  label="Phone number"
                  name="phone_number"
                >
                  <Input />
                </Item>
              </Col>
              <Col span={10}>
                <Item className="username" label="Email" name="email">
                  <Input />
                </Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col span={8} offset={18}>
                <Button
                  type="primary"
                  htmlType="submit"
                  // style={{
                  //   background: " #3bd3d3f0",
                  //   color: "#ffffff",
                  //   textTransform: "uppercase",
                  //   width: 118,
                  //   borderRadius: 6,
                  //   border: "none",
                  // }}
                >
                  Save changes
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Style>
    </Fragment>
  );
}
export default UserProfile;
