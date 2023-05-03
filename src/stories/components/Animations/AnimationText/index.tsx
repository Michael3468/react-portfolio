/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import { FC } from 'react';

type Props = {
  text: string;
  animationType: 'words' | 'letters';
  staggerChildren?: number;
  delayChildren?: number;
  hiddenX?: number;
  hiddenY?: number;
  visibleX?: number;
  visibleY?: number;
  dumping?: number;
  stiffness?: number;
  style?: React.CSSProperties;
};

const AnimationText: FC<Props> = ({
  text,
  animationType,
  staggerChildren,
  delayChildren = 2,
  hiddenX,
  hiddenY,
  visibleX,
  visibleY,
  dumping,
  stiffness,
  style,
}) => {
  const items = animationType === 'words' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delayChildren * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      x: hiddenX,
      y: hiddenY,
      transition: {
        type: 'spring',
        dumping,
        stiffness,
      },
    },

    visible: {
      opacity: 1,
      x: visibleX,
      y: visibleY,
      transition: {
        type: 'spring',
        dumping,
        stiffness,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}
    >
      {items.map((item, index) => (
        // this motion uses parent 'initial' and 'animate' props and values
        // causes they have same names 'hidden' and 'visible'
        <motion.span key={index} variants={child} style={{ ...style }}>
          {animationType === 'words' ? item : item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.div>
  );
};

AnimationText.defaultProps = {
  staggerChildren: 0.5,
  delayChildren: 2,
  hiddenX: 0,
  hiddenY: 20,
  visibleX: 0,
  visibleY: 0,
  dumping: 12,
  stiffness: 100,
  style: {},
};

export default AnimationText;
