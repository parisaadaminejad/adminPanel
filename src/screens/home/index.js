import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Menu,
  Card,
  Typography,
  Button,
  Modal,
  Input,
  Form,
} from "antd";
import useTitle from "hooks/useTitle";
import Header from "../../layout/header";
import { getRequest, postRequest } from "api";
import { api } from "../../utils/api";
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
    return data.slice(0, 1).map((item) => {
      return <p>{item.color}</p>;
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
        <Title level={2} style={{ textTransform: "uppercase" }}>
          all notes
        </Title>
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

        <Row gutter={10}>
          <Col span={8}>
            <Card

            // bordered={false}
            // style={{
            //   borderRadius: 8,
            //   background: "#ffc802",
            //   color: "#ffffff",
            // }}
            >
              {render()}
              {/* Sticky Notes 3
              <br />
              <br />
              The total number of copies of a book,newspaper,or
              <br />
              other published material issued at one time.
              <br />
              variation occurred after some of the dition had
              <br />
              already been published"
              <br />
              <br />
              <br />
              Sticky Notes |2021/12/10-Mon
              <br />
              <br /> */}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={true}
              style={{
                borderRadius: 8,
                background: "#71e9ef",
                color: "#ffffff",
              }}
            >
              Sticky Notes 3
              <br />
              <br />
              The total number of copies of a book,newspaper,or
              <br />
              other published material issued at one time.
              <br />
              variation occurred after some of the dition had
              <br />
              already been published"
              <br />
              <br />
              <br />
              Sticky Notes |2021/12/10-Mon
              <br />
              <br />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={true}
              style={{
                borderRadius: 8,
                background: "#ff9d6e",
                color: "#ffffff",
              }}
            >
              Sticky Notes 3
              <br />
              <br />
              The total number of copies of a book,newspaper,or
              <br />
              other published material issued at one time.
              <br />
              variation occurred after some of the dition had
              <br />
              already been published"
              <br />
              <br />
              <br />
              Sticky Notes |2021/12/10-Mon
              <br />
              <br />
            </Card>
          </Col>
        </Row>
        <Row gutter={[10]}>
          <Col span={8}>
            <Card
              bordered={true}
              style={{
                borderRadius: 8,
                background: "#71e9ef",
                color: "#ffffff",
                marginTop: 10,
              }}
            >
              Sticky Notes 3
              <br />
              <br />
              The total number of copies of a book,newspaper,or
              <br />
              other published material issued at one time.
              <br />
              variation occurred after some of the dition had
              <br />
              already been published"
              <br />
              <br />
              <br />
              Sticky Notes |2021/12/10-Mon
              <br />
              <br />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={true}
              style={{
                borderRadius: 8,
                background: "#ffc802",
                color: "#ffffff",
                marginTop: 10,
              }}
            >
              Sticky Notes 3
              <br />
              <br />
              The total number of copies of a book,newspaper,or
              <br />
              other published material issued at one time.
              <br />
              variation occurred after some of the dition had
              <br />
              already been published"
              <br />
              <br />
              <br />
              Sticky Notes |2021/12/10-Mon
              <br />
              <br />
            </Card>
          </Col>
        </Row>
      </div>
    </Style>
  );
};
export default Home;
