import React from 'react';
import img1 from '../../assets/img/img-p1.jpg'
import img2 from '../../assets/img/img-p2.jpg'
import img3 from '../../assets/img/img-p3.jpg'
import img4 from '../../assets/img/img-p4.jpg'
import { GoArrowRight } from 'react-icons/go';

const Fourth = () => {
    return (
        <div>
            <div className="px-20 py-40 flex items-start gap-10 ]">
                {/* first div */}
                <div className="sticky top-10 flex-2/5">
                    <h2 className="text-[100px]/[110px] font-semibold text-neutral-800 w-[400px]">
                        Award winning creativity
                    </h2>
                </div>
                {/* cards */}
                <div className='flex flex-col gap-y-16'>
                    {/* second div */}
                    <div>
                        <div className='ml-28'>
                            <img className='w-[641px] object-cover' src={img1} alt="" />
                            <h3 className='text-[30px] font-semibold'>Mobile app design</h3>
                            <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                        </div>
                    </div>
                    {/* third div */}
                    <div className='grid grid-cols-2 gap-x-16'>
                        <div>
                            <img className='w-[494px] h-[495px] object-cover' src={img2} alt="" />
                            <h3 className='text-[30px] font-semibold'>Branding design</h3>
                            <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                        </div>
                        <div>
                            <img className='w-[494px] h-[495px] object-cover' src={img3} alt="" />
                            <h3 className='text-[30px] font-semibold'>Web development</h3>
                            <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                        </div>
                    </div>
                    {/* fourth div */}
                    <div className='ml-32 group border border-amber-300 inline-block'>
                        <div  className='w-[647px]'>
                        <div className='w-[647px] h-[497px] overflow-hidden'>
                        <img className='w-[647px] h-[497px] object-cover 
              transition-all duration-400 
              group-hover:scale-105' src={img4} alt="" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                        <h3 className='text-[30px] font-semibold'>Web development</h3>
                        <p className='text-[14px] text-black/25 font-semibold'>Design - 2025</p>
                            </div>
                            <div className='group-hover:translate-x-8 duration-300 mr-[32px]'>                                
                        <button className='bg-yellow-200 opacity-0 group-hover:opacity-100 transition-all ease-in px-7 py-3 rounded-4xl '>
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