// frontend/src/components/EndpointList.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'; // 匯入 Link
import { Table, Typography, Button, Modal, Form, Input, message, Popconfirm, Space } from 'antd';
import apiClient from '../services/apiClient';

const { Title } = Typography;

const EndpointList = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // 使用 useCallback 包裹 fetchData，以便在其他地方重用
  const fetchData = useCallback(() => {
    setLoading(true);
    apiClient.get('/endpoints')
      .then(response => {
        setEndpoints(response.data || []); // 確保 response.data 不是 null
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch endpoints:", error);
        message.error("無法載入 Endpoints");
        setLoading(false);
      });
  }, []); // 空依賴

  useEffect(() => {
    fetchData();
  }, [fetchData]); // 依賴 fetchData

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleCreate = (values) => {
    apiClient.post('/endpoints', { Path: values.path })
      .then(() => {
        message.success('Endpoint 建立成功');
        fetchData(); // 重新載入資料
        handleCancel();
      })
      .catch(error => {
        console.error("Failed to create endpoint:", error);
        message.error('Endpoint 建立失敗');
      });
  };

  const handleDelete = (id) => {
    apiClient.delete(`/endpoints/${id}`)
      .then(() => {
        message.success('Endpoint 刪除成功');
        fetchData(); // 重新載入資料
      })
      .catch(error => {
        console.error("Failed to delete endpoint:", error);
        message.error('Endpoint 刪除失敗');
      });
  };

  const columns = [
    { title: 'ID', dataIndex: 'ID', key: 'id' },
    { title: 'Path', dataIndex: 'Path', key: 'path' },
    { title: 'Targets Count', key: 'targets_count', render: (_, record) => record.Targets?.length || 0 },
    { title: 'Created At', dataIndex: 'CreatedAt', key: 'created_at', render: (text) => new Date(text).toLocaleString() },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* 將文字連結改為 React Router 的 Link */}
          <Link to={`/endpoints/${record.ID}`} >設定</Link>
          <Popconfirm title="確定要刪除嗎?" onConfirm={() => handleDelete(record.ID)}>
            <Typography.Link type="danger">刪除</Typography.Link>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Title level={2} style={{ margin: 0 }}>Endpoints</Title>
        <Button type="primary" onClick={showModal}>
          新增 Endpoint
        </Button>
      </div>
      <Table 
        dataSource={endpoints} 
        columns={columns} 
        rowKey="ID"
        loading={loading} 
      />
      <Modal
        title="新增 Endpoint"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
        okText="建立"
        cancelText="取消"
      >
        <Form form={form} layout="vertical" name="form_in_modal" onFinish={handleCreate}>
          <Form.Item
            name="path"
            label="API Path"
            rules={[{ required: true, message: '請輸入 API Path (例如: /v1/data)' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EndpointList;