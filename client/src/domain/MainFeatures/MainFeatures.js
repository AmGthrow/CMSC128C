import React from 'react'
import MFCSS from './MainFeatures.module.css'
import kids1 from '../../assets/kids1.jpg'
import kids2 from '../../assets/kids2.jpg'
import kids3 from '../../assets/kids3.jpg'

const featuresData = [{
    title: "01",
    desc: "Our learning experiences are aligned to concepts in the K12 CS Framework, Next Generation Science Standards and Singapore MOE Science Syllabus.",
    color: "#0191CB",
    image: kids3
},
{
    title: "02",
    desc: "We help kids develop the holistic skills, attitudes & mindsets from the OECD Learning Compass 2030.",
    color: "#EAD842",
    image: kids2
},
{
    title: "03",
    desc: "We create awareness of & inspire action towards the UN Sustainable Development Goals.",
    color: "#E55454",
    image: kids1
}]

function FeaturesItem({featureData}) {

    const {title, desc, color, image} = featureData

    return (
        <div className={MFCSS.feature_container} style={{backgroundColor: color }}>
            <div className={MFCSS.description}>
                <h1><b> {title} </b></h1>
                <p>{desc}</p>
            </div>
            <img src={image} alt='kids images' />
        </div>
    )
}

export default function MainFeatures () {
    // Generate list of all features
    const features = featuresData.map((featureData) =>  <FeaturesItem key={featureData.title} featureData = {featureData} />)

    return (
        <div className={MFCSS.features}>
            {features}
        </div>
    )
}


