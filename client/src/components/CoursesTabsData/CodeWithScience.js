import { Box, Heading, Flex } from "@chakra-ui/react"
import python from '../../assets/python.png'

const data = [
    {
        work: [
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
    },
    {
        projects: [
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
    }
]


export default function CodeWithScience() {

    const desc = data[0].work.map(work => <Work key={work.title} work={work}/>)
    return(
        <Box>
            {desc}
            <SampleProject />
        </Box>
    )
}

function Work ({work}) {
    return (
        <Box>
            <h1 style={{fontSize: '20px', fontWeight: '600', color: 'red'}}>{work.title}</h1>
            <p style={{fontSize: '13px', fontWeight:'400', color: 'black'}}>{work.desc}</p>
        </Box>
    )
}

function SampleProject () {
    return (
        <Flex flexDir='column' justifyContent='center' alignItems='center' borderRadius='md' p='1.5'>
            <Heading color='blackAlpha.800'>Some of Our Projects</Heading>
            <p style={{ fontSize: '12px', fontWeight:'500', textAlign: 'center'}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta pulvinar fermentum. Phasellus semper in tortor nec ultrices. Aliquam rutrum eu mi ut venenatis. Praesent semper at quam eget aliquam. In vitae urna leo.</p>
            <Projects/>
        </Flex> 
    )
}

function Projects () {

    const project = data[1].projects.map(proj => <Project key={proj.title} proj={proj}/>)

    return (
        <Flex justifyContent='center' gap='1em' flexWrap='wrap' position='relative' mt='2' mb='3'>
            {project}
        </Flex>
    )
}

function Project ({proj}) {
    return (
        <Flex p='1.5' w='25em' border='1px' borderRadius='20px' bgColor='whiteAlpha.800' justify='space-around' align='center'>
            <p style={{fontSize: '20px', fontWeight: '700'}}>{proj.title}</p>
            <img style={{width:'20%'}} src={proj.img} alt={proj.title}/>
        </Flex>
    )
}