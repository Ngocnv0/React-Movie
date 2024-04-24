import React from 'react';
import ContentUI from '../components/UI/Home/ContentUI';

function HomeLayout() {
  return (
    <> 
      <div className='bg-content-bg-gradient grid grid-rows-1 grid-flow-col'>
            <ContentUI></ContentUI>
      </div>
    </>
  );
}

export default HomeLayout;
