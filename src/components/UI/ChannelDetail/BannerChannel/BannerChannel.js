import React from 'react';

function BannerChannel() {
  return (
    <>
      <img
        className='w-full h-[450px] object-cover object-center rounded-tl-2xl'
        alt='https://via.placeholder.com/376x209'
        src='https://s3-alpha-sig.figma.com/img/ee55/3bfb/12936bde826cd1ab2adbcaeceda67233?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKzy0w10Lt5lEfE65u4B2QI9w3tgPucIeABh8q22AmUSnLIWet807xR3D-o9PIh2PIN7E2K55Uo7~HTjMfINlBdTQegVtXtkYmGhQscIhQyKGk7vhhA4LKneFdEnrE1m3X13e53sqKST6enunoZoi83U2xIntJ77YIQ1ckRNzFyKTLIuyWeEd3qIAuhxTYKpOGl~tnYigA7HLuQHTKDV4kTzhk9WcKn5X7Brt6TyBcKvDGthBWYuLmooBAAG~sunx9tcptMjccKC~7iEx-D1sXbLeiSA-zFRy3-B4hSG4H4lgobPHdo8fSErUM5HywbG385uIJ7nE75UIKDX-ylkCQ__'
      ></img>
      <div className='absolute top-0 left-0 w-full h-full bg-channelDetail-img rounded-tl-2xl'></div>
    </>
  );
}

export default BannerChannel;
