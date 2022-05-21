import { Text, Box, Heading, Center, Flex } from "@chakra-ui/react"
import python from '../../assets/python.png'
import science from '../../assets/science.png'
import world from '../../assets/world.png'

const codeWithScience = [
    {
        title: 'Forty Science Projects',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta pulvinar fermentum. Phasellus semper in tortor nec ultrices. Aliquam rutrum eu mi ut venenatis. Praesent semper at quam eget aliquam. In vitae urna leo. Donec ut ultricies ante. Maecenas libero nisi, bibendum non tortor sit amet, dapibus semper justo. '
    },
    {
        title: 'Make Science More Engaging with Coding',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta pulvinar fermentum. Phasellus semper in tortor nec ultrices. Aliquam rutrum eu mi ut venenatis. Praesent semper at quam eget aliquam. In vitae urna leo. Donec ut ultricies ante. Maecenas libero nisi, bibendum non tortor sit amet, dapibus semper justo. '
    },
    {
        title: 'Long-term Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta pulvinar fermentum. Phasellus semper in tortor nec ultrices. Aliquam rutrum eu mi ut venenatis. Praesent semper at quam eget aliquam. In vitae urna leo. Donec ut ultricies ante. Maecenas libero nisi, bibendum non tortor sit amet, dapibus semper justo. '
    },
    {
        title: 'Easy to Implement',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta pulvinar fermentum. Phasellus semper in tortor nec ultrices. Aliquam rutrum eu mi ut venenatis. Praesent semper at quam eget aliquam. In vitae urna leo. Donec ut ultricies ante. Maecenas libero nisi, bibendum non tortor sit amet, dapibus semper justo. '
    }
]


const projects = [
    {
        title: 'Life Cycle of Plants',
        img: python 
    },
    {
        title: "Earth's Seasons",
        img: python 
    },
    {
        title: 'Animal Life Cycle',
        img: python 
    },
    {
        title: 'Animal and Plant Cycles',
        img: python 
    }
]


export default function CodeWithScience() {

    const desc = codeWithScience.map(work => <Work key={work.title} work={work}/>)

    return(
        <Box bgColor='whiteAlpha.800' p='3' borderRadius='md'>
            {desc}
            <SampleProject />
        </Box>
    )
}

function Work ({work}) {

    return (
        <Box>
            <h1 style={{fontSize: '20px', fontWeight: '700', color: '#00B5D8'}}>{work.title}</h1>
            <p style={{fontSize: '16px', fontWeight:'500', color: '#1A202C'}}>{work.desc}</p>
        </Box>
    )
}

function SampleProject () {

    return (
        <Flex flexDir='column' justifyContent='center' alignItems='center' borderRadius='md' p='1.5'>
            <Heading color='orange.400'>Some of Our Projects</Heading>
            <p style={{ fontSize: '14px', fontWeight:'700', textAlign: 'center'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta pulvinar fermentum. Phasellus semper in tortor nec ultrices. Aliquam rutrum eu mi ut venenatis. Praesent semper at quam eget aliquam. In vitae urna leo.</p>
            <Projects/>
        </Flex> 
    )
}

function Projects () {

    const project = projects.map(proj => <Project key={proj.title} proj={proj}/>)

    return (
        <Flex justifyContent='center' gap='1em' flexWrap='wrap' position='relative' mt='2' mb='3'>
            {project}
        </Flex>
    )
}

function Project ({proj}) {

    return (
        <Flex p='1.5' w='25em' borderRadius='20px' bgColor='gray.200' justify='center' align='center'>
            <p style={{fontSize: '20px', fontWeight: '700'}}>{proj.title}</p>
            <img style={{width:'20%'}} src={proj.img} alt={proj.title}/>
        </Flex>
    )
}