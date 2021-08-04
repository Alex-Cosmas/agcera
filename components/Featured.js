/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import { FeaturedProducts } from '~/pages/api/featured'

function FeaturedProduct() {
  const [products, setProducts] = useState(FeaturedProducts)
  return (
    // <section id='products'>
    //   <div className='flex flex-col items-center justify-center px-4 py-10 mx-auto md:px-24'>
    //     <h1 className='my-4 text-3xl'>Featured Products</h1>

    //     <div className='grid gap-x-4 gap-y-8 md:grid-cols-3'>
    //       {products.map(function (featured, idx) {
    //         return (
    //           <div key={idx} className='flex flex-col'>
    //             <div className='p-4'>
    //               <div className='text-xl font-semibold text-center text-gray-500'>
    //                 {featured.title}
    //               </div>
    //             </div>
    //             <div className='overflow-hidden bg-white rounded-md shadow-xl'>
    //               <img src={featured.image} alt='' className='w-full h-60' />

    //               <div>
    //                 <button className='w-full py-4 text-center text-white bg-gray-900'>
    //                   View Product
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         )
    //       })}
    //     </div>
    //   </div>
    // </section>

    <section id='products'>
      <div className='flex flex-col items-center justify-center px-4 py-10 mx-auto md:px-24'>
        <h1 className='my-4 text-3xl'>Featured Products</h1>

        <div className='grid gap-x-4 gap-y-8 md:grid-cols-3'>
          <div className='flex flex-col'>
            <div className='p-4'>
              <div className='text-xl font-semibold text-center text-gray-500'>
                AgCera
              </div>
            </div>
            <div className='overflow-hidden bg-white rounded-md shadow-xl'>
              <img src='/AGCERA.jpg' alt='' className='w-full h-60' />

              <div className='w-full py-4 text-center text-white bg-gray-900'>
                <Link href='/products/agcera'>
                  <a>View Product</a>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='flex flex-col'>
            <div className='p-4'>
              <div className='text-xl font-semibold text-center text-gray-500'>
                AgBroc
              </div>
            </div>
            <div className='overflow-hidden bg-white rounded-md shadow-xl'>
              <img src='/agbroc_product.png' alt='' className='w-full h-60' />

              <div className='w-full py-4 text-center text-white bg-gray-900'>
                <Link href='/products/agbroc'>
                  <a>View Product</a>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='flex flex-col'>
            <div className='p-4'>
              <div className='text-xl font-semibold text-center text-gray-500'>
                Ag Drink
              </div>
            </div>
            <div className='overflow-hidden bg-white rounded-md shadow-xl'>
              <img src='/agcoffee_product.png' alt='' className='w-full h-60' />

              <div className='w-full py-4 text-center text-white bg-gray-900'>
                <Link href='/products/agdrink'>
                  <a>View Product</a>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='flex flex-col'>
            <div className='p-4'>
              <div className='text-xl font-semibold text-center text-gray-500'>
                Ag Fibree
              </div>
            </div>
            <div className='overflow-hidden bg-white rounded-md shadow-xl'>
              <img src='/Fiberee-600x600.jpeg' alt='' className='w-full h-60' />

              <div className='w-full py-4 text-center text-white bg-gray-900'>
                <Link href='/products/agfibree'>
                  <a>View Product</a>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}

          <div className='flex flex-col'>
            <div className='p-4'>
              <div className='text-xl font-semibold text-center text-gray-500'>
                AgCera
              </div>
            </div>
            <div className='overflow-hidden bg-white rounded-md shadow-xl'>
              <img src='AGBeauty-products.jpg' alt='' className='w-full h-60' />

              <div className='w-full py-4 text-center text-white bg-gray-900'>
                <Link href='/products/agbeauty'>
                  <a>View Product</a>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
