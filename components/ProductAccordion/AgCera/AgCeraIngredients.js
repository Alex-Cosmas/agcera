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
          {/*  */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Hytolives</span>

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
                            Hytolive is a natural extract from the olive fruit
                            which contains the most powerful antioxidant ever
                            discovered, hydroxytyrosol.
                          </p>
                          <p>
                            Well-documented studies confirm hydroxytyrosol
                            qualities as an anti-inflammatory, antibacterial,
                            antioxidant, anticancer and delivers
                            cardioprotective health benefits.
                          </p>
                          <p>
                            HYTOLIVE™ are manufactured by GENOSA, a company
                            based in SPAIN that specializes hydroxytorosol and
                            patents the concentrate while exporting it
                            worldwide.
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
                      <div>
                        <Iframe
                          url='https://www.agnutritioninternational.com/images/video/hytolive.mp4'
                          width='450px'
                          height='450px'
                          id='myId'
                          className='myClassname'
                          display='initial'
                          position='relative'
                        />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/*  */}
          {/*  */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Sakura </span>

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
                            Sakura plant which is largely found in Japan
                            contains an extract with potent bio-active compounds
                            and beneficial to the skin, that includes
                            anti-glycation, stimulating collagen production,
                            moisturizing, whitening and other beautifying and
                            anti-aging benefits.
                          </p>
                          <p>
                            High in antioxidants with soothing effects on the
                            skin. Rich in essential fatty acids, Therapeutically
                            regenerative and promotes anti-aging, whitening, and
                            collagen formation. Contains anti-inflammatory
                            properties helps to lighten uneven pigmentation.
                            Cleanses the skin of toxins to leave a glowing,
                            healthy skin.
                          </p>
                        </div>
                      </div>
                      <div>
                        <img
                          src='https://cdn.shopify.com/s/files/1/0338/3043/6995/files/WhatsApp_Image_2020-02-20_at_23.58.34_1_10ed23a8-8853-4bde-9af4-9fb282d8619f_480x480.jpg?v=1582215697'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/*  */}
          {/*  */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Curcumin </span>

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
                            Curcumin is the most active ingredient found in
                            spice turmeric, and is known to have a naturally
                            occurring compound. The spice has been known to hold
                            medicinal benefits and is popular in Asia for
                            centuries.
                          </p>
                          <p>
                            Fights body-wide inflammation Support cardiovascular
                            function Supports joint & bone health Boosts
                            cognitive function Increase detoxification in liver
                            Promotes Radiant skin Anti-cancer Support natural
                            weight-loss
                          </p>
                        </div>
                      </div>
                      <div>
                        <img src='' alt='' />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/*  */}
          {/* Gymnema Sylvestre  */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Gymnema Sylvestre</span>

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
                            Gymnema sylvestre is a woody climbing shrub that’s
                            common to the native of tropical forests of India,
                            Africa and Australia. Known as the “destroyer of
                            sugar” in Hindi language, this ingredient contain
                            anti-diabetic properties.
                          </p>
                          <p>
                            Reduces sugar cravings by making sweet foods taste
                            less appealing Helps lower blood sugar levels
                            Improves cholesterol and triglyceride levels,
                            reducing heart disease risk Increase insulin
                            production Helps reduce inflammation caused by sugar
                            excess intake Act as weight loss aid
                          </p>
                        </div>
                      </div>
                      <div>
                        <img
                          src='https://cdn.shopify.com/s/files/1/0338/3043/6995/files/WhatsApp_Image_2020-02-20_at_23.53.05_8071dbea-8329-4ada-810a-55c4b5fdfde0_480x480.jpg?v=1582214123'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/* Gymnema Sylvestre  */}
          {/* Pomegranate  */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Pomegranate</span>

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
                            The pomegranate, or Punica granatum, is a shrub that
                            produces a red fruit and are among the healthiest
                            fruits on Earth. They contain a range of beneficial
                            plant compounds, unrivalled by any other foods.
                          </p>
                          <p>
                            Pomegranates contain two plant compounds with
                            powerful medicinal properties; punicalagins &
                            punicic acid Help fight prostate cancer in men, and
                            breast cancer in women Lower blood pressure Help
                            fight arthritis and joint pain Help treat erectile
                            dysfunction Help fight bacterial and fungal
                            infections Increase energy and improve exercise
                            performance.
                          </p>
                        </div>
                      </div>
                      <div>
                        <img
                          src='https://cdn.shopify.com/s/files/1/0338/3043/6995/files/WhatsApp_Image_2020-02-20_at_23.48.00_937cf56a-b3b6-49cf-bc4f-2cd809dffe2a_480x480.jpg?v=1582213773'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/* Pomegranate  */}
          {/*    Mixed Berried  */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>Mixed Berried</span>

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
                            Among the most popular super-foods to date. Mixed
                            berries: a combination of blackberry, elderberry,
                            raspberry and blueberry.
                          </p>
                          <ul>
                            <li> Boost overall cognitive function. </li>
                            <li>
                              Strong antioxidant, able to combat against free
                              radical damage, which is the main cause of cancer.
                            </li>
                            <li>
                              The antioxidant activity of berries include the
                              protection of LDL against oxidation. Berries are
                              high in fiber.
                            </li>
                            <li>Help keep your arteries healthy.</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <img
                          src='https://cdn.shopify.com/s/files/1/0338/3043/6995/files/WhatsApp_Image_2020-02-21_at_00.04.38_480x480.jpg?v=1582214766'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/*    Mixed Berried  */}

          {/* White Peach */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <span>White Peach</span>

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
                            Peaches or Prunus persica are small fruit with a
                            fuzzy peel and a sweet white or yellow flesh.
                            They’re thought to have originated in China more
                            than 8,000 years ago.
                          </p>
                          <ul>
                            <li> Boost overall cognitive function. </li>
                            <li>
                              Strong antioxidant, able to combat against free
                              radical damage, which is the main cause of cancer.
                            </li>
                            <li>
                              The antioxidant activity of berries include the
                              protection of LDL against oxidation. Berries are
                              high in fiber.
                            </li>
                            <li>Help keep your arteries healthy.</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <img
                          src='https://cdn.shopify.com/s/files/1/0338/3043/6995/files/white_peach_69c9ccbb-ed32-4b48-a176-5ad795d3f5b3_480x480.jpg?v=1582219955'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          {/* White Peach */}
        </div>
      </div>
    </>
  )
}
