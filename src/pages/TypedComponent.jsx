import { useEffect } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  useEffect(() => {
    const options = {
      strings: ['EXPERIENCED DRIVER', 'PROFESSIONAL DRIVER', 'PERSONALIZED DRIVER'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed('.typing', options);

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return <span className="typing"></span>;
};

export default TypedComponent;
