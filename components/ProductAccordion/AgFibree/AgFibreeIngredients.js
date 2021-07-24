import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import Iframe from 'react-iframe'
export default function AgFibreeIngredients() {
  return (
    <>
      <div>
        <div className='w-full'>
          <div className='w-full mx-auto '>
            {/* Broccoli seeds (truebroc™) */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                    <span>Broccoli seeds (truebroc™)</span>

                    <HiChevronDown
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                    <div>
                      <div className='grid grid-cols-2'>
                        <div>
                          {/* <h1 className='mt-4 font-semibold'>CERAMOSIDES</h1> */}
                          <div>
                            <p>
                              Truebroc™ will boost the body’s natural defense
                              against oxidative stress caused by pollutants and
                              toxins. Eliminates free radicals and pollutants
                              for up to 72 hours within the human body.
                            </p>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/*  */}

            {/* Elderberry (eldercraft™) */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                    <span>Elderberry (eldercraft™)</span>

                    <HiChevronDown
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                    <div>
                      <div className='grid grid-cols-2'>
                        <div>
                          {/* <h1 className='mt-4 font-semibold'>CERAMOSIDES</h1> */}
                          <div>
                            <p>
                              Eldercraft™ extracted from European Black
                              Elderberry is proven to be a natural treatment for
                              common illnesses such as the common cough and flu
                              by enhancing immune and blocking viruses from
                              spreading throughout the body.
                            </p>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  )
}
