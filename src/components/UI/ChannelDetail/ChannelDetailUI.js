import React from 'react';
import BannerChannel from './BannerChannel/BannerChannel';
import BannerContent from './BannerChannel/BannerContent';
import HomeIcon from '../Home/Sidebar/HomeIcon';
import ShortIcon from '../Home/Sidebar/ShortIcon';
import LiveIcon from '../../CommonIcon/LiveIcon';
import Playlist from '../../CommonIcon/PlaylistIcon';
import CommunityIcon from '../../CommonIcon/CommunityIcon';
import ChannelUserIcon from '../../CommonIcon/ChannelUserIcon';
import AboutIcon from '../../CommonIcon/AboutIcon';
const channelCategory = [
  {
    id: '1',
    iconCate: <HomeIcon />,
    name: 'Home',
  },
  {
    id: '2',
    iconCate: <ShortIcon />,
    name: 'Video',
  },
  {
    id: '3',
    iconCate: <ShortIcon />,
    name: 'Short',
  },
  {
    id: '4',
    iconCate: <LiveIcon />,
    name: 'Live',
  },
  {
    id: '5',
    iconCate: <Playlist />,
    name: 'Playlist',
  },
  {
    id: '6',
    iconCate: <CommunityIcon />,
    name: 'Community',
  },
  {
    id: '7',
    iconCate: <ChannelUserIcon />,
    name: 'Channels',
  },
  {
    id: '8',
    iconCate: <AboutIcon />,
    name: 'About',
  },
];

function ChannelDetailUI() {
  return (
    <>
      <div className='relative w-full'>
        <BannerChannel />
        <div className='absolute top-[300px] w-full'>
          <BannerContent />
        </div>
      </div>
      <div>abc</div>
      <div className='w-[98%] bg-category-channel-detail mx-auto flex items-center font-SF-Pro'>
        <div className='flex relative justify-center items-center gap-2 py-4 px-10'>
          <HomeIcon></HomeIcon>
          <span className='text-white'>Home</span>
          <div className='border-b border-[#572981] absolute top-0 left-2 w-full h-full bg-category-channel-detail-selected'></div>
        </div>
      </div>
    </>
  );
}

export default ChannelDetailUI;
