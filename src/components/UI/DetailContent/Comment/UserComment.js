import React from 'react';

function UserComment() {
  return (
    <>
      <div className='w-full '>
        <input
          className='pl-2 text-white border-none border-b outline-none bg-transparent'
          type='text'
          placeholder='Add a public comment...'
        />
        <hr className=' w-[99%] mx-auto mt-1 border-[#b3b3b3]'></hr>
      </div>
    </>
  );
}

export default UserComment;
