import { NavLink, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { ACCESSTOKEN, USER_LOGIN } from "../Util/Config";
import { history } from "../Util/history";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const [state, setState] = useState({
    collapsed: false,
  });
  let { Component, ...restParams } = props;

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <Route
      {...restParams}
      render={(propsRoute) => {
        const handleLogout = () => {
          console.log("log out");
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(ACCESSTOKEN);
          history.push("/");
        };

        return (
          <>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={state.collapsed}
                onCollapse={onCollapse}
              >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <div className="admin_logo">
                    <img
                      style={{ borderRadius: "50%", marginTop: "20px" }}
                      src="https://picsum.photos/50/50"
                      alt=""
                    />
                    {!state.collapsed ? (
                      <div
                        className="admin_text"
                        style={{
                          fontSize: "1.5rem",
                          color: "orange",
                          fontWeight: "bold",
                        }}
                      >
                        CyberMovie
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <SubMenu
                    key="sub1"
                    icon={<MenuOutlined />}
                    title="Danh muc phim"
                  >
                    <Menu.Item key="3">
                      <NavLink exact to="/admin/quanlyphim">
                        Quản lý phim
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <NavLink exact to="/admin/themphim">
                        Thêm phim mới
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<TeamOutlined />}
                    title="Danh muc nguoi dung"
                  >
                    <Menu.Item key="6">
                      <NavLink exact to="/admin/quanlynguoidung">
                        Danh sach người dùng
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="8">
                      <NavLink exact to="/admin/themnguoidung">
                        Thêm người dùng
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item
                    key="9"
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Content style={{ margin: "0 16px" }}>
                  {/* <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb> */}
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    CYBER-MOVIE
                  </h1>
                </Footer>
              </Layout>
            </Layout>
          </>
        );
      }}
    />
  );
};
