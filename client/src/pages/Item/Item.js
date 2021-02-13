import React from 'react';
import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Modal,
} from 'antd';
import styles from './Item.module.css';

const { Title } = Typography;

const Item = () => {
  return (
    <div className={styles.Items}>
      <Title level={3}>Welcome To The Items Pages</Title>

      <Button
        type="primary"
        htmlType="submit"
      >
        Add Item
      </Button>
    </div>
  );
};

export default Item;
