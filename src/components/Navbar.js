import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const navbarControl = useAnimation();

  const startRippleAnimation = async (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    await navbarControl.start({
      scale: 1,
      x: offsetX,
      y: offsetY,
      opacity: 1,
      transition: { duration: 0.5 },
    });

    navbarControl.start({
      scale: 5,
      opacity: 0,
      transition: { duration: 0.5 },
    });
  };

  return (
    <nav className="bg-blue-400">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 flex items-center justify-end flex-row text-xl">
     
        <ul className="flex items-center justify-between flex-row h-16">
          <li>
            <a
              href="/"
              className="text-white px-3 py-2 rounded-md block relative overflow-hidden"
              onMouseDown={startRippleAnimation}
            >
              Home
              <motion.div
                className="absolute rounded-full bg-blue-200 ml-[13rem]"
                style={{
                  width: 50,
                  height: 50,
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 0,
                }}
                animate={navbarControl}
              />
            </a>
          </li> </ul>
          <ul className="flex items-center justify-between h-16">
          <li>
            <a
              href="/"
              className="text-white px-3 py-2 rounded-md block relative overflow-hidden"
              onMouseDown={startRippleAnimation}
            >
            Contact Us
              <motion.div
                className="absolute rounded-full bg-blue-200"
                style={{
                  width: 50,
                  height: 50,
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 0,
                }}
                animate={navbarControl}
              />
            </a>
          </li> </ul>
          <ul className="flex items-center justify-between h-16">
          <li>
            <a
              href="/"
              className="text-white px-3 py-2 rounded-md block relative overflow-hidden"
              onMouseDown={startRippleAnimation}
            >
            About us
              <motion.div
                className="absolute rounded-full bg-blue-200"
                style={{
                  width: 50,
                  height: 50,
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 0,
                }}
                animate={navbarControl}
              />
            </a>
          </li> </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
