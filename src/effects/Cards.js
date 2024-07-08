import React from 'react'
import {Effects} from "./Effects"
export const Cards = ({courses}) => {
  const getCourses=()=>{
    let allCourses=[] 
           Object.values(courses).forEach((courseCategory)=>{
          courseCategory.forEach((course)=>{
            allCourses.push(course);
          })
        })
        return allCourses;
  }
    
  return (
    <div>
     {getCourses().map((course)=>{
      <Effects courses={course}/>
    
     })}
    </div>
  )
}
