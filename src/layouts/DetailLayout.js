import React from 'react';
import ImgVideoUI from '../components/UI/DetailContent/ImgVideoUI';
import DetailInfoUI from '../components/UI/DetailContent/DetailInfoUI';
import ItemsDetailUI from '../components/UI/DetailContent/ItemsDetailUI';
import CategoryDetail from '../components/UI/DetailContent/CategoryDetail/CategoryDetail';
import CommentUI from '../components/UI/DetailContent/CommentUI';
import SearchBar from '../components/UI/Header/HeaderUI';

function DetailLayout() {
  return (
    <>
      <div className='bg-[#2c3055]'>
        <SearchBar></SearchBar>
      </div>
      <div className='flex justify-between gap-4 w-[98%] mx-auto'>
        <div className='basis-[70%]'>
          <ImgVideoUI></ImgVideoUI>
          <div className='py-6 bg-content-bg-gradient'>
            <DetailInfoUI></DetailInfoUI>
            <div className='w-[98%] mx-auto border border-[#ffffff25] mb-8'></div>
            <CommentUI></CommentUI>
          </div>
        </div>
        <div className='basis-[30%]'>
          <CategoryDetail></CategoryDetail>
          <ItemsDetailUI></ItemsDetailUI>
        </div>
      </div>
    </>
  );
}

export default DetailLayout;
