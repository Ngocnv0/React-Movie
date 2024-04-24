import React from 'react';
import SearchIcon from './SearchBar/SearchIcon';
import CircleColor from '../Home/Sidebar/CicleColor';
import VoiceSearch from './SearchBar/VoiceSearch';
import CameraIcon from './UserBar/CameraIcon';
import NotificationIcon from '../../CommonIcon/NotificationIcon';
import AvatarIcon from '../../CommonIcon/AvatarIcon';

function SearchBar() {
  return (
    <>
      <div className='flex justify-evenly items-center pt-4'>
        <div className='basis-1/4'></div>
        <div className='basis-1/4 w-[442px] mb-4 rounded-[40px] border border-[#FFFFFF80] py-2 px-2 flex justify-between items-center bg-[#2f3a63]'>
          <div className='px-2'>
            <SearchIcon></SearchIcon>
          </div>
          <div className='flex-grow'>
            <input
              type='text'
              placeholder='Explore'
              className='bg-transparent focus:outline-none text-white w-[97%]'
            />
          </div>
          <div className='text-white text-[15px] font-normal relative'>
            <CircleColor></CircleColor>
            <div className=' text-white text-[17px] font-semibold absolute top-[5px] left-[5px]'>
              <VoiceSearch></VoiceSearch>
            </div>
          </div>
        </div>
        <div className='basis-1/4'>
          <div className='flex justify-end items-center gap-4'>
            <div>
              <CameraIcon></CameraIcon>
            </div>
            <div>
              <NotificationIcon color={'#ffffff'}></NotificationIcon>
            </div>
            <div>
              <AvatarIcon></AvatarIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
