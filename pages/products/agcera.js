import AgCeraDetails from '~/components/ProductAccordion/AgCera/AgCera'

function AgCera() {
  return (
    <>
      <h1 className='my-4 text-3xl'>AgCera</h1>

      <div className='shadow-md bg-gray-50'>
        <div className='flex'>
          <div className='flex flex-col p-6 md:w-3/4'>
            <p className=''>
              Anti aging breakthrough with combined phyto technologies from
              France and Spain, AG Cera brings you the best components nature
              has to offer for both health and beauty. Optimizing your body with
              AG Cera will make you look better, feel better, and live better!
            </p>
          </div>
          <div className='h-full md:w-1/4'>
            <img src='/AGCERA.jpg' alt='' />
          </div>
        </div>
      </div>

      <div className='shadow-md bg-gray-50'>
        <AgCeraDetails />
      </div>
    </>
  )
}
export default AgCera
