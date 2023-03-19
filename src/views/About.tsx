import React, { FC, ReactElement } from 'react';

interface IProps {}
const About: FC<IProps> = (): ReactElement => {
  return (
    <div className='home'>
      <p>这是About组件</p>
    </div>
  );
};

export default About;
