import React from 'react';

function ChannelMember(props) {
  return (
    <>
      <div className='bg-category-channel-member py-12 text-white font-Roboto flex justify-between items-center'>
        <div className='basis-2/3'>
          <p className='font-Roboto text-[20px]'>Our Members</p>
          <p className='text-gray-500 font-Roboto font-semibold text-[14px]'>Thank you channel members</p>
        </div>
        <div className='flex items-center gap-6 justify-end'>
          {props.displayedAvatars.map((item) => (
            <div key={item.id}>{item.avItems}</div>
          ))}
          {props.hiddenAvatarsCount > 0 && (
            <div className='font-Roboto text-gray-500'>
              +{props.hiddenAvatarsCount}
            </div>
          )}
        </div>
        <div className='border-b shadow border-b-[#54575f] px-8 py-3 rounded-full bg-join-channel-member font-Roboto font-semibold text-[#21d7ff]'>
          Join
        </div>
      </div>
    </>
  );
}

export default ChannelMember;
