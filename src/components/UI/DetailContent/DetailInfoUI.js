import React from 'react';
import ChannelActive from './DetailInfo/ChannelActive';
import ChannelSocial from './DetailInfo/ChannelSocial';

function DetailInfoUI() {
  return (
    <>
      <p className='font-bold text-white text-2xl mb-4 px-4'>
        How to Use AI Art Generator on Midjourney
      </p>
      <div className='justify-start items-center flex gap-28'>
        <div className='px-4 flex gap-6'>
          <div className='w-14 h-14 '>
            <img
              className='rounded-full w-full h-full object-cover'
              src='https://s3-alpha-sig.figma.com/img/42d2/9801/a09c6b632f72d4cd4c055bf6d11263ec?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IpiVuylE9P5iJ1k2CfWmth9UqD5EsRKjJyModIcYI22VbPgD6OBJ0rtOpq3iuxENmzRe8wIETaBviUGMRo5JTF~UEF1dhcMGor2O8EvgYtvs2qJeH1pHC4nXlqTZ~cfnRaO9NyleLlnSYmny9ze8ZisNC3HUOpbUq8uUYnqLIudL~gw~uSkmssWs9ajGE22hs6mUEk6mAeyLe1dAONglNeeBsUNv428eP3tFjru~5rRu-aG0TM9Jbi8LrYUz8oOY1z9k55xpcCdDV2Jbag4nfqSMNtICLN54GZQPj5D-4Kdd5iP5BlzhUFOC6L5JCWR6R2tXEtcgXz2Y2YQuvQ6-ng__'
              alt='https://via.placeholder.com/376x209'
            ></img>
          </div>
          <div className='flex flex-col'>
            <p className='text-[#a6a5b3] text-[18px] font-semibold'>
              MIDJOURNEY ART
            </p>
            <p className='text-[#a6a5b3] text-[16px] font-medium'>
              197 K subscribers
            </p>
          </div>
        </div>
        <div>
          <ChannelActive></ChannelActive>
        </div>
        <div>
          <ChannelSocial></ChannelSocial>
        </div>
      </div>
      <div className='mt-4 mb-6 pb-2 px-4 py-2 border-t border-t-[#ffffff18] bg-category-gradient-0 shadow-category-shadow text-[14px] font-semibold text-[#a6a5b3] font-SF-Pro-Text'>
        <p className='text-[16px] text-white'>14k views - <span className='text-[12px] text-gray-500'>1 month ago</span></p>

        <p>
          Design a Web app design inspired by Discord and Slack in the Figma
          design tool.
        </p>

        <p>
          Sponsored by{' '}
          <a className='underline' href='#/'>
            https://rive.app
          </a>{' '}
          - create beautiful animated assets for apps, sites and games
        </p>
        <a className='underline text-white' href='#/'>
          Show more
        </a>
      </div>
    </>
  );
}

export default DetailInfoUI;
