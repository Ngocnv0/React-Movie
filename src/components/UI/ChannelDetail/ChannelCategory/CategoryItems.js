import React, { useState } from 'react';
import RightExpandIcon from '../../../CommonIcon/RightExpandIcon';

function CategoryItems({ channelCategory }) {
  const [activeCate, setActiveCate] = useState(channelCategory[0].id);

  const handleActiveCate = (id) => {
    setActiveCate(id);
  };
  return (
    <>
      <div className='bg-category-channel-detail flex justify-around items-center font-SF-Pro'>
        {channelCategory &&
          channelCategory.map((item) => (
            <div
              onClick={() => handleActiveCate(item.id)}
              key={item.id}
              className='flex relative flex-grow justify-center items-center gap-2 py-4 px-10'
            >
              {item.iconCate}
              <span className='text-white font-SF-Pro-Text font-semibold'>
                {item.name}
              </span>
              <div
                className={`border-b ${
                  activeCate === item.id ? '' : 'hidden'
                } border-[#572981] absolute top-0 left-2 w-full h-full bg-category-channel-detail-selected`}
              ></div>
            </div>
          ))}
        <div>
          <RightExpandIcon></RightExpandIcon>
        </div>
      </div>
    </>
  );
}

export default CategoryItems;
