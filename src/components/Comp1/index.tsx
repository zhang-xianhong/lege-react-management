import React, { FC, ReactElement } from 'react';
// sass模块化引入
import styles from './comp1.module.scss';
import { Button } from 'antd';

interface IProps {}
const Comp: FC<IProps> = (): ReactElement => {
  return (
    <div className={styles.box}>
      <p>这是一段文字</p>
      <Button type='primary'>按钮</Button>
    </div>
  );
};

export default Comp;
