import { Link } from 'react-router-dom';
import airportCar from '../../assets/images/airpotwithcar.jpg';
import BusinessTransfer from '../../assets/images/BusinessTransfer.jpg';
import EventsWedding from '../../assets/images/EventsWedding.jpg';
import { FaArrowRight } from "react-icons/fa";


const Testimonial = () => {
  return (
    <section id='testimonials' className='py-16 bg-gray-600'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col gap-10 md:flex-row md:gap-6'>
          {/* Testimonial 1 */}
          <div className='flex items-center bg-veryLightGray p-6 rounded-lg '>
            <img
              src={airportCar}
              className='w-32 h-32 object-cover rounded-full mr-6'
              alt='Airport Transfers'
            />
            <div className='text-left'>
              <h5 className='text-xl font-bold text-yellow-300'>Airport Transfers<FaArrowRight  /> </h5>
              <p className='text-gray-400 text-sm mt-2'>
                While stepping in London, use our luxury cars to enhance the charm of your tour.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className='flex items-center bg-veryLightGray p-6 rounded-lg '>
            <img
              src={BusinessTransfer}
              className='w-32 h-32 object-cover rounded-full mr-6'
              alt='Business Transfers'
            />
            <div className='text-left'>
              <h5 className='text-xl font-bold text-yellow-300'>Business Transfers <FaArrowRight  />
              
              </h5>
              <p className='text-gray-400 text-sm mt-2'>
                Our Business Transfers Service offers seamless, professional transportation solutions tailored for corporate clients.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className='flex items-center bg-veryLightGray p-6 rounded-lg '>
            <img
              src={EventsWedding}
              className='w-32 h-32 object-cover rounded-full mr-6'
              alt='Events & Wedding'
            />
            <div className='text-left'>
              <h5 className='text-xl font-bold text-yellow-300'>Events & Wedding <FaArrowRight  /> </h5>
              <p className='text-gray-400 text-sm mt-2'>
                To make your events more special and memorable, we provide luxury cars to make your travel comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
