import React , {useState,useEffect} from 'react';
import "../style/Summarization.css";
import { getAuthUser } from '../../helper/Storage';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Summarization = () => {

  let {id} = useParams();
  const Auth = getAuthUser();
  const [lesson,setLesson] = useState({
      name : '',
      summary : '',
      loading : false,
      err : null
    })

    const loadLesson = () => {
      setLesson({ ...lesson, loading: true });
      axios.get(`${process.env.REACT_APP_API_URL}/lessons/`+ id, {
        headers: {
          Authorization: `Bearer ${Auth.token}`
        }
      })
        .then(resp => {
          setLesson({ ...lesson, name : resp.data.data.lesson.name ,summary : resp.data.data.lesson.summary, loading: false });
        })
        .catch(err => {
          setLesson({ ...lesson, loading: false, err: err.data.data.msg });
        });
    };

    useEffect ( ()=>{
      loadLesson();
    }, [])


  return (
      <div className="summarizeContainer min-h-screen">
          <div className="lessonTitle">
        <b class="text-slate-50 my-4 text-4xl font-extrabold tracking-wide text-center">
          {lesson.name}
        </b>
          </div>
          <div className="summarizeText pb-4">
            {lesson !== "" ? (
              <textarea readOnly id="message" rows="23" 
              class="resize-none block mx-auto mt-3 p-3 w-11/12 text-xl text-black-900 bg-white-40 rounded-xl border border-gray-500 dark:bg-white-700 dark:border-gray-800 dark:text-black-900" 
            value={lesson.summary}
          ></textarea>

            ) : (
              <textarea readOnly id="message" rows="23"
               class="resize-none block mx-auto mt-3 p-3 w-11/12 text-xl text-black-900 bg-white-40 rounded-xl border border-gray-500 dark:bg-white-700 dark:border-gray-800 dark:text-black-900" 
               value="Check again later for this lesson's summary."></textarea>

            )
          }
              
          </div>

    </div>
  )
}

export default Summarization;