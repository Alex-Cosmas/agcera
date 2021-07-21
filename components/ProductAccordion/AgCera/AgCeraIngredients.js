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
                  <span>Ceramosides</span>

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
                            Ceramosides™ is a clinically studied, all-natural
                            ingredient for beauty from the inside-out. Ceramides
                            in the skin decrease with age. Taking Ceramosides™
                            orally is a source of ceramides for the skin. The
                            results are increased moisture and decreased
                            wrinkles, providing a healthy, youthful glow to
                            aging skin.
                          </p>
                          <p>
                            The unique difference of ceramosides is that this
                            ingredient is a patented synergy of phytoceramides
                            and other lipids. When taken orally, this unqiue
                            combination allows for improved skin hydration with
                            a low daily dose after 15 days.
                          </p>
                        </div>
                        <div>
                          <h1 className='mt-4 font-semibold'>
                            Benefits of Ceramosides:
                          </h1>
                          <p>
                            Brings new ceramides to the skin, helping lock
                            moisture and replenish cracks Improve skin moisture
                            as early as 15 days Reduce wrinkles and increase
                            skin elasticity Creating youthful skin from within
                            CERAMOSIDES™ is a technology EPI FRANCE, a company
                            that designs and produces innovative natural active
                            ingredients for cosmetics and food supplements
                            worldwide.
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
        </div>
      </div>
    </>
  )
}
