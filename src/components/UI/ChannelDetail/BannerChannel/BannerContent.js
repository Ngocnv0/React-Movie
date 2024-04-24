import React from 'react';
import ChannelActive from '../../DetailContent/DetailInfo/ChannelActive';

function BannerContent() {
  return (
    <>
      <div className='px-4 flex justify-start items-center gap-4'>
        <div className='w-14 h-14'>
          <img
            className='rounded-full w-full h-full object-cover'
            src='https://s3-alpha-sig.figma.com/img/42d2/9801/a09c6b632f72d4cd4c055bf6d11263ec?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IpiVuylE9P5iJ1k2CfWmth9UqD5EsRKjJyModIcYI22VbPgD6OBJ0rtOpq3iuxENmzRe8wIETaBviUGMRo5JTF~UEF1dhcMGor2O8EvgYtvs2qJeH1pHC4nXlqTZ~cfnRaO9NyleLlnSYmny9ze8ZisNC3HUOpbUq8uUYnqLIudL~gw~uSkmssWs9ajGE22hs6mUEk6mAeyLe1dAONglNeeBsUNv428eP3tFjru~5rRu-aG0TM9Jbi8LrYUz8oOY1z9k55xpcCdDV2Jbag4nfqSMNtICLN54GZQPj5D-4Kdd5iP5BlzhUFOC6L5JCWR6R2tXEtcgXz2Y2YQuvQ6-ng__'
            alt='https://via.placeholder.com/376x209'
          ></img>
        </div>
        <div className='flex-grow'>
          <p className='text-white text-[25px] font-semibold font-SF-Pro-Text'>
            GeishaGodness
          </p>
          <p className='text-[#a6a5b3] text-[18px] font-semibold'>
            @GeishaGodness
          </p>
          <p className='text-[#a6a5b3] text-[16px] font-medium'>
            197 K subscribers
          </p>
        </div>
        <div className=''>
          <ChannelActive />
        </div>
      </div>
    </>
  );
}

export default BannerContent;
