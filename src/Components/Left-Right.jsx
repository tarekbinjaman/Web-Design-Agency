import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
const LeftRight = (img1) => {
        const containerRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: ["start end", "end start"],
        });
      
        // Pixel-based movement (safer for edge cases)
        const rawX = useTransform(
          scrollYProgress,
          [0, 1],
          [-40, 40] // Moves -40px to +40px
        );
      
        const x = useSpring(rawX, {
          stiffness: 80,
          damping: 50,
          mass: 1,
          restDelta: 0.001,
        });
    return (
        <div>
          {console.log(img1.img1)}
                    <div
                      ref={containerRef}
                      style={{
                        width: 800,
                        height: 400,
                        margin: '0 auto',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '1px solid #f59e0b'
                      }}
                    >
                      <motion.div
                        style={{
                          width: '130%', // Extra buffer (from 120% to 130%)
                          height: '130%',
                          x,
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          translateX: '-50%', // Center the motion div
                          translateY: '-50%',
                        }}
                      >
                        <img
                          src={img1.img1}
                          alt="Moving Image"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </motion.div>
                    </div>
        </div>
    );
};

export default LeftRight;