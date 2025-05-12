import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquee1 = () => {
  return (
    <div className='absolute z-10 w-full'>
      <Marquee speed={120} gradient={false}>
        <span className='lg:mx-10 mx-4 lg:text-[220px] text-4xl font-medium bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent'>Branding</span>
        <span className='lg:mx-10 mx-4 lg:text-[220px] text-4xl font-medium bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent'>Creativity</span>
        <span className='lg:mx-10 mx-4 lg:text-[220px] text-4xl font-medium bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent'>Marketing</span>
        <span className='lg:mx-10 mx-4 lg:text-[220px] text-4xl font-medium bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent'>Branding</span>
        <span className='lg:mx-10 mx-4 lg:text-[220px] text-4xl font-medium bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent'>Creativity</span>
        <span className='lg:mx-10 mx-4 lg:text-[220px] text-4xl font-medium bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent'>Marketing</span>
      </Marquee>
    </div>
  );
};

export default Marquee1;