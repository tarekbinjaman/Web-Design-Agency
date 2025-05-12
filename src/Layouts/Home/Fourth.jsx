import React from 'react';
import img1 from '../../assets/img/img-p1.jpg'
import img2 from '../../assets/img/img-p2.jpg'
import img3 from '../../assets/img/img-p3.jpg'
import img4 from '../../assets/img/img-p4.jpg'
import { GoArrowRight } from 'react-icons/go';

const Fourth = () => {
    return (
        <div>
            <div className="lg:px-20 px-3 lg:pt-40 lg:flex items-start gap-10 ]">
                {/* first div */}
                <div className="lg:sticky top-10 lg:flex-2/5 py-10">
                    <h2 className="md:text-[100px]/[110px] text-[36px]/[43px] font-semibold text-neutral-800 lg:w-[400px] w-[200px]">
                        Award winning creativity
                    </h2>
                </div>
                {/* cards */}
                <div className='lg:flex flex-col gap-y-16'>
                    {/* second div */}
                    <div>
                        <div className='lg:ml-28 group mb-14 md:mb-0'>
                            <div className='lg:w-[641px]'>
                                <div className='lg:w-[641px] lg:h-[490px] overflow-hidden'>
                                    <img className='lg:w-[641px] lg:h-[490px] w-[393px] h-[392px] object-cover 
                                        transition-all duration-400 
                                        group-hover:scale-105' src={img1} alt="" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='text-[30px] font-semibold'>Mobile app design</h3>
                                        <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                                    </div>
                                    <div className='group-hover:translate-x-8 duration-300 mr-[32px]'>
                                        <button className='bg-yellow-200 lg:opacity-0 group-hover:opacity-100 transition-all ease-in px-7 py-3 rounded-4xl '>
                                            <GoArrowRight className='text-xl' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third div */}
                    <div className='lg:grid grid-cols-2 gap-x-16'>
                        {/* 1 */}
                        <div className='lg:w-[494px] group mb-14 md:mb-0'>
                            <div className='lg:w-[494px] lg:h-[495px] overflow-hidden'>
                                <img className='lg:w-[494px] lg:h-[495px] object-cover w-[393px] h-[392px]
                                          transition-all duration-400 
                                          group-hover:scale-105' src={img2} alt="" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='text-[30px] font-semibold'>Branding design</h3>
                                    <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                                </div>
                                <div className='group-hover:translate-x-8 duration-300 mr-[32px]'>
                                    <button className='bg-yellow-200 lg:opacity-0 group-hover:opacity-100 transition-all ease-in px-7 py-3 rounded-4xl '>
                                        <GoArrowRight className='text-xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='lg:w-[494px] group mb-14 md:mb-0'>
                            <div className='lg:w-[494px] lg:h-[495px] overflow-hidden'>
                                <img className='lg:w-[494px] lg:h-[495px] object-cover transition-all duration-400 w-[393px] h-[392px]
              group-hover:scale-105' src={img3} alt="" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='text-[30px] font-semibold'>Web development</h3>
                                    <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                                </div>
                                <div className='group-hover:translate-x-8 duration-300 mr-[32px]'>
                                    <button className='bg-yellow-200 lg:opacity-0 group-hover:opacity-100 transition-all ease-in px-7 py-3 rounded-4xl '>
                                        <GoArrowRight className='text-xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fourth div */}
                    <div className='lg:ml-32 group  mb-14 md:mb-0'>
                        <div className='lg:w-[647px]'>
                            <div className='lg:w-[647px] lg:h-[497px] overflow-hidden'>
                                <img className='lg:w-[647px] lg:h-[497px] object-cover w-[393px] h-[392px]
              transition-all duration-400 
              group-hover:scale-105' src={img4} alt="" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='text-[30px] font-semibold'>Web development</h3>
                                    <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                                </div>
                                <div className='group-hover:translate-x-8 duration-300 mr-[32px]'>
                                    <button className='bg-yellow-200 lg:opacity-0 group-hover:opacity-100 transition-all ease-in px-7 py-3 rounded-4xl '>
                                        <GoArrowRight className='text-xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fourth;