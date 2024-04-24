import React from 'react';
import SortIcon from './Comment/SortIcon';
import AvatarIcon from '../../CommonIcon/AvatarIcon';
import UserComment from './Comment/UserComment';
import GuestComment from './Comment/GuestComment';

function CommentUI() {
  return (
    <>
      <div className='px-4'>
        <div className='flex justify-start items-center gap-16 text-white font-SF-Pro-Text font-normal'>
          <p className='text-[19px]'>269 Comments</p>
          <p className='flex justify-center items-center text-[19px] gap-2'>
            <span>
              <SortIcon></SortIcon>
            </span>
            Sort by
          </p>
        </div>
        <div className='flex items-center gap-4 my-6'>
          <AvatarIcon></AvatarIcon>
          <UserComment></UserComment>
        </div>
        <div className='my-8 flex text-white gap-4 items-center font-SF-Pro font-semibold text-[14px]'>
          <div className='w-12 h-12 flex-shrink-0'>
            <AvatarIcon></AvatarIcon>
          </div>
          <GuestComment></GuestComment>
        </div>
        <div className='my-8 flex text-white gap-4 items-center font-SF-Pro font-semibold text-[14px]'>
          <div className='w-12 h-12 flex-shrink-0'>
            <AvatarIcon></AvatarIcon>
          </div>
          <GuestComment></GuestComment>
        </div>
        <div className='my-8 flex text-white gap-4 items-center font-SF-Pro font-semibold text-[14px]'>
          <div className='w-12 h-12 flex-shrink-0'>
            <AvatarIcon></AvatarIcon>
          </div>
          <GuestComment></GuestComment>
        </div>
      </div>
    </>
  );
}

export default CommentUI;
