import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import mercedes from '../../assets/images/mercedes.png';

const Mid = () => {
  return (
    <section id='hero' className='py-16 bg-white'>
      <div className='container flex flex-col-reverse items-center px-6 mx-auto md:flex-row md:space-x-12'>
        {/* Left Item */}
        <div className='flex flex-col space-y-8 md:w-1/2 text-center md:text-left'>
          <h1 className='text-4xl font-bold md:text-5xl'>
            <span className="text-yellow-400">Luxury Cars</span> for Maximum Satisfaction
          </h1>
          <p className='text-darkGrayishBlue text-base md:text-lg'>
            Explore the best of London with our best of luxury cars for a comfortable tour.
          </p>
          <div className='flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start'>
            <button className='flex items-center gap-2 p-3 px-6 text-white bg-yellow-400 hover:bg-black transition duration-300'>
              Read More <FaArrowRight />
            </button>
            
          </div>
        </div>

        {/* Right Item */}
        <div className='md:w-1/2 mb-12 md:mb-0'>
          <img src={mercedes} alt='Mercedes' className='w-full h-auto object-contain' />
        </div>
      </div>
    </section>
  );
};

export default Mid;
