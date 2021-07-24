import Benefits from '~/components/ProductAccordion/AgFibree/AgFibreeBenefits'

function AgFibree() {
  return (
    <>
      <div className='shadow-md bg-gray-50'>
        <div className='flex'>
          <div className='flex flex-col p-6 md:w-3/4'>
            <h3 className='text-xl text-gray-500 text-semibold'>Ag Fibree</h3>
            <p className='line-clamp-3'>
              A delicious dietary drink that delivers the essentials for a
              healthy weight in a healthy way. Formulated to help cleanse and
              detoxify our digestive system to improve the gastrointestinal
              health, increases appetite and increase the feeling of fullness.
            </p>
          </div>
          <div className=' md:w-1/4'>
            <img src='/Fiberee-600x600.jpeg' alt='' className='' />
          </div>
        </div>
      </div>

      {/*  */}
      <div className='my-5 shadow-md bg-gray-50'>
        <div className='grid '>
          <div>
            <div>
              <p className=''></p>
            </div>
          </div>
          <div>
            <Benefits />
          </div>
        </div>
      </div>
      {/*  */}
    </>
  )
}
export default AgFibree
