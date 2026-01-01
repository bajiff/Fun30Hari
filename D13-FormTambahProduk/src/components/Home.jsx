import React, { useState } from 'react'
import Door from './Door';

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const doorToggle = () => {
    return setIsOpen(prev => !prev);
  };

  return (
    <Door isOpen={isOpen} doorToggle={doorToggle}/>
  );
};

export default Home;