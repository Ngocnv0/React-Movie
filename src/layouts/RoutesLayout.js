import React from 'react';
import SearchBar from '../components/UI/Header/HeaderUI';
import { Outlet } from 'react-router-dom';
import SideBarUI from '../components/UI/Home/SideBarUI';
function RoutesLayout() {
  return (
    <>
      <div className='bg-[#2c3055]'>
        <SearchBar></SearchBar>
      </div>
      <div className='bg-content-bg-gradient grid grid-rows-1 grid-flow-col'>
        <div className='col-span-1 bg-[#2c3055]'>
          <SideBarUI></SideBarUI>
        </div>
        <div className='col-span-11'>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default RoutesLayout;
