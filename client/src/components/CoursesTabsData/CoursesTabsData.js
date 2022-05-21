import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CodeWithScience from './CodeWithScience'


export default function TabsBar({courses}) {

    const tabTitle = courses.map(({icon, val}) => <List key={val} icon={icon} val={val}/>)

    return (
        <Tabs orientation='vertical' size='sm' variant='enclosed' ml='20'>
            <TabList>{tabTitle}</TabList>
            <TabPanels>
                <TabPanel>
                    <CodeWithScience/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

function List ({icon, val}) {
    return(
        <Tab w='10vw' display='block' mb='3em' color='blackAlpha.800'>
            <img src={icon} alt={val}/>
            {val}
        </Tab>
    )
}