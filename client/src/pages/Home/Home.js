import React from 'react';
import {  Typography } from 'antd';
import styles from './Home.module.css';


const { Title } = Typography;

const Home = () => {
  
  return (
    <div className={styles.Home}>
      <Title level={3}>Welcome The Home Page</Title>
    </div>
  );
};

export default Home;
