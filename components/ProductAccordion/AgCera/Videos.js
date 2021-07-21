import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import Iframe from 'react-iframe'

export default function AgCeraVideos() {
  return (
    <>
      <div className='w-full'>
        <div className='w-full mx-auto '>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Videos</span>

                  <HiChevronDown
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                  <div className='grid md:grid-cols-2'>
                    <Iframe
                      url='https://www.youtube.com/watch?v=R8GXuiIkLGA'
                      width='450px'
                      height='450px'
                      id='myId'
                      className='myClassname'
                      display='initial'
                      position='relative'
                    />
                    <Iframe
                      url='https://youtu.be/GPJ_ri6axKI'
                      width='450px'
                      height='450px'
                      id='myId'
                      className='myClassname'
                      display='initial'
                      position='relative'
                    />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  )
}
