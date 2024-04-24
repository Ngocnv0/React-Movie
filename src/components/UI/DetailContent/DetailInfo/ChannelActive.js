import React from 'react';
import Notification from '../../../CommonIcon/NotificationIcon';
import ExpandIcon from '../../../CommonIcon/ExpandIcon';

function ChannelActive() {
  return (
    <>
      <div className='flex shadow-md rounded-b-3xl'>
        <div className='basis-1/3 py-2 border-r bg-content-bg-gradient-0 rounded-bl-3xl  border-r-[#ffffff18] px-6 text-[#8f8ea2] font-semibold text-[20px]'>
          Join
        </div>
        <div className='basis-2/3 bg-channel-subscribe py-2 px-4 text-[20px] font-semibold border-b border-b-[#e736fe] rounded-br-3xl text-white flex gap-1 items-center'>
          <Notification color={'#ffffff'}></Notification>
          <span>Subscribed</span>
          <ExpandIcon></ExpandIcon>
        </div>
      </div>
    </>
  );
}

export default ChannelActive;
