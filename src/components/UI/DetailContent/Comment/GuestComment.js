import React from 'react';
import LikeIcon from '../../../CommonIcon/LikeIcon';
import DislikeIcon from '../../../CommonIcon/DislikeIcon';

function GuestComment() {
  return (
    <>
      <div className='flex-col flex-grow'>
        <div>
          <p>
            James Gouse{' '}
            <span className='text-[13px] text-gray-500 font-thin'>8 hours</span>
          </p>
          <p className='font-thin'>
            Wow, world is full of different skillsWow
          </p>
          <div className='flex items-center gap-6 mt-2 text-[15px] font-thin font-SF-Pro-Text text-gray-300'>
            <div className='flex items-center gap-2 '>
              <LikeIcon></LikeIcon>
              <span>3</span>
            </div>
            <div className='flex items-center gap-2 '>
                <DislikeIcon></DislikeIcon>
              <span>8</span>
            </div>
            <span>REPLY</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestComment;
