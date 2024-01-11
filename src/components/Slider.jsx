import { AnimatePresence,motion} from 'framer-motion';
import {slideImage} from '../constants'
import React, { useState } from 'react';
import { wrap } from 'framer-motion';

const Slider = () => {
  const [[page,direction],setPage] = useState([0,0]);

  const paginate = (dir)=>{
       setPage([page+dir,dir])
  }
  return (
    <>
    <div className='w-full mx-auto p-5'>
      <h2 className='text-xl font-semibold'>Slider Show</h2>
      <p>This feature implemented from framer-motion library</p>
    </div>
    <div className='relative border-8 mx:auto border-red-500 sm:w-[50%] h-[50%]'>
    <AnimatePresence initial={false} custom={direction}>
      <motion.img key={page} src={slideImage[page]} className=' object-contain'>
      </motion.img>
      <div className='circle top-[50%] left-2 cursor-pointer' onClick={()=>paginate(-1)}>P
        <div className='w-2 h-2 bg-white absolute -left-1'/>
      </div>
      <div className='circle top-[50%] right-2' onClick={()=>paginate(1)}>N
        <div className='w-2 h-2 bg-white absolute -right-1'/>
      </div>
    </AnimatePresence>
    </div>
   
    </>
  )
}

export default Slider