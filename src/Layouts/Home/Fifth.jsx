import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import React from 'react';
import img from '../../assets/img/img5-team.jpg'
const Fifth = () => {
    const { scrollYProgress } = useScroll();
    // const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
    // Transform scroll value to vertical movement (upward translation)
    const rawY = useTransform(scrollYProgress, [0, 1], [0, -90]);  // Moves up as you scroll

    // Smooth vertical movement (upward shift)
    const y = useSpring(rawY, {
        stiffness: 90,  // Same stiffness for smooth movement
        damping: 40,    // Same damping for smooth stop
        mass: 1.8         // Mass
    });
    return (
        <div>
            <div
                className='flex justify-center items-center border border-amber-300 w-full overflow-hidden'
                style={{
                    height:'750px' ,
                    margin: '0 auto',
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <motion.img
                    src={img}
                    alt="Moving Image"
                    style={{
                        width: '140%',
                        height: '140%',
                        objectFit: 'cover',
                        y: y,  // Apply vertical movement (upward shift)
                    }}
                />
            </div>
        </div>
    );
};

export default Fifth;