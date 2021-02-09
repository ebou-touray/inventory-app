import React from 'react';
import { Typography } from 'antd';
import styles from './Item.module.css';

const { Title } = Typography;

const Item = () => {
  return (
    <div className={styles.Items}>
      <Title level={3}>Welcome The Items Pages</Title>
    </div>
  );
};

export default Item;
