import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import RoutesLayout from '../layouts/RoutesLayout';
import DetailLayout from '../layouts/DetailLayout';
import ChannelDetailLayout from '../layouts/ChannelDetailLayout';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RoutesLayout />}>
          <Route index element={<HomeLayout />} />
          <Route path='channelDetail' element={<ChannelDetailLayout />} />
        </Route>
        <Route path='detail/:id' element={<DetailLayout />}/>
      </Routes>
    </>
  );
}

export default AppRoutes;
