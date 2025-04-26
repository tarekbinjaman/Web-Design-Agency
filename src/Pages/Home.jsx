import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

    const scale = useSpring(rawScale, {
        stiffness: 80,   // how stiff the spring is (lower = softer)
        damping: 15,     // how much resistance (higher = more smooth stop)
        mass: 1          // how heavy the object feels
    });

    return (
        <div>
            <h1>This is home</h1>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div
                className='flex justify-center items-center border border-amber-300'
                style={{
                    height: '400px',
                    width: '800px',
                    margin: '0 auto',
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <motion.img
                    src="https://t4.ftcdn.net/jpg/06/81/35/49/360_F_681354997_LjEvGcOg8YeK58dsOfGn8wJV5IFvxI77.jpg"
                    alt="Moving Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        scale: scale,
                    }}
                />
            </div>

            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
            <div><p>ldsjl</p></div>
        </div>
    );
};

export default Home;
