import { useEffect, useState } from "react";
import { Row, Col, Menu, Card, Typography, Button, Modal } from "antd";
import useTitle from "hooks/useTitle";
import Header from "layout/header";
import { getRequest } from "api";
import Style from "./style";

const { Title } = Typography;
const { Item } = Menu;

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  }, []);

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

  const handleCancel = () => {
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

            <Modal
              title="ADD NOTE"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Title</p>

              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Col>
        </Row>

        <Row gutter={10}>{render()}</Row>
      </div>
    </Style>
  );
};
export default Home;
