import React from 'react'
import CCSS from './ClassCard.module.css'

export default function ClassCard({classData}) {
  const {title, description, days, timeRange} = classData

  return (
    <div className={CCSS.container}>
      <section className={CCSS.days_time }>
        {/* <h6>{days}</h6>
        <h6>{timeRange}</h6> */}
      </section>

      <section className={CCSS.title_desc}>
        <h6>{title}</h6>
        <p> [Description] <br/> <br/> {description} </p>
      </section>
    </div>
  )
}
