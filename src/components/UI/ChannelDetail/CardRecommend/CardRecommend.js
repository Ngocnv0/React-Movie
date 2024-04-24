import React from 'react';
import SubtitlesIcon from '../../../CommonIcon/SubtitlesIcon';

function CardRecommend(props) {
  return (
    <>
      <div className='flex justify-around items-center gap-4'>
        {props.cardData &&
          props.cardData.map((item) => (
            <div
              key={item.id}
              className=' w-[250px] h-[300px] rounded-2xl shadow-md flex-col justify-start items-start inline-flex'
            >
              <div className='w-full h-40 relative overflow-hidden'>
                <img
                  className='w-full h-full object-cover   rounded-t-2xl'
                  src={item.thumbnail}
                  alt='https://via.placeholder.com/376x209'
                />
                <div className='p-1 left-auto top-[130px] absolute bg-black rounded justify-end items-center gap-2.5 inline-flex'>
                  <div className=' overflow-hidden text-right text-white group-hover:text-[10px] text-[13px] font-normal font-SF-Pro-Text'>
                    {item.duration}
                  </div>
                </div>
              </div>
              <div className='bg-card-bg-gradient  self-stretch h-32 px-4 py-4 bg-bg-card-gradient border-t border-[#E08686] rounded-bl-2xl rounded-br-2xl justify-start items-start gap-2 inline-flex'>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                  <div className=' hover:underline hover:cursor-pointer text-white text-[15px] font-Roboto line-clamp-2'>
                    {item.title}
                  </div>
                  <div className='justify-start items-center inline-flex'>
                    <div className='self-stretch flex-col justify-start items-start inline-flex'>
                      <div className=' text-center text-[#FFFFFF99] text-opacity-60 text-[13px] font-medium font-SF-Pro-Text leading-snug'>
                        {item.views} - {item.createDate}
                      </div>
                    </div>
                  </div>
                  <SubtitlesIcon />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CardRecommend;
