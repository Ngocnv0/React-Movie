import React from 'react';

const cardData = {
  cardList: [
    {
      id: 1,
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      channel: 'DESIGN CODE',
      logoChannel:
        'https://s3-alpha-sig.figma.com/img/42d2/9801/a09c6b632f72d4cd4c055bf6d11263ec?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IpiVuylE9P5iJ1k2CfWmth9UqD5EsRKjJyModIcYI22VbPgD6OBJ0rtOpq3iuxENmzRe8wIETaBviUGMRo5JTF~UEF1dhcMGor2O8EvgYtvs2qJeH1pHC4nXlqTZ~cfnRaO9NyleLlnSYmny9ze8ZisNC3HUOpbUq8uUYnqLIudL~gw~uSkmssWs9ajGE22hs6mUEk6mAeyLe1dAONglNeeBsUNv428eP3tFjru~5rRu-aG0TM9Jbi8LrYUz8oOY1z9k55xpcCdDV2Jbag4nfqSMNtICLN54GZQPj5D-4Kdd5iP5BlzhUFOC6L5JCWR6R2tXEtcgXz2Y2YQuvQ6-ng__',
      views: '14k views',
      createDate: '1 month ago',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/2e52/c5f8/e7ee45736c1cf97e332c902254166cd3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTVUybRqd0OX1F8RFjr5SmqFt79ZBk-1oe8bwM2e1wA-BNWN32WvL8fYK-Wy-oYxAvnxU5RwSi6Aw5VsL0iDG0ZO6iR-mUO8OW8HMeqDKlKQny-K0IlsGWnxrew4JgOC616ifcndFjDuqN~6YJ9LQxteS9BLlR8JSDk0pMRn8ex3~VceCudXOsI~3uC-uwPobozGSnXVfVg~CN90whm4rgpBFPm9R1DFrhQuP5szZSOI5lVqOhc~j-eij4mNVjzSY3x1NdOlW-gq9Gw2FtB3OTEwanv4wqUVGON5BzIadmsfeK9eLfjMQ6G5R53sCT~o26w~p3rrCpXf6pKb4RsvmA__',
      duration: '4:30',
    },
    {
      id: 2,
      title: 'Create 3D Site with Spline and React - Full Course',
      channel: 'DESIGN CODE',
      logoChannel:
        'https://s3-alpha-sig.figma.com/img/cbc8/1a2e/a467ebb6e2cb17c8eec6fff76efad437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bo1nuS2vS0ntqA-oI0kRTzxVflVp1m2yP4~AuPcYswJ9skcRliqudhBtom8ryGtmFED1sp8IoLcF3RqNXYkuY90caCwbC0jef-4Pvay-LIr5OfFUZGt0tfDFKiXXzaSr2V4gaTGdqtYcsibxDY7g~dWmeu5E5e4hHjDxcLjQjVsd5VbvoVqa581xfLtvkoANgGaBx44hv3NaRmyuyqC8sUzMGzmawNnAGog9iJk6tQkSttl1G2newaluVmyMwedGCwlR9p2iexNkLeGmaUTy6Zzm8hhkUcJcOlg92yXeLPoBusVhu4tSJ4X0Rl0pcjU006H0Weij-ZOv6xGjLCb8mQ__',
      views: '14k views',
      createDate: '1 month ago',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/3946/b468/efc41e9f04175fc245e7d5b38df2f617?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qks~pHGvQ5CAGGzv4yM4m86PuLGbPN3lMF7VVLPnBE6eAs5o-s2eD-NpsM63dG-MJO2g064oOUsVgEmMpPdSnlqSA-dNI7coMKVocwnczOLH4DTG8gcuIpRVmzH~ovm7aytV2Hf1We~W6PFKHmiH5HJxRBg58h~GFrRqps8w7CLqngt-YgS9bBXOKBUQ2fnjNqbOh7PBqGp9Uh8fmA-QS1U5ofnlqFuR1xXKb64PKEGqPiu-nnU0QqJavhBGwW7-12xAcWvLJeW8Ea29UAGdkyn3RaeswdcTpfke6fBLjJCHSot9d2sYpdUOUzHV670t5Q-2~x7c3~NyGUtUU1bRdQ__',
      duration: '12:30',
    },
    {
      id: 3,
      title: 'How to Use AI Art Generator on Midjourney',
      channel: 'MIDJOURNEY ART',
      logoChannel:
        'https://s3-alpha-sig.figma.com/img/059c/96a5/ad3710e605d5cec821ca3518057a914d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIcFkdj4Ow3sMVs~3ORSsgMjge4cSBHHrFoqoL~G6K4M~9JRW~bzSRX5rvgRHIuI4QUAcHlby-gBqb2de-S~UiRyxI~8u4gHNaQVzvmZQoVhVJ250U6N97dHadA1PpyAv2a3vq3Vqe4M3VtENTyWJZD-~U0wal-aX76uzh17Cj3X7Sa6wERyvCCmYJy5nbe6lVK6aPuhNjCeLEbuF2wLs85Y1HbANd7Esptga4dBxjiVRIC1o13WMwG1WXzdJqgk36zd59X38xKg27N7oZ9WSrnDrSj8RJYjIFwfmu9vvGHekn-d7ZmgvNhHJ7Z1F4WB4oiIsOWWSIATHr2UEnSTaQ__',
      views: '14k views',
      createDate: '1 month ago',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/ee55/3bfb/12936bde826cd1ab2adbcaeceda67233?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKzy0w10Lt5lEfE65u4B2QI9w3tgPucIeABh8q22AmUSnLIWet807xR3D-o9PIh2PIN7E2K55Uo7~HTjMfINlBdTQegVtXtkYmGhQscIhQyKGk7vhhA4LKneFdEnrE1m3X13e53sqKST6enunoZoi83U2xIntJ77YIQ1ckRNzFyKTLIuyWeEd3qIAuhxTYKpOGl~tnYigA7HLuQHTKDV4kTzhk9WcKn5X7Brt6TyBcKvDGthBWYuLmooBAAG~sunx9tcptMjccKC~7iEx-D1sXbLeiSA-zFRy3-B4hSG4H4lgobPHdo8fSErUM5HywbG385uIJ7nE75UIKDX-ylkCQ__',
      duration: '16:20',
    },
    {
      id: 4,
      title: 'Desktop App UI Design in Figma - Full Course',
      channel: 'DESIGN CODE',
      logoChannel:
        'https://s3-alpha-sig.figma.com/img/334e/ad39/eda5ec326260422c22daf66996d21653?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkZso7qMPAsWKmeBCVIRfAChVXI~uV0FyWiFV7NOkhnshFODJat1s3xj6t4ZVPIAAOt1Ee0rYsgxWQHtNLqJnGFtpVCh1nlrk~LZOMshyMz5k0iE9tFKQuLxvhZpZbB67pBLDJh1tCeQJedfm55nRc9x1hnvUmJOHRiObJqMINS27Lt1HOW3QcL0RKKViLpJtN1mZCfP1XzmrCJsyDLYuDrMZ3DV2DIrJhGZKvct4x8GKRdNan5~CXVFiL2PA8foGy3d9H5hQpxKU0qZOoV09MRZFPhe49t6vXq4Bs6Kteis7kLET3G7x9UciXE38z1NFYuhkJU7xvkHzf~k1oAfBg__',
      views: '14k views',
      createDate: '1 month ago',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/bd8c/5091/33c3cce0f9dae978a564cbf86e29483c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLgk0CFfg9hZzx3EGC9NS3rwxEfhbw0K8CFdJ8XCOReePUhvLx20bO0wJOPJ1cDZH3H9nAIOWoYJxEXElDP5QeH~oV3P2Si9h1YUNGucQQyUb263yssjjEfvNmTlImxU16HCKevTSgm1-9Pd1Avx5mh1QX1zw46itGxWeWBAIvY-xp9GvyVU4lFFwV1BU3QVQyo3vVmvkKjqIxjlpcQbqfiDdqprRYzthwg0i4iqWxMpj2mmd2nUyYzsYSmX1CjzIQwb0yA8Gc92RLEFwYKdHFhlVTM5xbwqCazUaRHPpzXFCKnGejMFRhjopmwaiQkmzqDrsZVvaNYEEcSweluzOQ__',
      duration: '40:36',
    },
    {
      id: 5,
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      channel: 'DESIGN CODE',
      logoChannel:
        'https://s3-alpha-sig.figma.com/img/cbdb/5bf9/53410b30a00df53946639c26273c9180?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCEiRWsNRANjGGYRcbifTemgBXuhHTN74qid3NvVfC8y3uw6q3UzqYmswfphB7qvgYW0BpWM5062xYMkEQ6fH34kbTShZU4vnjYPmoWYS6QTWOLGs7BBU8mZ6xMgHjbsyjrKC3dpram-GQQvBNMl9J3ansyJw2zBF-LPjK6V7nVWjrcihIM~VnyWR8ChCo44FMok5QRvpt7YAJ7elSIernIGLaihFU-~FvEQEtafUaoSBgE7GJAKDzwflHa3LtNAyHxsnvLLyjxkwU64dvCQcoh1N3DBBLVWYACd04Gli10iCMw5S1VBp~vyL6EU4VFJMUhngbVHpBRMXzTGVyPf~Q__',
      views: '14k views',
      createDate: '1 month ago',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/c0bb/3c4c/84505579a6a09ad92da69febbb4fa171?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbL-fZWMi6pIksQvniZy0kljjq8cyKCJe8vvYHJUOq7zAoY3xvwoW0OUTx-AZ8UvvCU4D-b5-9OH7Ur1BCTDGEv1uPuP2Fhxxdfti2nij2t79igfoRL7udzh0bU8AYKSlLkACmV3tmBfq3Q3LXQo2XBdryrZ52QSo6F0Y~ABGNRec38AGsJuRfmFsg77X-p3yQiRb7Fn2I-NuaoUEPcjzjWjHRd5Fr8EGdN5aEr~uaE9-gmFHZmGTZoyfSvJtNC8ZSV-bhQwrBMbr86DSjyXIL2YG2SskZpwAYfxSivMAkwJnRRNJDAwg8-SJ14uSWMZL07Qhs-424OafPfcVTwQJQ__',
      duration: '40:36',
    },
    {
      id: 6,
      title: 'Design and Prototype an App with Play - Full 3-hour Course',
      channel: 'DESIGN CODE',
      logoChannel:
        'https://s3-alpha-sig.figma.com/img/0274/edf7/00dea7cf6b1a47ee71f6f4ba8c48e654?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZhKL9dXJUCrTZsvdsL4rvL8aEcJG8KVlfic5jDrt2SD2OFvaD7pkMhat7YOxQU4Lrq0MlmYPjstW6IiNgHIuze24yqS4FS-YcdU0VsqeSvbulrvSfHlftXVNxdP8l1bWO3JN3ioFqC8Ib73mOm12WUk5HLfSJ-V2HOA-xSSMUyGY09OlgR4VtLKqwjQRO~pasfRXokDhOWALdx3pM1Wfl5pME9433-w1kX-WFuNjDWvwq1gMVApv76l10cck39hwFyXvjZ~RXp~4B2aHlt~RbnCgItWVonF~v8voTZmZ7HNR6qTIAO0UVqTvyek0yvXM0Bkg1EYugX~2j4EC95fJg__',
      views: '14k views',
      createDate: '1 month ago',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/f6d8/7c94/2e449c43bc5e5231cdc1612c0bffa6fc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CO~XtdMyhJCmBC0YBrgigXrzK7i16g0-KDT9CX2ezpHQQcKVqPpHlLlEn9c1mpSZ7nhbjGX~21wdVW6OskuPtn2n~4FRyqV6BcNUTr1r~KQWRKzaVLJKML~B3~ypBtYYVZvuhWbKvmEYZEjOQfiqCOUkXrB5oKxCb2XVj0T96JizxOVPeZ13uculAc1wKk2bARsDuGb5vHRQyAi-~yHFuPq8iiM9vRA5NlYM97y95sufnr6LVhtSlqBGWhE2OLbcNMtATZXAHx3uOsz-VuyMTjovepzweEX6rwr8v8VDYMfy3prafxUynZQfiADsmfCOE7HWncn7zb9-RWF32-jpuw__',
      duration: '54:30',
    },
  ],
};

function ItemsDetailUI() {
  return (
    <>
      {cardData &&
        cardData.cardList.map((item) => (
          <div key={item.id} className='cursor-pointer group w-[95%] my-6 mx-auto rounded-2xl shadow-md flex justify-start items-start '>
            <div className='w-[250px] h-28 relative overflow-hidden'>
              <img
                className='w-full h-full object-cover object-center rounded-l-2xl'
                src={item.thumbnail}
                alt='https://via.placeholder.com/376x209'
              />
              <div className='p-1 left-[210px] top-[80px] absolute bg-black rounded justify-end items-center gap-2.5 inline-flex'>
                <div className='text-right text-white text-[13px] font-normal font-SF-Pro-Text'>
                  {item.duration}
                </div>
              </div>
            </div>
            <div className='hover:bg-card-items-detail-hover bg-card-items-detail h-28 px-4 pt-4 shadow-transparent bg-bg-card-gradient border-t border-[#7852dd] rounded-r-2xl'>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className='w-[220px] justify-start items-center inline-flex'>
                  <div className=' hover:underline hover:cursor-pointer text-white text-[15px] font-bold font-SF-Pro line-clamp-1'>
                    {item.title}
                  </div>
                </div>
                <div className='justify-start items-center inline-flex'>
                  <div className='flex-col justify-start items-start inline-flex'>
                    <div className='hover:underline hover:cursor-pointer text-center  mb-1 text-[#FFFFFF99] text-opacity-60 text-xs font-semibold font-SF-Pro-Text uppercase line-clamp-1'>
                      {item.channel}
                    </div>
                    <div className='text-center text-[#FFFFFF99] text-opacity-60 text-[13px] font-medium font-SF-Pro-Text leading-snug'>
                      {item.views} - {item.createDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ItemsDetailUI;
