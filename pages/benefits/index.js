import { MdCheckCircle } from 'react-icons/md'

export default function Benefits() {
  const RestoreList = [
    'Rejuvenate Aged Cells',
    'Replaces Dead Cells',
    'Replicates Good Cells',
    'Repairs Damaged Cells',
    'All kind of cancers (even at stage 4)',
    'Memory problem',
    'Sleeping problem',
    'Infertility problem',
    'Impotence or poor sexual performance',
    'Kidney disease',
    'Anti aging',
    'Burns',
    'Diabetes',
    'Heart disease',
    'Stroke',
    'Spinal cord injuries',
    'Muscular degeneration',
    'Prostate disorders',
    'Kidney disease',
    'Anti aging',
    'Burns',
    'Diabetes',
    'Heart disease',
    'Stroke',
    'Spinal cord injuries',
    'Muscular degeneration',
    'Prostate disorders',
    'Cardiovascular disorders',
    'Improve blood flow',
    'Skin infections',
  ]
  return (
    <>
      <div className='grid gap-3 p-5'>
        <p>
          AG Nutrition products function by promoting the body’s ability to
          maintain and repair itself. The potent ingredients found in these
          products will provide you with optimal health towards looking better,
          feeling better, and living better.
        </p>
        <p>
          We transform people to have better health and live a happier
          lifestyle. Ag Products products:
        </p>

        <ul className='grid gap-3 '>
          <li>
            Deal with chronic conditions at a cellular level hence completely
            diminishing diseases and leaving no space of them reoccurring.
          </li>
          <li>
            Quick results on any condition, majority have seen great changes in
            less than 30 days i.e. cancer patients even at stage 4, diabetic
            patients, patients with arthritis , with prostate problems etc.
          </li>

          <li>
            Can help you manage many conditions at once for example, if you have
            cancer and diabetes, instead of focusing on cancer only, it deals
            with both conditions at once
          </li>
          <li>
            AG Product can address the following conditions and many others at
            once:
          </li>

          <p>Assists with restoration of the cells.</p>

          <ul className='grid md:gap-3 md:grid-cols-3'>
            {RestoreList.map((ail, index) => {
              return (
                <li key={index}>
                  <div className='flex items-center gap-2'>
                    <MdCheckCircle />
                    <div>{ail}</div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* {list.map(((restoredList, idx)) = () =>  {
                return (
                <div key={idx} className='flex flex-col'></div> 
                )
            })} */}
        </ul>
      </div>
    </>
  )
}

// const RestoreList
;[
  'Rejuvenate Aged Cells',
  'Replaces Dead Cells',
  'Replicates Good Cells',
  'Repairs Damaged Cells',
  'All kind of cancers (even at stage 4)',
  'Memory problem',
  'Sleeping problem',
  'Infertility problem',
  'Impotence or poor sexual performance',
  'Kidney disease',
  'Anti aging',
  'Burns',
  'Diabetes',
  'Heart disease',
  'Stroke',
  'Spinal cord injuries',
  'Muscular degeneration',
  'Prostate disorders',
  'Kidney disease',
  'Anti aging',
  'Burns',
  'Diabetes',
  'Heart disease',
  'Stroke',
  'Spinal cord injuries',
  'Muscular degeneration',
  'Prostate disorders',
  'Cardiovascular disorders',
  'Improve blood flow',
  'Skin infections',
]
