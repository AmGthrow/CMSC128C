import React from 'react'
import MFCSS from './MainFeatures.module.css'

const featuresData = [{
    title: "Feature 1",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer facilisis vestibulum ante at egestas.Pellentesque dolor massa, tristique id convallis at."
},
{
    title: "Feature 2",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer facilisis vestibulum ante at egestas.Pellentesque dolor massa, tristique id convallis at."
},
{
    title: "Feature 3",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer facilisis vestibulum ante at egestas.Pellentesque dolor massa, tristique id convallis at."
}]
    return (
        <div className={MFCSS.feature_container}>
            <div className={MFCSS.item}>
                <p className={MFCSS.item_header}>{feature}</p>
                <div className={MFCSS.icon}></div>
                <p className={MFCSS.item_intro}>
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
    <div className={MFCSS.container}>
        <div className={MFCSS.description}>
            <p className={MFCSS.header}>WHO WE ARE</p>
            <p className={MFCSS.intro}>Codercademy is a [main description here: brief yet impactful]</p>
        </div>

        <p className={MFCSS.activities}>WHAT WE DO</p>
        <div className={MFCSS.wrapper}> 
            <FeaturesItem feature={'Feature 1'}/>
            <FeaturesItem feature={'Feature 2'}/>
            <FeaturesItem feature={'Feature 3'}/>
        </div>
    </div>
  )
}
