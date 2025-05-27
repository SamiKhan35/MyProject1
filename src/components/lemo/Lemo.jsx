import React from 'react';
import Lemo_Large from '../../assets/images/lemo.png';
import cloudy from '../../assets/images/cloudy.jpeg';

const Lemo = () => {
  return (
    <div
      className='relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center bg-cover bg-center'
      style={{ backgroundImage: `url(${cloudy})` }}
    >
      <h2 className='sm:text-4xl md:text-3xl italic text-white mt-50'>
        <span className='text-black'>We Value the time and quality of travel</span>
        <br />
        <span className='sm:text-5xl md:text-2xl text-black'>
          for each of our clients
        </span>
      </h2>
      <p className='text-xl sm:text-2xl md:text-8xl text-yellow-300 tracking-widest italic'>
        Incredible <br />
        <span className='text-black'>comfort</span>
      </p>
      <img
        src={Lemo_Large}
        alt='No Image'
        className='w-full h-auto object-cover mt-4'
      />
    </div>
  );
};

export default Lemo;
