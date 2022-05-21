import React from 'react'
import python from '../../assets/python.png'
import science from '../../assets/science.png'
import world from '../../assets/world.png'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CodeWithScience from './CodeWithScience'



function List ({icon, val}) {
    return(
        <Tab w='10vw'>
            <div>
                <img src={icon} alt={val}/>
                <p>{val}</p>
            </div>
        </Tab>
    )
}



export default function CoursesTabsBar({courses}) {

    const tabTitle = courses.map(({to, icon, val}) => <List key={val} icon={icon} val={val}/>)

    return (
        <Tabs orientation='vertical' size='sm' variant='soft-rounded' ml='20'>
            <TabList>{tabTitle}</TabList>
            <TabPanels>
                <TabPanel>
                    <CodeWithScience/>
                </TabPanel>
                <TabPanel>
                    <CodeWithScience/>
                </TabPanel>
                <TabPanel>
                    <CodeWithScience/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
