import { skills } from '../pages/data'

export default function Component() {
  return (
    <section id='skills'>
      <div>
        {skills.map(function (core, idx) {
          return <div key={idx}>{core}</div>
        })}
      </div>
    </section>
  )
}
