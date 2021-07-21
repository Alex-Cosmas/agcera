import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import Iframe from 'react-iframe'

export default function AgCera() {
  return (
    <>
      <div className='w-full'>
        <div className='w-full mx-auto '>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Ingredients</span>

                  <HiChevronDown
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                  <div>
                    <p>
                      AG Cera is made up of 8 powerful Ingredients:
                      <p>Ceramosides </p>
                      <p>Hytolive</p>
                      <p>Sakura</p>
                      <p>Curcumin</p>
                      <p>Gymnema Sylvestre</p>
                      <p>Pomegranate</p>
                      <p>Mixed Berries</p>
                      <p>White Peach</p>
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>How to consume </span>

                  <HiChevronDown
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                  <div>
                    <p className=''>
                      The proper and best way of consuming agCERA is through the
                      Sublingual Administration Method: This is the
                      <strong>
                        Pharmacological route of administration by which
                        substances diffuse into the blood through tissues under
                        the tongue
                      </strong>
                      <ul className='px-6 list-disc'>
                        <li>Cut a sachet at the top to open it</li>
                        <li>Open your mouth wide</li>
                        <li>
                          Lift the tip of your tongue towards the roof of your
                          mouth
                        </li>
                        <li>
                          Pour all the content (powder) under your tongue, at
                          the sublingual glands
                        </li>
                        <li>
                          Don’t swallow your saliva immediately you close your
                          mouth
                        </li>
                        <li>
                          The powder (ag cera) will dissolve in your saliva in
                          seconds.
                        </li>
                        <li>Take a glass of water after 5 minutes</li>
                      </ul>
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

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
