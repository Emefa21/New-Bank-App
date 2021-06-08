import React from "react";
import {
  Menu,
  Dropdown,
  Button,
  message,
  Layout,
  Divider,
  Space,
  Tooltip,
} from "antd";
import { DownOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Header } = Layout;
function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const { SubMenu } = Menu;

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Current Account</Menu.Item>
    <Divider />
    <Menu.Item key="2">Savings Account</Menu.Item>
    <Divider />
    <Menu.Item key="3">Christopher Account</Menu.Item>
  </Menu>
);

const Head = () => {
  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        height: "auto",
        borderBottom: "1px solid whitesmoke",
        zIndex: 1,
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      xs={24}
    >
      <div
        className="logo"
        onClick={() => {
          window.location.href = "/home";
        }}
      >
        <span style={{ fontWeight: "bold", cursor: "pointer", color: "blue" }}>
          HOME BANKING
        </span>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          borderBottom: "none",
          width: "30%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Menu.Item key="1">
          <Dropdown overlay={menu}>
            <Button type="text">
              My Account <DownOutlined />
            </Button>
          </Dropdown>
        </Menu.Item>

        <Menu.Item
          key="1"
          onClick={() => {
            window.location.href = "#";
          }}
        >
          Notifications
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => {
            window.location.href = "#";
          }}
          xs={24}
        >
          Conversations{" "}
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Head;
