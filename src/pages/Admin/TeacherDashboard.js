import React,  { useEffect, useState } from 'react'
import '../style/TeacherDashboard.css'
import { Link, Navigate, Route, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { getAuthUser } from '../../helper/Storage';

const TeacherDashboard = () => {

  const Navigate= useNavigate();
  const Auth = getAuthUser();
  
  const [teachers, setTeachers] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0
  });

  useEffect(() => {
    setTeachers(prevTeachers => ({ ...prevTeachers, loading: true }));
    axios.get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${Auth.data.token}`,
      },
      params: {
        role: "teacher"
      }
    })
      .then((res) => {
        setTeachers(prevTeachers => ({ ...prevTeachers, results: res.data.users, loading: false, err: null }));
      })
      .catch((err) => {
        setTeachers(prevTeachers => ({ ...prevTeachers, loading: false, err: "Error getting students" }));
      })
    
    
  }, [teachers.reload]);

  const deleteUser = (id) => {
     axios.delete(`${process.env.REACT_APP_API_URL}/users/`+ id, {
      headers: {
        Authorization: `Bearer ${Auth.data.token}`,
      }
    })
      .then((res) => {
        setTeachers(prevTeachers => ({ ...prevTeachers, reload: teachers.reload + 1 }));
      })
      .catch((err) => {
        setTeachers(prevTeachers => ({ ...prevTeachers, loading: false, err: "something went wrong , please try again later!" }));
      })
  }

  return (
    <div className="teacherDash min-h-screen bg-white p-6">
          <div className="header flex justify-between mb-2 mt-1">
              <h4 className="text-center text-4xl font-bold">Manage Teachers</h4>
             
          </div>

           <div class="flex flex-1 items-center justify-center p-6">
    <div class="w-full max-w-lg">
        <form class="mt-5 sm:flex sm:items-center">
                      <input id="search" name="search" class="inline w-full rounded-md border border-gray-600 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-[#0d3156] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0d3156] sm:text-sm" placeholder="Keyword" type="search" autofocus="" value="" />
                      <button type="submit" class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#0d3156] px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Search</button>
        </form>
    </div>
</div>
         
<div class="py-8 w-full">
  <div class="shadow drop-shadow-lg overflow-x-auto rounded border-b border-gray-200">
    <table class="min-w-full">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="text-left py-3 px-4 uppercase font-semibold text-base">Full Name</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-base">Phone</th>
          <th class="w-1/5 text-left py-3 px-4 uppercase font-semibold text-base">Email</th>
          <th class="text-center py-3 px-4 uppercase font-semibold text-base">Action</th>
        </tr>
      </thead>
            <tbody class="text-gray-700">
              
              {
                teachers.results && teachers.results.map((teacher) => (
                    <tr key={teacher._id}>
                      <td class="text-left py-3 px-4 text-lg">{teacher.firstName} {" "} {teacher.lastName}</td>
                      <td class="text-left py-3 px-4 text-lg">{teacher.phone}</td>
                      <td class="w-1/5 text-left py-3 px-4 text-lg">{teacher.email}</td>
                      <td className="text-center">
               
                      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 my-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={(e) => {
              Navigate("/"+teacher._id) ;
                  }}>
                        Update</button>
                    
                         
                      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e) => {
              deleteUser(teacher._id);
                  }}>
                        Delete</button>
                      </td>
                    </tr>
                  )
                )
              }
              {
                teachers.results.length === 0 && (
                  <tr>
                     <td colspan="4" className='p-3 text-center text-black text-lg font-bold'>There is no data to show.</td>
                  </tr>
                )
              }
     
      
    
    </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default TeacherDashboard