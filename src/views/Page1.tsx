import React, { FC, ReactElement } from 'react';

interface IProps {}
const Page: FC<IProps> = (): ReactElement => {
  return (
    <div className='home'>
      <p>这是Page1页面内容</p>
    </div>
  );
};

export default Page;
