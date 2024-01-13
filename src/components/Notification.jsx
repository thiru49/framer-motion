import React, { useState } from 'react'
import { initialNotifications } from '../constants';
import NotifyContent from './NotifyContent';
import { motion,AnimatePresence } from 'framer-motion';


const Notification = () => {
     const [shownotify,setShowNotify] = useState(false);
     const [notifyContent,setNotifyContent] = useState(initialNotifications);

     const handleDeleteNotification = (content)=>{
          setNotifyContent(notifyContent.filter(item => item !== content))
     }
  return (
    <div className='mt-3 min-h-80 text-[#111827] px-4'>
        <header className='h-[4rem]  bg-lime-200 text-xs bottom-1 border-solid border-[#e5e7eb] flex items-center px-8 relative'>
           <div className='w-[50%] text-xl '>
           Animating a bell icon
           </div>
           <ul className='w-[50%] flex justify-end items-center relative gap-4'>
               <li className='h-[2rem] w-[2rem] cursor-pointer' onClick={()=>(setShowNotify(!shownotify))}>
               <motion.svg whileHover={{ rotateZ:[0,-20,20,-20,20,-20,20,0],transition:{duration:0.5}}
               }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
               </motion.svg>      
               </li>
               <li className='h-10 w-10 rounded-full flex items-center justify-center bg-lime-600 text-white'>
                    ---
               </li>
           </ul>
           {
               shownotify && (
                    <NotifyContent notifyContent={notifyContent} handleDeleteNotification={handleDeleteNotification}/>
               )
           }
        </header>
    </div>
  )
}

export default Notification