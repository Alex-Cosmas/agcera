/* eslint-disable @next/next/no-img-element */
import { products } from '../pages/productData'

export default function FeaturedProduct() {
  return (
    <section id='products'>
      <div className='flex flex-col items-center justify-center px-4 py-10 mx-auto md:px-24'>
        <h1 className='my-4 text-3xl'>Featured Products</h1>

        <div className='grid gap-4 md:grid-cols-3'>
          {products.map(function (featured, idx) {
            return (
              <div key={idx} className='flex'>
                <div className='overflow-hidden bg-white rounded-md shadow-xl'>
                  <img src={featured.image} alt='' className='w-full h-60' />

                  <div className='p-4'>
                    <div className='text-xl font-semibold text-gray-500'>
                      {featured.title}
                    </div>
                    <div>{featured.description}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
