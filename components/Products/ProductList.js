import Link from 'next/link'

export default function Products() {
  return (
    <>
      <Link href='/products/agcera'>
        <a>
          <div className='shadow-md bg-gray-50'>
            <div className='flex'>
              <div className='flex flex-col p-6 md:w-3/4'>
                <h3 className='text-xl text-gray-500 text-semibold'>AgCera</h3>
                <p className='line-clamp-3'>
                  Anti aging breakthrough with combined phyto technologies from
                  France and Spain, AG Cera brings you the best components
                  nature has to offer for both health and beauty. Optimizing
                  your body with AG Cera will make you look better, feel better,
                  and live better!
                </p>
              </div>
              <div className='h-full md:w-1/4'>
                <img src='/AGCERA.jpg' alt='' />
              </div>
            </div>
          </div>
        </a>
      </Link>

      {/*  */}

      {/*  Ag Broc */}

      <Link href='/products/agbroc'>
        <a>
          <div className='shadow-md bg-gray-50'>
            <div className='flex'>
              <div className='flex flex-col p-6 md:w-3/4'>
                <h3 className='text-xl text-gray-500 text-semibold'>Ag Broc</h3>
                <p className='line-clamp-3'>
                  Mad from mixed Fruits, Broccoli Seeds Extract, Elderberry
                  Extract, Yeast Beta Glucan and Strawberry
                </p>
              </div>
              <div className='object-contain h-full md:w-1/4'>
                <img src='/agbroc_product.png' alt='' />
              </div>
            </div>
          </div>
        </a>
      </Link>

      {/*  */}

      {/* Ag Drink */}

      <Link href='/products/agdrink'>
        <a>
          <div className='shadow-md bg-gray-50'>
            <div className='flex'>
              <div className='flex flex-col p-6 md:w-3/4'>
                <h3 className='text-xl text-gray-500 text-semibold'>
                  Ag Drink
                </h3>
                <p className='line-clamp-3'>
                  Enjoy the rich taste of premium organic coffee with superfood
                  ingredients of Ginkgo Biloba, Omega 3 (MEG-3) and Stevia.
                  Awaken your senses and start your day with AG Drink. A tasty
                  and healthy choice.
                </p>
              </div>
              <div className='h-full md:w-1/4'>
                <img src='/agcoffee_product.png' alt='' />
              </div>
            </div>
          </div>
        </a>
      </Link>

      {/*  */}
      {/*  */}

      <Link href='/products/agfibree'>
        <a>
          <div className='shadow-md bg-gray-50'>
            <div className='flex'>
              <div className='flex flex-col p-6 md:w-3/4'>
                <h3 className='text-xl text-gray-500 text-semibold'>
                  Ag Fibree
                </h3>
                <p className='line-clamp-3'>
                  A delicious dietary drink that delivers the essentials for a
                  healthy weight in a healthy way. Formulated to help cleanse
                  and detoxify our digestive system to improve the
                  gastrointestinal health, increases appetite and increase the
                  feeling of fullness.
                </p>
              </div>
              <div className=' md:w-1/4'>
                <img src='/Fiberee-600x600.jpeg' alt='' className='' />
              </div>
            </div>
          </div>
        </a>
      </Link>
      {/*  */}

      {/*  Ag Beauty */}

      <Link href='/products/agbeauty'>
        <a>
          <div className='shadow-md bg-gray-50'>
            <div className='flex'>
              <div className='flex flex-col p-6 '>
                <h3 className='text-xl text-gray-500 text-semibold'>
                  Ag Beauty
                </h3>
                <p className='line-clamp-3'>
                  Give your skin what it needs through AG Beauty’s
                  state-of-the-art clinical technologies. Formulated in France,
                  it features elements that will take your skin on a journey
                  back in time. Creating a younger you with AG Beauty.
                </p>
              </div>
              <div>
                <img src='/AGBeauty-products.jpg' alt='' />
              </div>
            </div>
          </div>
        </a>
      </Link>

      {/*  */}
    </>
  )
}
