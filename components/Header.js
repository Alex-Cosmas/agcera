import Link from 'next/link'
import Img from '/public/Logo'
function Header() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div>
          <Link href='/'>
            <a>
              <Img />
            </a>
          </Link>
        </div>
        <div className='flex gap-6'>
          <Link href='/products/'>
            <a>Products</a>
          </Link>
          <div>Benefits</div>
          <div>Testimonials</div>
          <div>Opportunity</div>
          <div>Events</div>
        </div>
        <div>
          <div>Contacts</div>
        </div>
      </div>
    </>
  )
}

export default Header
