import { AnimatePresence,motion} from 'framer-motion';
import {slideImage} from '../constants'
import React, { useState } from 'react';
import { wrap } from 'framer-motion';

const  variants = {
  enter:(direction)=>({
    x:direction>0 ? 1000:-1000,
    opacity:0
  }),
  center:{
    zIndex:1,
    x:0,
    opacity:1
  },
  exit:(direction)=>({
    zIndex:0,
    x:direction <0 ? 1000: -1000,
    opacity:0
  }),
}

const Slider = () => {
  const [[page,direction],setPage] = useState([0,0]);
  console.log(`page:${page}`)
  console.log(`direction:${direction}`)
  const paginate = (dir)=>{
       setPage([page+dir,dir])
  }

  const imageId = wrap (0,slideImage.length,page)
  console.log(imageId)
  return (
    <section className='bg-slate-200 mt-4 shadow-sm mx-4 rounded-sm'>
      <div className='w-full mx-auto p-5 shadow-md bg-slate-300 rounded-sm'>
        <h2 className='text-xl font-semibold'>Slider Show</h2>
        <p>This feature implemented from framer-motion library</p>
      </div>
      <div className='relative my-2 mx-auto md:w-[600px] sm:w-[400px] h-[40vh] shadow-md rounded-xl bg-black'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img key={page} src={slideImage[imageId]} custom={direction} variants={variants}
          transition={{x:{type:'spring',stiffness:300,damping:30},opacity:{duration:0.2}}} initial='enter' animate='center' exit='exit' className='absolute object-cover object-center w-full h-full'/>
        </AnimatePresence>
        <div className='circle top-[50%] left-2 cursor-pointer z-10' onClick={()=>paginate(1)}>P
          <div className='w-2 h-2 border-x-4 border-red-500 border-y-4 border-y-white bg-white absolute -left-1'/>
        </div>
        <div className='circle top-[50%] cursor-pointer right-2 z-10' onClick={()=>paginate(-1)}>N
          <div className='w-2 h-2 bg-white absolute -right-1'/>
        </div>
    </div>
   
    </section>
  )
}

export default Slider