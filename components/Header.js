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
          <Link href='/benefits/'>
            <a>Benefits</a>
          </Link>
          <Link href='/testimonials/'>
            <a>Testimonials</a>
          </Link>
          <Link href='/opportunity/'>
            <a>Opportunity</a>
          </Link>
          {/* <Link href='/events/'>
            <a>Events</a>
          </Link> */}
        </div>
        {/* <div>
          <div>Contacts</div>
        </div> */}
      </div>
    </>
  )
}

export default Header
