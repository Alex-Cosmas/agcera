import Link from 'next/link'
export default function MoreProducts() {
  return (
    <>
      <div>
        <div className='my-10'>
          <Link href='/products'>
            <a>More Products</a>
          </Link>
        </div>
      </div>
    </>
  )
}
