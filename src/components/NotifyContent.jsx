import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const variants = {
     initial:{opacity:0},
     animate:{opacity:1,transition:{staggerChildren:0.15}},
     exit:{
          x:"-12rem",
          opacity:0,
          transition:{
               staggerChildren:0.15,
               straggerDirection:-1,
               when:"afterChildren"
          }
     }
}
  

const NotifyContent = ({notifyContent,handleDeleteNotification}) => {
  return (
    <motion.div variants={variants} initial="initial" animate='animate' className='absolute w-[24rem] top-[4.5rem] right-2 bg-yellow-100 text-sm leading-5 rounded-md z-30'>
     <ul className='list-none m-0 p-0'>
          <AnimatePresence>
          {notifyContent.map((content,index)=>(
               <motion.li key={index} variants={variants} i exit={{x:'12rem',opacity:0}} transition={{duration:0.1}}  className='px-8 py-4 flex justify-between items-center hover:bg-yellow-300'>
                    <span>{content}</span>
                    <span className='block w-6 h-6 cursor-pointer' onClick={()=>handleDeleteNotification(content)}>
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-full h-full"
                  title="Clear notification"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                    </span>
               </motion.li>
          ))}
          </AnimatePresence>
          
     </ul>
    </motion.div>
  )
}

export default NotifyContent