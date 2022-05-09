import { useEffect, useState } from "react"

const classesData = [{
    title: 'Course 1',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 2',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 3',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 4',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 5',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 6',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 7',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 8',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Course 9',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },]


let limit = 3

export default function CoursesLogic() {

  const [courses, setCourses] = useState([])

  const [index, setIndex] = useState(0)

  const fetchPrev = () => {

      if(index === 0) return

      const data = classesData.slice(index - limit, index)

      setIndex(index - limit)

      setCourses(data)
  }

  const fetchNext = () => {

    if(index + limit >= classesData.length) return

    const data = classesData.slice(index + limit, index + (limit * 2))

    setIndex(index + limit)

    setCourses(data)
  }

  const fetchCourses = () => {

    const data = classesData.slice(0, limit)

    setCourses(data)
  }

  useEffect(() => {

    fetchCourses()
  }, [])
  
  return {fetchPrev, fetchNext, courses }
}



  