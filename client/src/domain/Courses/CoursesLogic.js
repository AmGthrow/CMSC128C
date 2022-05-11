import { useCallback, useEffect, useRef, useState } from "react"

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

let last

export default function CoursesLogic({width}) {

  const [courses, setCourses] = useState([]) 
 
  let limit = useRef(0)

  const fetchPrev = () => {

    last = (last - limit.current) === 0 ? classesData.length : last - limit.current

    const data = classesData.slice(last - limit.current , last)

    setCourses(data)
  }

  const fetchNext = () => {

    last = last === classesData.length ? limit.current : last + limit.current

    const data = classesData.slice(last - limit.current , last)

    setCourses(data)
  }

  const getLimit = useCallback(() => {

    if(width > 1260) limit.current = 3 
    
    else limit.current = 1

    last = limit.current

  }, [width])

  const fetchCourses = useCallback(() => {

    const data = classesData.slice(0, limit.current)

    setCourses(data)

  }, [limit])

  useEffect(() => {

    getLimit()

    fetchCourses()

  }, [getLimit, fetchCourses])

  
  return {fetchPrev, fetchNext, courses}
}



  