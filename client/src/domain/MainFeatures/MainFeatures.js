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

function FeaturesItem({ title, desc }) {
    return (
        <div className={MFCSS.feature_container}>
            <h1>{title}</h1>
            <div className={MFCSS.icon}></div>
            <p>{desc}</p>
        </div>
    )
}

export default function MainFeatures() {
    // Generate list of all features
    const features = featuresData.map((featureData) =>
        <FeaturesItem
            title={featureData.title}
            desc={featureData.desc}
        ></FeaturesItem>)

    return (
        <div className={MFCSS.container}>
            <h1>WHO WE ARE</h1>
            <p>Codercademy is a [main description here: brief yet impactful]</p>

            <p className={MFCSS.activities}>WHAT WE DO</p>
            <div className={MFCSS.wrapper}>
                {features}
            </div>
        </div>
    )
}
