import React from 'react'
import MFCSS from './MainFeatures.module.css'
import kids1 from '../../assets/kids1.jpg'
import kids2 from '../../assets/kids2.jpg'
import kids3 from '../../assets/kids3.jpg'

const featuresData = [{
    title: "Feature 1",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer facilisis vestibulum ante at egestas.Pellentesque dolor massa, tristique id convallis at.",
    color: "#0191CB",
    image: kids1
},
{
    title: "Feature 2",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer facilisis vestibulum ante at egestas.Pellentesque dolor massa, tristique id convallis at.",
    color: "#EAD842",
    image: kids2
},
{
    title: "Feature 3",
    desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer facilisis vestibulum ante at egestas.Pellentesque dolor massa, tristique id convallis at.",
    color: "#E55454",
    image: kids3
}]

function FeaturesItem({ title, desc, color, image }) {
    return (
        <div className={MFCSS.feature_container} style={{backgroundColor: color }}>
            <div className={MFCSS.description}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <img src={image} alt='kids images' />
        </div>
    )
}

export default function MainFeatures () {
    // Generate list of all features
    const features = featuresData.map((featureData) => 
        <FeaturesItem title={featureData.title} desc={featureData.desc} color={featureData.color} image={featureData.image}/>)

    return (
        <div className={MFCSS.features}>
            {features}
        </div>
    )
}


