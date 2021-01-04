import { NavLink, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { LogoutOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { ACCESSTOKEN, USER_LOGIN } from "../Util/Config";
import { history } from "../Util/history";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const UserProfile = (props) => {
  let { Component, ...restParams } = props;
  const [state, setState] = useState({
    collapsed: false,
  });
  const [user, setUser] = useState({
    taiKhoan: "",
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <Route
      {...restParams}
      render={(...propsRoute) => {
        const handleLogout = () => {
          console.log("logout");
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(ACCESSTOKEN);
          history.push("/");
        };

        return (
          <>
            {/* <Layout className="layout userProfile--layout">
              <Header>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                >
                  <Menu.Item key="1">
                    <NavLink exact to="/">
                      <HomeOutlined style={{ fontSize: "1.5rem" }} />
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink exact to="/thongtintaikhoan/profile">
                      Thông tin tài khoản
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
              </Header>
              <Content style={{ padding: "0 50px" }}>
                <div className="site-layout-content">
                  <Component {...propsRoute} />;
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                <h1>CYBER-MOVIE</h1>
              </Footer>
            </Layout> */}
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
                      style={{ borderRadius: "50%" }}
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
                    icon={<UserOutlined />}
                    title="Tài khoản người dùng"
                  >
                    <Menu.Item key="3">
                      <NavLink exact to="/thongtintaikhoan/profile">
                        Thông tin tài khoản
                      </NavLink>
                    </Menu.Item>
                    {/* <Menu.Item key="5">
                      <NavLink exact to="/thongtintaikhoan/profile">
                        Lịch sử đặt vé
                      </NavLink>
                    </Menu.Item> */}
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
                  <div className="site-layout-background">
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
