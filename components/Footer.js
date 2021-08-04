import Link from 'next/link'

function Footer() {
  return (
    <>
      {/* flex flex-col items-center justify-center px-4 md:px-24 py-10 mx-auto */}
      <div className='flex flex-col items-center justify-center p-6 py-10 mx-auto text-white bg-gray-900 '>
        <div className=''>
          <div className='grid gap-4 md:grid-cols-3'>
            <div className='FooterAbout'>
              <p>
                We at AG Nutrition provide outstanding products & services that
                meet our distributor and consumer’s needs.
                <div className='mt-2 text-gray-100'>
                  <Link href='https://www.agnutritioninternational.com'>
                    <a target='_blank' rel='noreferrer'>
                      Visit the main AgCera Website for more information
                    </a>
                  </Link>
                </div>
              </p>
            </div>
            <div>
              <div className='flex flex-col md:px-4'>
                <p>
                  Kenya Office
                  <br />
                  A.G. Nutrition Kenya <br />
                  Kimathi House, 4th Floor, <br />
                  Kimathi Street, <br />
                  Nairobi, Kenya · <br />
                </p>
                <hr className='my-3' />
                <div className=''>
                  Contact Details:
                  <p>Julie: +254 713 701 723</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-col'>
                <p>
                  Head Office (Malaysia) <br />
                  Ag Nutrition International SDN BHD <br />
                  No. G-9 Infinity Tower, <br />
                  Jalan SS 6/3, <br />
                  47301 Petaling Jaya, <br /> Selangor Darul Ehsan, <br />
                  Malaysia.
                </p>
                <hr className='my-3' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
