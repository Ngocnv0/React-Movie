import React from 'react';
import LikeIcon from '../../../CommonIcon/LikeIcon';
import DislikeIcon from '../../../CommonIcon/DislikeIcon';
import Notification from '../../../CommonIcon/NotificationIcon';
import MoreIcon from '../../../CommonIcon/MoreIcon';

function ChannelSocial() {
  return (
    <>
      <div className='flex shadow-md rounded-b-3xl bg-content-bg-gradient-0 text-[#8f8ea2]'>
        <div className='basis-1/3 flex gap-2 items-center py-2 border-r rounded-bl-3xl  border-r-[#ffffff18] px-6  font-semibold text-[18px]'>
          <LikeIcon></LikeIcon>
          <span>899</span>
        </div>
        <div className='basis-2/3 py-2 flex gap-2 items-center px-6 text-[18px] border-r border-r-[#ffffff18] font-semibold'>
          <DislikeIcon></DislikeIcon>
          <span>10</span>
        </div>
        <div className='basis-2/3 py-2 flex gap-2 items-center px-6 text-[18px] border-r border-r-[#ffffff18] font-semibold'>
          <Notification color={'#8f8ea2'}></Notification>
          <span>Share</span>
        </div>
        <div className='basis-2/3 py-2 flex gap-2 items-center px-6 text-[20px] font-semibold'>
          <MoreIcon></MoreIcon>
        </div>
      </div>
    </>
  );
}

export default ChannelSocial;
