import { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Button, Modal, Form, Input } from "antd";
import useTitle from "hooks/useTitle";
import Header from "layout/header";
import { getRequest, postRequest } from "api";

import Style from "./style";

const { Title } = Typography;
const { Item } = Form;

export const Home = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    getRequest(`notes/index`)
      .then((response) => {
        console.log(response.data, "response");
        setData(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  async function handleAddNote(values) {
    console.log({ values });
    try {
      const response = await postRequest("notes/store", values);
      console.log("resrrr", response.data);
      getData();
    } catch (error) {
      console.log("error", "response error" + JSON.stringify(error));
    }
  }

  useTitle("home");
  function render() {
    return data.map((item) => {
      return (
        <Col span={8}>
          <Card
            key={item.id}
            bordered={true}
            style={{
              borderRadius: 8,
              background: item.color,
              color: "#fff",
              height: 200,
              marginTop: 10,
              paddingTop: 20,
            }}
          >
            <p> {item.title}</p>
            <p>{item.body}</p>
            <p>Sticky Notes |{item.createAt}</p>
          </Card>
        </Col>
      );
    });
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <Style>
      <Header />

      <div className="site-card-wrapper">
        <Row>
          {" "}
          <Title level={2} style={{ textTransform: "uppercase" }}>
            all notes
          </Title>
        </Row>
        <Row justify="end">
          <Col>
            <Button
              type="primary"
              onClick={showModal}
              style={{
                borderRadius: 10,
                background: "#3bd3d3f0",
                border: "none",
                marginBottom: 20,
              }}
            >
              Add note +
            </Button>

            <Modal title="ADD NOTE" visible={isModalVisible}>
              <Form form={form} layout="vertical" onFinish={handleAddNote}>
                <Item label="Title" name="title">
                  <Input placeholder="set title" type="text" />
                </Item>
                <Item label="choose color" name="color">
                  <Input type="color" />
                </Item>
                <Item name="body">
                  <Input type="textarea" />
                  {/* <Input.TextArea
                    showCount
                    maxLength={100}
                    style={{ height: 120 }}
                  /> */}
                </Item>
                <Item>
                  <Button type="primary" htmlType="submit" onClick={handleOk}>
                    save note
                  </Button>
                </Item>
              </Form>
            </Modal>
          </Col>
        </Row>

        <Row gutter={10}>{render()}</Row>
      </div>
    </Style>
  );
};
export default Home;
