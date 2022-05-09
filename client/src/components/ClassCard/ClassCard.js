import React from 'react'
import CardCSS from './ClassCard.module.css'
import kids4  from '../../assets/kids4.jpg'

function ClassCard({classData}) {
  const {title, description} = classData
  return (
    <div className={CardCSS.container}>
      <div className={CardCSS.text}>
        <h1>{title}</h1>
        <p><br/>{description}</p>
        <button>View More</button>
      </div>
      <img src={kids4} alt='kids images'></img>
    </div>
  )
}

export default ClassCard
