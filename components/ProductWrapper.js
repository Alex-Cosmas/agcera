/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { AgProducts } from '~/lib/ProductList'

function ProductWrapper() {
  const [product, setProducts] = useState(AgProducts)

  return (
    <>
      <div className='grid grid-cols-2 gap-4 my-6 text-gray-900 '>
        {product.map((agProduct, idx) => {
          const { id, image, title, description } = agProduct
          return (
            <div key={idx} className='shadow-md bg-gray-50'>
              <div className='flex'>
                <div className='flex flex-col p-6 '>
                  <h3 className='text-xl text-gray-500 text-semibold'>
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
                <div>
                  <img src={image} alt='' />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default ProductWrapper
