// npm install framer-motion
import { motion, useAnimationControls } from 'framer-motion';
import React, { FC, useState } from 'react';

type Props = {
  children: React.ReactNode;
  transitionTimes?: number[];
  duration?: number;
};

/**
 * @param transitionTimes {number[]} array of number between 0 and 1.
 * example: [0, 0.4, 0.6, 0.7, 0.8, 0.9]
 * transitionTimes array must contain same count of number as 'transform' array
 */
const AnimationScale3d: FC<Props> = ({ children, transitionTimes, duration }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, .55, 1)',
        'scale3d(.75, 1.25, 1)',
        'scale3d(1.25, .85, 1)',
        'scale3d(.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
      transition: {
        times: transitionTimes,
        duration,
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      style={{ display: 'inline-block', cursor: 'pointer' }}
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

AnimationScale3d.defaultProps = {
  transitionTimes: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
  duration: 1,
};

export default AnimationScale3d;
