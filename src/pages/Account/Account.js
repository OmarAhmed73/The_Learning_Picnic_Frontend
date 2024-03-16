import React, { useState, useRef } from 'react'
import '../../pages/style/Profile.css'
import defaultPhoto from '../../assets/Profile_Photo.png'
import axios from 'axios'



const Account = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("")


  const handleImageClick = () => {
    inputRef.current.click();
   }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(e.target.files[0])
   }
    return (
      <div className="account-container bg-blue-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-black min-h-screen flex items-center justify-center">
    <div className=''>
            {image ? <img src={URL.createObjectURL(image)} className='img-display'/>  :  <img src={defaultPhoto} className='img-display'/>}
          <input type='file' name='file' ref={inputRef} onChange={handleImageChange} className='hidden' />
          <div>
             <button onClick={handleImageClick} type="button" className="text-white cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2 me-2 mb-2 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Edit Photo</button>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-4 py-2 me-2 mb-2 mt-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Upload</button>
          </div>
        </div>
        <div className="p-8 max-w-xl w-full h-auto xl:h-120">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">John Doe</h2>
            <p className="text-lg text-black">Software Engineer</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-black">First Name:</span>
              <span className='text-white font-semibold'>John</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-black">Last Name:</span>
              <span className='text-white font-semibold'>Doe</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-black">Email:</span>
              <span className='text-white font-semibold'>john.doe@example.com</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-black">Phone:</span>
              <span className='text-white font-semibold'>555-123-4567</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-black">ID:</span>
              <span className='text-white font-semibold'>12345</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black">Role:</span>
              <span className='text-white font-semibold'>Software Engineer</span>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Account

