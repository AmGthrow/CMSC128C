import React, {useState} from 'react'
import CTCSS from './CourseTabs.module.css'
import CWS from '../../assets/cws.png'
import CMW from '../../assets/cmw.png'
import python from '../../assets/python.png'


export default function Course_tabs() {

    const [toggleState, setToggleState] = useState(1);

        const toggleSwitch = (count) => {
            setToggleState(count);
        }

    return (
        <div className={CTCSS.container}>
            <div className={CTCSS.tab}>
                <button 
                    className={toggleState === 1? CTCSS.current : CTCSS.tabs} 
                    onClick = {() => toggleSwitch(1)}>Coding with Science </button>
                <button 
                    className={toggleState === 2? CTCSS.current : CTCSS.tabs} 
                    onClick = {() => toggleSwitch(2)}>Python in the Real World </button>
                <button 
                    className={toggleState === 3? CTCSS.current : CTCSS.tabs} 
                    onClick = {() => toggleSwitch(3)}>Coding Meets World</button>
            </div>
            <div className={CTCSS.course_tab}>
                <div className={toggleState === 1? CTCSS.active_course : CTCSS.course}>
                    <img className={CTCSS.pic} src={CWS} alt='cws'/>
                    <h2 className={CTCSS.intro}>Coding with Science</h2>
                    <p className={CTCSS.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?
                    </p>
                </div>
                <div className={toggleState === 2? CTCSS.active_course : CTCSS.course}>
                    <img className={CTCSS.pic} src={python} alt='python'/>
                    <h2 className={CTCSS.intro}>Python in the Real World</h2>
                    <p className={CTCSS.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?
                    </p>
                </div>
                <div className={toggleState === 3? CTCSS.active_course : CTCSS.course}>
                    <img className={CTCSS.pic} src={CMW} alt='cmw'/>
                    <h2 className={CTCSS.intro}>Code Meets World</h2>
                    <p className={CTCSS.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?
                    </p>
                </div>
            </div>
        </div>
    )

}