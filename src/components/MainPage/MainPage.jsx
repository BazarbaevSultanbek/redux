import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    ShoppingOutlined,
    DatabaseOutlined,
    FormOutlined,
    SwapOutlined,
    FormatPainterOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Cards from '../Cards/Cards';
import Todo from '../Todo/Todo';
import Shopping from '../Shopping/Shopping';
import Fetch from '../Fetch/Fetch';
import Posts from '../Posts/Posts';
import Drag from '../DragandDrop/Drag';
import Form from '../Form/Form'

const { Header, Sider, Content } = Layout;

const MainPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/">Cards</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FormOutlined />}>
                        <Link to="/Todo">Todo</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ShoppingOutlined />}>
                        <Link to="/Store">Store</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DatabaseOutlined />}>
                        <Link to="/Fetch">Fetch</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<DatabaseOutlined />}>
                        <Link to="/Posts">Posts</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SwapOutlined />}>
                        <Link to="/Drag">Drag and Drop</Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<FormatPainterOutlined />}>
                        <Link to="/Form">Form</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: '16px', width: 64, height: 64 }}
                    />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                    <Routes>
                        <Route path="/" element={<Cards />} />
                        <Route path="/Todo" element={<Todo />} />
                        <Route path="/Store" element={<Shopping />} />
                        <Route path="/Fetch" element={<Fetch />} />
                        <Route path="/Posts" element={<Posts />} />
                        <Route path="/Drag" element={<Drag />} />
                        <Route path="/Form" element={<Form />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainPage;
