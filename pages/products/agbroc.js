import Ingredients from '~/components/ProductAccordion/AgBroc/AgBrocIngredients'
import Benefits from '~/components/ProductAccordion/AgBroc/AgBrocBenefits'

function AgBroc() {
  return (
    <>
      <div className='shadow-md bg-gray-50'>
        <div className='flex'>
          <div className='flex flex-col p-6 md:w-3/4'>
            <h3 className='text-xl text-gray-500 text-semibold'>Ag Broc</h3>
            <p className='line-clamp-3'>
              Mad from mixed Fruits, Broccoli Seeds Extract, Elderberry Extract,
              Yeast Beta Glucan and Strawberry
            </p>
          </div>
          <div className='object-contain h-full md:w-1/4'>
            <img src='/agbroc_product.png' alt='' />
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
            <Ingredients />
          </div>
        </div>
      </div>
      {/*  */}

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
export default AgBroc
