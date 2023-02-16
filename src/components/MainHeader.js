import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const MainHeader = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="horizontal">
          <Menu.Item key="1">
            <span>Welcome</span>
            <Link to="/welcome" />
          </Menu.Item>
          <Menu.Item key="2">
            <span>Products</span>
            <Link to="/products" />
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};
export default MainHeader;
