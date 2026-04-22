// frontend/src/components/TargetList.jsx
import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, message, Popconfirm, Space, Typography } from 'antd';
import apiClient from '../services/apiClient';

const { TextArea } = Input;

// 輔助函式，用於安全地格式化 JSON
const formatJson = (data) => {
  if (!data) return '';
  try {
    // 如果 data 已經是物件/陣列
    return JSON.stringify(data, null, 2);
  } catch (e) {
    // 如果 data 是字串但不是合法的 JSON
    return '';
  }
};

const TargetList = ({ endpoint, onRefresh }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTarget, setEditingTarget] = useState(null);
  const [form] = Form.useForm();

  const showModal = (target = null) => {
    setEditingTarget(target);
    // 使用新的 formatJson 輔助函式來設定表單初始值
    form.setFieldsValue(target ? {
      ...target,
      HeaderRewrite: formatJson(target.HeaderRewrite),
      BodyRewrite: formatJson(target.BodyRewrite),
    } : { URL: '', Weight: 1, HeaderRewrite: '', BodyRewrite: '' });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingTarget(null);
    form.resetFields();
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        // 在提交前，將字串解析回 JSON 物件
        const payload = { ...values };
        try {
          payload.HeaderRewrite = values.HeaderRewrite ? JSON.parse(values.HeaderRewrite) : null;
          payload.BodyRewrite = values.BodyRewrite ? JSON.parse(values.BodyRewrite) : null;
        } catch (e) {
          message.error("Header/Body Rewrite 格式必須是合法的 JSON！");
          return;
        }

        const request = editingTarget
          ? apiClient.put(`/targets/${editingTarget.ID}`, payload)
          : apiClient.post(`/endpoints/${endpoint.ID}/targets`, payload);

        request.then(() => {
          message.success(`Target ${editingTarget ? '更新' : '建立'}成功`);
          onRefresh();
          handleCancel();
        }).catch(error => {
          console.error("Failed to save target:", error);
          message.error(`Target ${editingTarget ? '更新' : '建立'}失敗`);
        });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleDelete = (id) => {
    apiClient.delete(`/targets/${id}`)
      .then(() => {
        message.success('Target 刪除成功');
        onRefresh();
      })
      .catch(error => {
        console.error("Failed to delete target:", error);
        message.error('Target 刪除失敗');
      });
  };

  const columns = [
    { title: 'ID', dataIndex: 'ID', key: 'id' },
    { title: 'URL', dataIndex: 'URL', key: 'url' },
    { title: 'Weight', dataIndex: 'Weight', key: 'weight' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => showModal(record)}>編輯</Button>
          <Popconfirm title="確定要刪除嗎?" onConfirm={() => handleDelete(record.ID)}>
            <Button type="link" danger>刪除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Typography.Title level={4} style={{ margin: 0 }}>Targets</Typography.Title>
        <Button type="primary" onClick={() => showModal()}>
          新增 Target
        </Button>
      </div>
      <Table
        dataSource={endpoint?.Targets || []}
        columns={columns}
        rowKey="ID"
        pagination={false}
      />
      <Modal
        title={editingTarget ? '編輯 Target' : '新增 Target'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        destroyOnClose // 確保每次 Modal 關閉時都銷毀內部元件，避免 form 狀態殘留
      >
        <Form form={form} layout="vertical" name="target_form">
          <Form.Item name="URL" label="URL" rules={[{ required: true, message: '請輸入目標 URL' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Weight" label="Weight" rules={[{ required: true, message: '請輸入權重' }]}>
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="HeaderRewrite" label="Header Rewrite (JSON)">
            <TextArea rows={4} placeholder='e.g., {\n  "X-Forwarded-For": "127.0.0.1"\n}' />
          </Form.Item>
          <Form.Item name="BodyRewrite" label="Body Rewrite (JSON)">
            <TextArea rows={4} placeholder='e.g., {\n  "user_id": 123,\n  "plan": "premium"\n}' />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TargetList;