import React from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Search from './Search';

const Content = () => (
  <div>
    <div style={{width: '100%'}}>
      <LeftSide />
      <Search />
    </div>
    <div style={{width: '50%', margin: '0 auto', textAlign: 'center'}}>
      <RightSide className="content"/>
    </div>
  </div>
);

export default Content;
