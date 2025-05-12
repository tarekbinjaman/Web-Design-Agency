import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquee1 = () => {
  return (
    <div>
      <Marquee speed={120} gradient={false}>
        <span className='mx-10 text-[220px] font-medium bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent'>Branding</span>
        <span className='mx-10 text-[220px] font-medium bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent'>Creativity</span>
        <span className='mx-10 text-[220px] font-medium bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent'>Marketing</span>
      </Marquee>
    </div>
  );
};

export default Marquee1;