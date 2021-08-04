import ProductWrapper from '~/components/Products/ProductList'

export default function Products() {
  return (
    <>
      <div>
        <h1 className='my-4 text-3xl'>Our Products</h1>

        <div className='grid gap-4 my-10 md:grid-cols-2'>
          <ProductWrapper />
        </div>
      </div>
    </>
  )
}
