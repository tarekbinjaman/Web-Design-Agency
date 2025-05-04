import React from 'react';

const First = () => {
    return (
        <div className='lg:w-[70%] mx-auto mt-22'>
            <div className='lg:flex items-center justify-between'>
                <div>
                    <h1 className='text-[70px]/[85px] font-bold z-10'>All-in-one solution <br />
                        Unlimited design & <br />
                        development</h1>
                </div>
                <div>
                    <div>
                        <p className='text-[28px]/[35px] font-extralight border-1 border-dotted text-center py-4 px-10 mb-8'>A web design & development <br /> studio based in Istria, Croatia</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        {/* images div */}
                        <div className='flex'>
                            <img className='w-[70px] h-[70px]' src="https://i.ibb.co.com/R5yBPCD/img2-service.jpg" alt="" />
                            <img className='w-[70px] h-[70px]' src="https://i.ibb.co.com/YGjqg5D/img3-service.jpg" alt="" />
                            <img className='w-[70px] h-[70px]' src="https://i.ibb.co.com/DDyBpq4x/img1-service.jpg" alt="" />
                        </div>
                        {/* text div */}
                        <div>
                            <p>
                                <span className='font-bold text-[25px]'>2.5k</span> <span className='font-extralight text-[20px]'>client in</span>  <br /> <span className='font-extralight text-[20px]'>the world</span></p>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;