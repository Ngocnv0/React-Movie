import React from 'react';
import WatchLaterIcon from '../../Sidebar/WatchLaterIcon';
import Subscriptions from '../../Sidebar/Subscriptions';
import { NavLink } from 'react-router-dom';

function CardItems(props) {
  return (
    <>
      {props.cardData.cardList.map((card) => (
        <div
          key={card.id}
          className='group w-[376px] hover:bg-card-hover h-[336px] rounded-2xl shadow-md flex-col justify-start items-start inline-flex transition-all duration-700 ease-in-out hover:z-30 hover:scale-y-[1.2] hover:transform hover:translate-y-8 hover:scale-x-[1.15]'
        >
          <div className='w-full h-52 relative overflow-hidden'>
            <NavLink to={`detail/id=${card.id}`}>
              <img
                className='w-full h-full object-cover   rounded-t-2xl'
                src={card.thumbnail}
                alt='https://via.placeholder.com/376x209'
              />
            </NavLink>
            <div className='p-1 group-hover:top-[125px] group-hover:left-[335px] left-[327px] top-[174px] absolute bg-black rounded justify-end items-center gap-2.5 inline-flex'>
              <div className='text-right text-white group-hover:text-[10px] text-[13px] font-normal font-SF-Pro-Text'>
                {card.duration}
              </div>
            </div>
          </div>
          <div className='bg-card-bg-gradient group-hover:py-2 group-hover:h-[30%] self-stretch h-32 px-4 py-6 bg-bg-card-gradient border-t border-[#E08686] rounded-bl-2xl rounded-br-2xl justify-start items-start gap-2 inline-flex'>
            <NavLink to={`channelDetail`}>
              <div className='w-10 h-10 group-hover:h-10 group-hover:w-10 justify-center items-center flex'>
                <img
                  className='rounded-full w-full h-full object-cover'
                  src={card.logoChannel}
                  alt='https://via.placeholder.com/376x209'
                ></img>
              </div>
            </NavLink>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
              <div className='justify-end items-center inline-flex'>
                <NavLink to={`detail/id=${card.id}`}>
                  <div className='w-[293px] group-hover:line-clamp-1 hover:underline hover:cursor-pointer group-hover:text-[12px] text-white text-[17px] font-bold font-SF-Pro leading-[21px] line-clamp-2'>
                    {card.title}
                  </div>
                </NavLink>
              </div>
              <div className='pr-[145px] justify-start items-center inline-flex'>
                <div className='self-stretch flex-col justify-start items-start inline-flex'>
                  <div className='group-hover:text-[10px] text-center group-hover:mb-0 mb-1 text-[#FFFFFF99] text-opacity-60 text-xs font-semibold font-SF-Pro-Text uppercase leading-snug'>
                    <NavLink to={`channelDetail`}>
                      <span className='hover:underline hover:cursor-pointer'>
                        {card.channel}
                      </span>
                    </NavLink>
                  </div>
                  <div className='group-hover:text-[10px] text-center text-[#FFFFFF99] text-opacity-60 text-[13px] font-medium font-SF-Pro-Text leading-snug'>
                    {card.views} - {card.createDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full text-center hidden group-hover:block bg-radial-gradient'>
            <div className='block'>
              <div className='justify-center items-center inline-flex pt-1 pb-6  gap-4'>
                <WatchLaterIcon></WatchLaterIcon>
                <div className=" text-white hover:underline hover:cursor-pointer text-[13px] font-semibold font-['SF Pro Text'] leading-snug">
                  Watch Later
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full text-center hidden group-hover:block bg-radial-gradient'>
            <div className='block '>
              <div className='justify-center items-center inline-flex pt-1 pb-6 gap-4'>
                <Subscriptions></Subscriptions>
                <div className=" text-[#988dac] hover:underline hover:cursor-pointer text-[13px] font-semibold font-['SF Pro Text'] leading-snug">
                  Add to queue
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardItems;
