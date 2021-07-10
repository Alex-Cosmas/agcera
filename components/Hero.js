/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className='relative w-full h-96'>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-40'></div>
        <div className='absolute top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-full text-center'>
          <div className='text-2xl font-semibold text-gray-100'>
            Transforming Lives
          </div>
          <div className='text-5xl text-gray-100'>
            Your health is your wealth
          </div>

          <button className='px-5 py-1 my-5 text-white bg-gray-900 rounded-sm'>
            Learn More
          </button>
        </div>

        <img
          src='/background.jpg'
          alt=''
          className='object-cover object-left-bottom w-full h-full'
        />
      </div>
    </>
  )
}
export default Hero
