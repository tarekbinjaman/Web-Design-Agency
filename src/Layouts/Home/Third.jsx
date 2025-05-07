import React from 'react';
import img1 from '../../assets/img/s-1.svg'
import img2 from '../../assets/img/s-2.svg'
import img3 from '../../assets/img/s-3.svg'
import img4 from '../../assets/img/s-4.svg'

const Third = () => {
    return (
        <div className='bg-cover h-[1078px]'
            style={{ backgroundImage: 'url("https://i.ibb.co.com/FbCXXRr4/service-bg.jpg")' }}
        >
            <div className='lg:min-h-[55vh] md:min-h-[70vh] min-h-[60vh]' />
            {/* parent div */}


            <div className='flex justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8'>
                <div className='w-[300px] '>
                    <div className='flex flex-col gap-6'>
                        <div>
                    <img src={img1} className='w-[70px] hover:w-[80px] transition-all duration-300'  alt="" />
                        </div>
                    <h3 className='text-[24px]/[20px] font-semibold'>Creative Design</h3>
                    <p className='text-[18px]/[20px] text-justify'>Creative design transforms ideas into impactful visuals that elevate your brand identity and ...</p>
                    <div>
                                        {/* button */}
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-transparent px-8 py-2 text-black hover:text-white border border-black/25">
                        {/* Text */}
                        <span className="relative z-10">Hover Me</span>

                        {/* Arrow Animation (fixed z-index and color) */}
                        <div className="relative ml-1 h-5 w-5 overflow-hidden z-10">
                            <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5 -translate-x-4">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Background Slide-In (z-0 to stay below arrow) */}
                        <span className="absolute inset-0 overflow-hidden z-0">
                            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>    
                    </div>

                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-3'>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>admin</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>app</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>website</p>
                    </div>
                </div>
                <div className='w-[300px] hidden md:block'>
                    <div className='flex flex-col gap-6'>
                        <div className=''>
                    <img src="https://img.icons8.com/?size=50&id=11603&format=png" className='w-[70px] hover:w-[80px] transition-all duration-300'  alt="" />
                        </div>
                    <h3 className='text-[24px]/[20px] font-semibold'>Creative Design</h3>
                    <p className='text-[18px]/[20px] text-justify'>Creative design transforms ideas into impactful visuals that elevate your brand identity and ...</p>
                    <div>
                                        {/* button */}
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-transparent px-8 py-2 text-black hover:text-white border border-black/25">
                        {/* Text */}
                        <span className="relative z-10">Hover Me</span>

                        {/* Arrow Animation (fixed z-index and color) */}
                        <div className="relative ml-1 h-5 w-5 overflow-hidden z-10">
                            <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5 -translate-x-4">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Background Slide-In (z-0 to stay below arrow) */}
                        <span className="absolute inset-0 overflow-hidden z-0">
                            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>    
                    </div>

                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-3'>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>admin</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>app</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>website</p>
                    </div>
                </div>
                <div className='w-[300px] hidden  lg:block'>
                    <div className='flex flex-col gap-6'>
                        <div>
                    <img src={img3} className='w-[70px] hover:w-[80px] transition-all duration-300'  alt="" />
                        </div>
                    <h3 className='text-[24px]/[20px] font-semibold'>Creative Design</h3>
                    <p className='text-[18px]/[20px] text-justify'>Creative design transforms ideas into impactful visuals that elevate your brand identity and ...</p>
                    <div>
                                        {/* button */}
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-transparent px-8 py-2 text-black hover:text-white border border-black/25">
                        {/* Text */}
                        <span className="relative z-10">Hover Me</span>

                        {/* Arrow Animation (fixed z-index and color) */}
                        <div className="relative ml-1 h-5 w-5 overflow-hidden z-10">
                            <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5 -translate-x-4">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Background Slide-In (z-0 to stay below arrow) */}
                        <span className="absolute inset-0 overflow-hidden z-0">
                            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>    
                    </div>

                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-3'>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>admin</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>app</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>website</p>
                    </div>
                </div>
                <div className='w-[300px] hidden lg:block'>
                    <div className='flex flex-col gap-6'>
                        <div>
                    <img src={img4} className='w-[70px] hover:w-[80px] transition-all duration-300'  alt="" />
                        </div>
                    <h3 className='text-[24px]/[20px] font-semibold'>Creative Design</h3>
                    <p className='text-[18px]/[20px] text-justify'>Creative design transforms ideas into impactful visuals that elevate your brand identity and ...</p>
                    <div>
                                        {/* button */}
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-transparent px-8 py-2 text-black hover:text-white border border-black/25">
                        {/* Text */}
                        <span className="relative z-10">Hover Me</span>

                        {/* Arrow Animation (fixed z-index and color) */}
                        <div className="relative ml-1 h-5 w-5 overflow-hidden z-10">
                            <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <svg width="15" height="15" viewBox="0 0 15 15" className="h-5 w-5 -translate-x-4">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fill="black"
                                        className="group-hover:fill-white transition-colors"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Background Slide-In (z-0 to stay below arrow) */}
                        <span className="absolute inset-0 overflow-hidden z-0">
                            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </button>    
                    </div>

                    </div>
                    <div className='divider'></div>
                    <div className='flex gap-3'>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>admin</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>app</p>
                        <p className='uppercase textarea-md bg-black/10 font-semibold inline px-1 py-0.5 rounded-sm'>website</p>
                    </div>
                </div>
            </div>  
            </div>
        </div>
    );
};

export default Third;