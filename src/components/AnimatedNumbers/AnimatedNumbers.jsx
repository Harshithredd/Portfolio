import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
  
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
      if(!isInView){
        motionValue.set(0);
      }
    }, [isInView, value, motionValue]);
  
    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          console.log("ref.current.textContent ==>", ref.current.textContent);
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);
    return <span ref={ref}></span>;
  };
  

export default AnimatedNumbers