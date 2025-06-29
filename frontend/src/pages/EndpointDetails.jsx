import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader, Spin, Alert, Divider } from 'antd';
import apiClient from '../services/apiClient';
import TargetList from '../components/TargetList'; // 匯入 TargetList

const EndpointDetails = () => {
  const { id } = useParams();
  const [endpoint, setEndpoint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useCallback 包裝 fetchData，以便傳遞給子元件
  const fetchData = useCallback(() => {
    setLoading(true);
    apiClient.get(`/endpoints/${id}`)
      .then(response => {
        setEndpoint(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch endpoint details:", err);
        setError("無法載入 Endpoint 詳細資訊");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading && !endpoint) { // 只有在初次載入時顯示全頁 Spin
    return <div style={{ textAlign: 'center', marginTop: 50 }}><Spin size="large" /></div>;
  }

  if (error) {
    return <Alert message="錯誤" description={error} type="error" showIcon />;
  }

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title={`Endpoint: ${endpoint?.Path}`}
        subTitle={`ID: ${endpoint?.ID}`}
        ghost={false}
      />
      <Divider />
      <div style={{ padding: '0 24px' }}>
        {/* 使用 TargetList 元件，並傳入 endpoint 資料和刷新函式 */}
        <TargetList endpoint={endpoint} onRefresh={fetchData} />
      </div>
    </>
  );
};

export default EndpointDetails;