import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
export default function AgFibreeBenefits() {
  return (
    <>
      <div className='w-full'>
        <div className='w-full mx-auto '>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>So why fiber?</span>

                  <HiChevronDown
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                  <div className='grid gap-3'>
                    {/*  */}
                    <div className=''>
                      {/* <h1>Enhance immune system</h1> */}
                      <ul className='px-6 list-disc'>
                        <li>
                          Fiber expands and bulks food in your GI tract, slowing
                          digestion
                        </li>
                        <li>
                          This can increase satisfaction of your food and helps
                          stabilize blood sugar levels
                        </li>

                        <li>
                          Fiber expands and bulks food in your GI tract, slowing
                          digestion This can increase satisfaction of your food
                          and helps stabilize blood sugar levels
                        </li>

                        <li>
                          Foods high in fiber also tend to be lower in energy
                          density, meaning they’ll help you feel fuller without
                          consuming excessive calories.
                        </li>
                      </ul>
                    </div>
                    {/*  */}
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
