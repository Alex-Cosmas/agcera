import { useState } from 'react'
import { KeySkills } from '~/pages/api/skills'
import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { MdCheckCircle } from 'react-icons/md'

export default function Opportunity() {
  const [skills, setSkills] = useState(KeySkills)
  return (
    <>
      <div className='grid gap-4 my-5'>
        {/* <h1>Opportunity</h1> */}

        <div className='text-2xl font-semibold'>
          <h1>Why is it easy to make money with agcera?</h1>
        </div>

        <p>
          What was the last movie you recommended to someone? A restuarant,
          product. Did anyone pay you for that? We all recommend things to
          people for free.
        </p>
        <p>
          How about joining a network that earns you money from recommendation
          and building a network you can rely on for your future businesses and
          social capital.
        </p>
        <p>AgCera is a a popular product and you can make money through:</p>
        <div className='grid gap-3 md:grid-cols-2'>
          <div className='flex items-center gap-2'>
            <MdCheckCircle />{' '}
            <h2 className='font-semibold'> Referral earnings:</h2>
          </div>
          <div className='flex items-center gap-2'>
            <MdCheckCircle /> <h2 className='font-semibold'> Product sales:</h2>
          </div>
          <div className='flex items-center gap-2'>
            <MdCheckCircle />{' '}
            <h2 className='font-semibold'> Account maintenance:</h2>
          </div>
          <div className='flex items-center gap-2'>
            <MdCheckCircle />{' '}
            <h2 className='font-semibold'> Rank achievement:</h2>
          </div>
        </div>

        <div>
          <div>
            <h2 className='font-semibold'> Referral earnings:</h2>
            <div className='grid gap-3 p-4 bg-gray-100 rounded-sm'>
              <h1 className='font-semibold'>When you refer, you get paid</h1>
              <div>
                When you refer a new distributor and they pay a registration fee
                of 10,500 shillings for the basic package, your earn Kenya
                shillings 4,000.
              </div>
              <div>
                Example of earning possibilities; If you refer one new client
                every day (i.e., 4000×30,) you get paid Kenya shillings 120,000
                that month. Supposing you refer 60 new distributors in one
                month? How much would you get paid? You will earn Kenya
                shillings 240,000 for registering 60 new distributors.
              </div>
              <div>
                <h1 className='font-semibold'>
                  When your down line refers, you get paid
                </h1>
                <p>
                  When your down line refers a new distributor who pays a
                  registration fee of 10,500 for the basic package, you as the
                  up line, get paid Kenya shillings 1,300 Supposing your down
                  line refer 5 new distributors every day. How much would you
                  get paid? That is (5x30x 1300) Kenya shillings 195,000
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className='font-semibold'> Product sales:</h2>
            <div className='p-4 bg-gray-100 rounded-sm'>
              When you refer, you get paid When you refer a new distributor and
              they pay a registration fee of 10,500 shillings for the basic
              package, your earn Kenya shillings 4,000.
              <div>
                Example of earning possibilities; If you refer one new client
                every day (i.e., 4000×30,) you get paid Kenya shillings 120,000
                that month. Supposing you refer 60 new distributors in one
                month? How much would you get paid? You will earn Kenya
                shillings 240,000 for registering 60 new distributors.
              </div>
            </div>
          </div>
          <div>
            <h2 className='font-semibold'> Account maintenance:</h2>
            <div className='p-4 bg-gray-100 rounded-sm'>
              When you down line pay a monthly account maintenance fee of Kenya
              shillings 4,100 you get paid 350
            </div>
          </div>

          <div className=''>
            <h2 className='font-semibold'> Get paid for Rank achievement:</h2>
            <div className='p-4 bg-gray-100 rounded-sm'>
              You get paid for rank achieve annually. The higher your rank, the
              higher your bonus will be.
              <div className='my-4'>
                <table className='w-full table-auto'>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Income in $(Dollars)</th>
                      <th>Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ambassador</td>
                      <td> 250,000 </td>
                      <td> Car fund</td>
                    </tr>
                    <tr>
                      <td>Global Director </td>
                      <td> 100,000 </td>
                      <td> Car fund</td>
                    </tr>
                    <tr>
                      <td>Director </td>
                      <td> 50,000 </td>
                      <td> Car fund</td>
                    </tr>
                    <tr>
                      <td>Rising star </td>
                      <td> 20,000 </td>
                      <td> Car fund</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='text-2xl font-semibold'>
          Key skills for your success
        </div>

        <div>
          Here are key skills that will help you become a successful if you
          practice and master them:
        </div>

        {skills.map(function (skill, idx) {
          return (
            <div key={idx} className='flex flex-col'>
              <Disclosure key={idx}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                      <span> {skill.title}</span>

                      <HiChevronDown
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                      <div className='grid gap-3'>
                        {/*  */}
                        <div className='grid '>{skill.description}</div>
                        {/*  */}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          )
        })}

        {/* <div>
          <h1>Finding prospects skill</h1>
          <p>
            You need to find new clients for your network marketing business
            every day. Anyone can become a successful network marketing business
            person. Never underrate any person. It is known and documented that
            some of the most successful and richest distributors began extremely
            poor and penniless. They came into the office in sleepers, hungry,
            and poorly dressed. Today they are high flying millionaires. So,
            everybody is a potential client. Give them a chance. Talk to
            everyone who is willing to listen to you.
          </p>
          <h1>Inviting prospects skill</h1>
          <p>
            You need to find new clients for your network marketing business
            every day. Anyone can become a successful network marketing business
            person. Never underrate any person. It is known and documented that
            some of the most successful and richest distributors began extremely
            poor and penniless. They came into the office in sleepers, hungry,
            and poorly dressed. Today they are high flying millionaires. So,
            everybody is a potential client. Give them a chance. Talk to
            everyone who is willing to listen to you.
          </p>
        </div> */}
      </div>
    </>
  )
}
