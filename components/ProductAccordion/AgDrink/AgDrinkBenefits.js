import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
export default function AgDrinkBenefits() {
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
                      <h1>Health benefits of ginkgo biloba</h1>
                      <ul className='px-6 list-disc '>
                        <li>Improves cognitive (brain) function</li>
                        <li>Helps alleviate the symptoms of anxiety</li>
                        <li>Improves blood flow to the brain</li>
                        <li>Acts as an anti-oxidant</li>
                        <li>Supports vision & eye health</li>
                        <li>Treats sexual dysfunction</li>
                        <li>Helps fight inflammation</li>
                      </ul>
                    </div>
                    {/*  */}

                    {/*  */}
                    <div className='grid grid-cols-2'>
                      <h1>Health benefits of stevia</h1>
                      <ul className='px-6 list-disc '>
                        <li>Controls diabetes</li>
                        <li>Helps in weight loss</li>
                        <li>Regulates blood pressure</li>
                        <li>Promotes oral health</li>
                      </ul>
                    </div>
                    {/*  */}

                    {/*  */}
                    <div className='grid grid-cols-2'>
                      <h1>Health benefits of omega 3</h1>
                      <ul className='px-6 list-disc '>
                        <li>Reduces risk for heart diseases.</li>
                        <li>Fights depression & anxiety.</li>
                        <li>Improves eye health. </li>
                        <li>Improves bone & joint health. </li>
                        <li>Fights inflammations. </li>
                        <li>Improves overall health & longevity. </li>
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
