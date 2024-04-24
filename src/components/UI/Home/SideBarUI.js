import React from 'react';
import NavIcon from './Sidebar/NavIcon';
import CircleColor from './Sidebar/CicleColor';
import HomeIcon from './Sidebar/HomeIcon';
import ShortIcon from './Sidebar/ShortIcon';
import Subscriptions from './Sidebar/Subscriptions';
import MusicIcon from './Sidebar/MusicIcon';
import LibraryIcon from './Sidebar/LibraryIcon';
import HistoryIcon from './Sidebar/HistoryIcon';
import WatchLaterIcon from './Sidebar/WatchLaterIcon';
import DownloadIcon from './Sidebar/DownloadIcon';
import ShowMoreIcon from './Sidebar/ShowMoreIcon';
import DesignCodeIcon from './Sidebar/DesignCodeIcon';
import FigmaIcon from './Sidebar/FigmaIcon';
import SketchIcon from './Sidebar/SketchIcon';
import SplineIcon from './Sidebar/SplineIcon';
import CircleDark from './Sidebar/CircleDark';
import { useState } from 'react';

const SideBarData = [
  {
    svg: <ShortIcon></ShortIcon>,
    title: 'Shorts',
  },
  {
    svg: <Subscriptions></Subscriptions>,
    title: 'Subscriptions',
  },
  {
    svg: <MusicIcon></MusicIcon>,
    title: 'Papaya Music',
  },
];

const MyChannelData = [
  {
    svg: <LibraryIcon></LibraryIcon>,
    title: 'Library',
  },
  {
    svg: <HistoryIcon></HistoryIcon>,
    title: 'History',
  },
  {
    svg: <ShortIcon></ShortIcon>,
    title: 'Your Videos',
  },
  {
    svg: <WatchLaterIcon></WatchLaterIcon>,
    title: 'Watch Later',
  },
  {
    svg: <DownloadIcon></DownloadIcon>,
    title: 'Download',
  },
  {
    svg: <ShowMoreIcon></ShowMoreIcon>,
    title: 'Show More',
  },
];
const SubscriptionsData = [
  {
    svg: <DesignCodeIcon></DesignCodeIcon>,
    title: 'Design Code',
  },
  {
    svg: <FigmaIcon></FigmaIcon>,
    title: 'Figma',
  },
  {
    svg: <SketchIcon></SketchIcon>,
    title: 'Sketch',
  },
  {
    svg: <SplineIcon></SplineIcon>,
    title: 'Spline',
  },
];

function SideBarUI() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='w-full'>
      <div className='flex justify-start items-center px-5 pb-5 gap-5 text-white font-bold text-4xl'>
        <NavIcon toggleCollapse={toggleCollapse} isCollapsed={isCollapsed}></NavIcon>
      </div>

      <div className={`h-14 bg-radial-gradient block border-b border-[#ebebf523] ${isCollapsed ? 'w-0 transition-all duration-700 ease-in-out ' : 'w-full transition-all ease-in-out'}`}>
        <div className='justify-center items-center inline-flex px-4 pt-2 gap-4'>
          <div className="text-white text-[15px] font-normal font-['SF Pro Text'] leading-tight relative">
            <CircleColor></CircleColor>
            <div className='absolute top-[7px] left-[7px]'>
              <HomeIcon></HomeIcon>
            </div>
          </div>
          {!isCollapsed && (
            <div className={`text-white text-[17px] font-semibold font-['SF Pro Text'] leading-snug`}>
              Home
            </div>
          )}
        </div>
      </div>
      {SideBarData.map((side, index) => (
        <div key={index} className={`h-14 block border-b border-[#ebebf523] ${isCollapsed ? 'w-0 transition-all duration-700 ease-in-out ' : 'w-full transition-all ease-in-out'}`}>
          <div className='justify-center items-center inline-flex px-6 pt-4 gap-4'>
            <div className="text-white text-[15px] font-normal font-['SF Pro Text'] leading-tight relative">
              {side.svg}
            </div>
            {!isCollapsed && (
              <div className=" text-white text-[17px] font-semibold font-['SF Pro Text'] leading-snug">
                {side.title}
              </div>
            )}
          </div>
        </div>
      ))}
      {!isCollapsed && (
        <p className='mx-4 my-4 text-[#EBEBF599] font-semibold text-[13px]'>
          MY CHANNEL
        </p>
      )}
      {MyChannelData.map((side, index) => (
        <div key={index} className={`h-14 block border-b border-[#ebebf523] ${isCollapsed ? 'w-0 transition-all duration-700 ease-in-out ' : 'w-full transition-all ease-in-out'}`}>
          <div className='justify-center items-center inline-flex px-6 pt-4 gap-4'>
            <div className="text-white text-[15px] font-normal font-['SF Pro Text'] leading-tight relative">
              {side.svg}
            </div>
            {!isCollapsed && (
              <div className=" text-white text-[17px] font-semibold font-['SF Pro Text'] leading-snug">
                {side.title}
              </div>
            )}
          </div>
        </div>
      ))}
      {!isCollapsed && (
        <p className='mx-4 my-4 text-[#EBEBF599] font-semibold text-[13px]'>
          SUBSCRIPTIONS
        </p>
      )}
      {SubscriptionsData.map((side, index) => (
        <div key={index} className={`h-14 block border-b border-[#ebebf523] ${isCollapsed ? 'w-0 transition-all duration-700 ease-in-out ' : 'w-full transition-all ease-in-out'}`}>
          <div className='justify-center items-center inline-flex px-4 pt-2 gap-4'>
            <div className="text-white text-[15px] font-normal font-['SF Pro Text'] leading-tight relative">
              <CircleDark></CircleDark>
              <div className='absolute top-[7px] left-[7px]'>{side.svg}</div>
            </div>
            {!isCollapsed && (
              <div className=" text-white text-[17px] font-semibold font-['SF Pro Text'] leading-snug">
                {side.title}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBarUI;
