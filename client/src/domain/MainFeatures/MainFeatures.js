import React from 'react'
import MFCSS from './MainFeatures.module.css'
import icon1 from '../../assets/nodes.png'
import icon2 from '../../assets/check.png'
import icon3 from '../../assets/wifi.png'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

const featuresData = [{
    title: "Feature 1",
    desc: "Our learning experiences are aligned to concepts in the K12 CS Framework, Next Generation Science Standards and Singapore MOE Science Syllabus.",
    color: "#0191CB",
    image: icon1
},
{
    title: "Feature 2",
    desc: "We help kids develop the holistic skills, attitudes & mindsets from the OECD Learning Compass 2030.",
    color: "#EAD842",
    image: icon2
},
{
    title: "Feature 3",
    desc: "We create awareness of & inspire action towards the UN Sustainable Development Goals.",
    color: "#E55454",
    image: icon3
}]

function FeaturesItem({featureData}) {

    const {title, desc, color, image} = featureData

    return (
        <div className={MFCSS.feature_container} style={{backgroundColor: color }}>
            <img src={image} alt='icon' />
            <div className={MFCSS.description}>
                <h1><b> {title} </b></h1>
                <p>{desc}</p>
            </div>
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

