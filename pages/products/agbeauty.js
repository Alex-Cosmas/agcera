import Link from 'next/link'
import MoreProducts from '~/components/MoreProducts'
function AgBeauty() {
  return (
    <>
      <div className='shadow-md bg-gray-50'>
        <div className='flex'>
          <div className='flex flex-col p-6 '>
            <h3 className='text-xl text-gray-500 text-semibold'>Ag Beauty</h3>
            <p className='line-clamp-3'>
              Give your skin what it needs through AG Beauty’s state-of-the-art
              clinical technologies. Formulated in France, it features elements
              that will take your skin on a journey back in time. Creating a
              younger you with AG Beauty.
            </p>
          </div>
          <div>
            <img src='/AGBeauty-products.jpg' alt='' />
          </div>
        </div>
      </div>

      {/*  */}
      <div className='my-5 shadow-md bg-gray-50'>
        <div className=''>
          <div className=''>
            <div>
              <div className='grid gap-x-4 gap-y-8 md:grid-cols-3'>
                {/* Face Mist */}
                <Link href=''>
                  <a>
                    <div className='flex flex-col'>
                      <div className='p-4'>
                        <div className='text-xl font-semibold text-center text-gray-500'>
                          Face Mist
                        </div>
                      </div>
                      <div className='overflow-hidden bg-white rounded-md shadow-xl'>
                        <img
                          src='/Face Mist 2.jpg'
                          alt=''
                          className='object-contain w-full h-60'
                        />

                        <div>
                          <button className='w-full py-4 text-center text-white bg-gray-900'>
                            View Product
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                {/* Face Mist */}
                {/* Serum */}

                <Link href=''>
                  <a>
                    <div className='flex flex-col'>
                      <div className='p-4'>
                        <div className='text-xl font-semibold text-center text-gray-500'>
                          Serum
                        </div>
                      </div>
                      <div className='overflow-hidden bg-white rounded-md shadow-xl'>
                        <img
                          src='/Ag Serum 1.jpg'
                          alt=''
                          className='object-contain w-full h-60'
                        />

                        <div>
                          <button className='w-full py-4 text-center text-white bg-gray-900'>
                            View Product
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                {/* Serum */}

                {/* Face Cleanser */}
                <Link href=''>
                  <a>
                    <div className='flex flex-col'>
                      <div className='p-4'>
                        <div className='text-xl font-semibold text-center text-gray-500'>
                          Face Cleanser
                        </div>
                      </div>
                      <div className='overflow-hidden bg-white rounded-md shadow-xl'>
                        <img
                          src='/AgCleanser/cleanseraa.png'
                          alt=''
                          className='object-contain w-full h-60'
                        />

                        <div>
                          <button className='w-full py-4 text-center text-white bg-gray-900'>
                            View Product
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Face Cleanser */}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <MoreProducts />
    </>
  )
}
export default AgBeauty
