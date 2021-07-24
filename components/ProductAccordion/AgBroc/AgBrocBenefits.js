import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
export default function AgBrocBenefits() {
  return (
    <>
      <div className='w-full'>
        <div className='w-full mx-auto '>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Benefits</span>

                  <HiChevronDown
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                  <div className='grid gap-3'>
                    {/*  */}
                    <div className='grid grid-cols-2 '>
                      <h1>Enhance immune system</h1>
                      <ul>
                        <li>
                          Coating the virus and preventing it from entering
                          cells
                        </li>
                        <li>
                          Immobilize the activity of the virus Reduce the risk
                          of super infection
                        </li>
                      </ul>
                    </div>
                    {/*  */}

                    {/*  */}
                    <div className='grid grid-cols-2'>
                      <h1>Restore essential nutrients</h1>
                      <ul>
                        <li>
                          Coating the virus and preventing it from entering
                          cells
                        </li>
                        <li>
                          Immobilize the activity of the virus Reduce the risk
                          of super infection
                        </li>
                      </ul>
                    </div>
                    {/*  */}

                    {/*  */}
                    <div className='grid grid-cols-2'>
                      <h1>Strengthen cellular protection</h1>
                      <ul>
                        <li>Triggers the phase 2 enzymes (Nrf-2)</li>
                        <li>Strengthens cellular antioxidant defenses</li>
                        <li>Cellular detoxification</li>
                        <li>Inhibit production of inflammatory cytokines</li>
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
