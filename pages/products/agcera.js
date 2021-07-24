import AgCeraIngredients from '~/components/ProductAccordion/AgCera/AgCeraIngredients'
import HowtoConsume from '~/components/ProductAccordion/AgCera/HowtoConsume'
import AgCeraVideos from '~/components/ProductAccordion/AgCera/Videos'

function AgCera() {
  return (
    <>
      <h1 className='my-4 text-3xl'>AgCera</h1>

      <div className=''>
        <div className='flex shadow-md bg-gray-50'>
          <div className='h-full md:w-1/4'>
            <img src='/AGCERA.jpg' alt='' />
          </div>
          <div className='flex flex-col p-6 md:w-3/4'>
            <p className=''>
              Anti aging breakthrough with combined phyto technologies from
              France and Spain, AG Cera brings you the best components nature
              has to offer for both health and beauty. Optimizing your body with
              AG Cera will make you look better, feel better, and live better!
            </p>
          </div>
        </div>

        <div className='my-5 shadow-md bg-gray-50'>
          <div className='grid '>
            <div className='p-4'>
              <div>
                AG Cera is made up of 8 powerful Ingredients:
                <div>
                  • Ceramosides • Hytolive • Sakura • Curcumin • Gymnema
                  Sylvestre • Pomegranate • Mixed Berried • White Peach
                </div>
              </div>
            </div>
            <div className='p-4'>
              <AgCeraIngredients />
            </div>
          </div>
        </div>

        <div className='my-5 shadow-md bg-gray-50'>
          <div className='grid '>
            <div>
              <div>
                <p className=''>
                  The proper and best way of consuming agCERA is through the
                  Sublingual Administration Method:
                  <br /> This is the
                  <strong>
                    Pharmacological route of administration by which substances
                    diffuse into the blood through tissues under the tongue
                  </strong>
                </p>
              </div>
            </div>
            <div>
              <HowtoConsume />
            </div>
          </div>
        </div>

        <div className='my-5 shadow-md bg-gray-50'>
          <div className='grid '>
            <div>
              <div>
                <p className=''></p>
              </div>
            </div>
            <div>
              <AgCeraVideos />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AgCera
