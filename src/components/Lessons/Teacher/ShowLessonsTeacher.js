import React from "react";
import LessonCardTeacher from "./LessonCardTeacher";
import '../../../pages/style/ShowLessonCardStudent.css'

const ShowLessonsTeacher = () => {
  return (
    <div className="home-container p-3">
      <div className="row-auto">
        <div class="gridContainer grid grid-cols-6 gap-4">
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/> 
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/> 
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/> 
        </div>

        </div>
    </div>
  )
}

export default ShowLessonsTeacher