// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import EndpointList from './components/EndpointList';
import EndpointDetails from './pages/EndpointDetails'; // 匯入新頁面
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={3} style={{ color: 'white', margin: 0 }}>URL Balancer</Title>
        </Header>
        <Content style={{ padding: '24px 48px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Routes>
              <Route path="/" element={<EndpointList />} />
              <Route path="/endpoints/:id" element={<EndpointDetails />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          URL Balancer ©{new Date().getFullYear()} Created by You
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
