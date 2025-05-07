import React from 'react';

const First = () => {
    return (
        <div className='lg:w-[70%] mx-auto lg:mt-22 mt-10 px-4'>
            <div className='lg:flex justify-between'>
                <div className="">
                    <h1 className='lg:text-[70px]/[85px] text-[36px]/[50px] font-bold '>
                        All-in-one solution <br />
                        Unlimited design & <br />
                        development
                    </h1>
                </div>
                <div>
                    <div>
                        <p className='lg:text-[28px]/[35px] font-extralight border-1 border-dotted lg:text-center py-4 lg:px-10 px-6 text-[18px]/[23px] mb-8 lg:w-[440px] w-[400px] mt-4'>A web design & development studio based in Istria, Croatia</p>
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