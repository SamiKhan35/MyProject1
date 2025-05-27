import React from 'react'
import SLIDE_03 from '../../assets/images/SLIDE_03.jpg';
import SLIDE_04 from '../../assets/images/SLIDE_04.jpg';
import SLIDE_05 from '../../assets/images/SLIDE_05.jpg';

const HeroSection = () => {
  return (
    <div className='w-full h-[400px] sm:h-[500px] md:h-[619px] relative'>
      <img src={SLIDE_03} alt='No Image' className='w-full h-full object-cover' />
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-4 text-white bg-black opacity-60 '>
        <h2 className='text-3xl sm:text-4xl md:text-5xl text-center animate-bounce'>
         <span className='text-yellow-400'>Grandeur</span> 
          <br />
          <span className='text-4xl sm:text-5xl md:text-6xl tracking-widest text-center leading-snug'>
            Enjoy the Ride
          </span>
        </h2>
        <p className='text-xl sm:text-2xl md:text-3xl italic tracking-widest'>
          the inspiration comes standard
        </p>
      </div>
    </div>
  )
}

export default HeroSection
