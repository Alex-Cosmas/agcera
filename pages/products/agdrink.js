import MoreProducts from '~/components/MoreProducts'
import Benefits from '~/components/ProductAccordion/AgDrink/AgDrinkBenefits'


function AgDrink() {
  return (
    <>
      <div className='shadow-md bg-gray-50'>
        <div className='flex'>
          <div className='flex flex-col p-6 md:w-3/4'>
            <h3 className='text-xl text-gray-500 text-semibold'>Ag Drink</h3>
            <p className='line-clamp-3'>
              Enjoy the rich taste of premium organic coffee with superfood
              ingredients of Ginkgo Biloba, Omega 3 (MEG-3) and Stevia. Awaken
              your senses and start your day with AG Drink. A tasty and healthy
              choice.
            </p>
          </div>
          <div className='h-full md:w-1/4'>
            <img src='/agcoffee_product.png' alt='' />
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

      <MoreProducts />
    </>
  )
}
export default AgDrink
