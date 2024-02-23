import React from 'react'
import ParentReport from './Parent/ParentReport'
import StudentReport from './Student/StudentReport';
import TeacherReport from './Teacher/TeacherReport';
import TeacherQuizReport from './Teacher/TeacherQuizReport';

const ShowReports = () => {
    const type = "TeacherQuizReport";
    
    if (type === "Parent") {
        return (<ParentReport />)
    }
    else if (type === "Student") {
        return (<StudentReport />)
    }
    else {
        if (type === "TeacherReport") {
            return <TeacherReport />
        } else if (type === "TeacherQuizReport") {
            return <TeacherQuizReport/>
         }
    }
}
    export default ShowReports;
