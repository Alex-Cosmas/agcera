/* eslint-disable @next/next/no-img-element */

import ProductWrapper from '~/components/ProductWrapper'

// import products from '/pages/api/data'
function ProductPage() {
  return (
    <>
      <h1 className='my-4 text-3xl'>Our Products</h1>

      <ProductWrapper />
      {/* <div className='grid gap-x-4 gap-y-8 md:grid-cols-3'>
        {products.map(function (featured, idx) {
          return (
            <div key={idx} className='flex flex-col'>
              <div className='p-4'>
                <div className='text-xl font-semibold text-center text-gray-500'>
                  {featured.title}
                </div>
               
              </div>
              <div className='overflow-hidden bg-white rounded-md shadow-xl'>
                <img src={featured.image} alt='' className='w-full h-60' />

                <div>
                  <button className='w-full py-4 text-center text-white bg-gray-900'>
                    View Product
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div> */}
    </>
  )
}

export default ProductPage
