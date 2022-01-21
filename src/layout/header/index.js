import { Row, Col, Menu, Card, Typography, Button, Avatar } from "antd";
import { HOME_ROUTE, USERPROFILE_ROUTE } from "routes/constants";
import { Link } from "react-router-dom";
import Style from "./style";
const { Item } = Menu;
export function Header() {
  function handleLoginProfile() {
    return <Link to={USERPROFILE_ROUTE}>user profile</Link>;
  }
  return (
    <Style>
      <Row>
        <Col span={6} offset={2} className="col-left">
          thirdly
        </Col>
        <Col span={7} offset={1} className="col-center">
          <Menu
            mode="horizontal"
            style={{
              background: "#3bd3d3f0",
              color: "#ffffff",
              marginTop: 4,
              textTransform: " uppercase",
            }}
          >
            <Item>
              <Link to={HOME_ROUTE} className="header-menu"></Link>
              Home
            </Item>
            <Item>
              <Link className="header-menu"></Link>
              About
            </Item>
            <Item>
              <Link className="header-menu"></Link>
              Contact
            </Item>
          </Menu>
        </Col>

        <Col
          span={4}
          offset={4}
          className="col-right"
          style={{ fontSize: 15, paddingTop: 4 }}
        >
          {handleLoginProfile()}

          <Avatar
            size={25}
            style={{ background: "#ffffff", marginLeft: 8 }}
          ></Avatar>
        </Col>
      </Row>
    </Style>
  );
}
export default Header;
