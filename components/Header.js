import Img from '/public/Logo'

function Header() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div>
          <Img />
        </div>
        <div className='flex gap-6'>
          <div>Products</div>
          <div>Opportunity</div>
        </div>
        <div>
          <div>Contacts</div>
        </div>
      </div>
    </>
  )
}

export default Header
