import {Box} from '@chakra-ui/react'


function Header () {

  return (
    <Box bgColor='#F6AD55' height='30vh'> 
      Header
    </Box>
  )
}

function Courses () {

  const coursesData = [
    {to: 'science', icon: '', name: 'Coding with Science'},
    {to: 'world', icon: '', name: 'Code Meets World'},
    {to: 'python', icon: '', name: 'Python'},
  ]

  return (

    <Box>
    
    </Box>
  )
}


export default function CoursesPage() {
  return (
    <Box>
      <Header/>
      <Courses />
    </Box>
  )
}
