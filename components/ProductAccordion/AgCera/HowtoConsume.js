import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

export default function HowtoConsume() {
  return (
    <>
      <div className='w-full'>
        <div className='w-full mx-auto '>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Instructions</span>

                  <HiChevronDown
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                  <div className='grid md:grid-cols-2'>
                    <ul className='px-6 list-disc'>
                      <li>Cut a sachet at the top to open it</li>
                      <li>Open your mouth wide</li>
                      <li>
                        Lift the tip of your tongue towards the roof of your
                        mouth
                      </li>
                      <li>
                        Pour all the content (powder) under your tongue, at the
                        sublingual glands
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
