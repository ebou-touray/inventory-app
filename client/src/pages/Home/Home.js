import React from 'react';
import { Typography, Carousel } from 'antd';
import styles from './Home.css';
import Inventory1 from '../../assets/inventory/inventory1.jpg';
import Inventory2 from '../../assets/inventory/inventory2.jpg';

const { Title } = Typography;

const Home = () => {
  return (
    <div className={styles.Home}>
   
      <Carousel autoplay>
          <img className="inventory1" src={Inventory1} />
          <img className="inventory2" src={Inventory2} />
      </Carousel>
    </div>
  );
};

export default Home;
