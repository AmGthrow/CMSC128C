import React from 'react'
import './MainFeatures.css'

function FeaturesItem ({feature}) {
    return (
        <div className='item-container'>
            <div className='item'>
                <h3>{feature}</h3>
                <div className='icon'></div>
                <p className='item-description'>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Integer facilisis vestibulum 
                ante at egestas. Pellentesque 
                dolor massa, tristique id 
                convallis at.</p>
            </div>
        </div>
    )
}

export default function MainFeatures() {
  return (
    <div className='main-features-container'>
        <div className='description'>
            <h3>WHO WE ARE</h3>
            <p>Codercademy is a [main description here: brief yet impactful]</p>
        </div>
        <p className='mf-message'>WHAT WE DO</p>
        <div className='wrapper-items'> 
            <FeaturesItem feature={'Feature 1'}/>
            <FeaturesItem feature={'Feature 2'}/>
            <FeaturesItem feature={'Feature 3'}/>
        </div>
    </div>
  )
}
