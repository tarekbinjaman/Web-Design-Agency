import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import React from 'react';

const Second = () => {
    const { scrollYProgress } = useScroll();
    const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    const scale = useSpring(rawScale, {
        stiffness: 60,   // how stiff the spring is (lower = softer)
        damping: 40,     // how much resistance (higher = more smooth stop)
        mass: 1          // how heavy the object feels
    });
    return (
        <div>
                                <div
                            className='flex justify-center items-center lg:h-[645px] lg:w-[1595px] h-[500px] w-60% lg:px-0 px-6 lg:rounded-2xl rounded-3xl z-50'
                            style={{
                                margin: '0 auto',
                                overflow: 'hidden',
                                position: 'relative'
                            }}
                        >
                            <motion.img
                                src="https://demo.7iquid.com/plexify/web-design-agency/wp-content/uploads/2025/02/img1-home.jpg"
                                alt="Moving Image"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    scale: scale,
                                }}
                            />

                        </div>
        </div>
    );
};

export default Second;