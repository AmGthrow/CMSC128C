import { useCallback, useEffect, useRef, useState } from "react"

const classesData = [{
    title: 'Python in the Real World',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Code Meets World',
    description: "Lorem ipsum dolor sit amet,.Donec laoreet tincidunt sollicitudin porttitor. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris neque. Donec vel ligula eu erat.",
  },{
    title: 'Coding With Science',
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

  const fetchCourses = useCallback(() => {

    limit.current = width > 786 ? 3 : 1 

    last = limit.current

    const data = classesData.slice(0, limit.current)

    setCourses(data)

  }, [width])

  useEffect(() => {

    fetchCourses()

  }, [fetchCourses])

  
  return {fetchPrev, fetchNext, courses}
}



  