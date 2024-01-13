import { useState } from 'react'

import Slider from './components/Slider'
import {motion} from 'framer-motion'
import Notification from './components/Notification'
function App() {


  return (
   <div className='bg-primary'>
      <motion.h1 className="text-3xl text-center font-bold bg-secondery" initial={{opacity:0}} animate={{opacity:1}} whileHover={{opacity:0}} transition={{duration:0.5,delay:1}}>
        My projects Portfolio
      </motion.h1>
      <Slider/>
      <h1 className='uppercase fond-bold text-xl hover:group-first bg-amber-200 px-4 py-2 shadow-sm mx-4 mt-4'>staggerChildren Props in Notification icon</h1>
      <Notification/>
   </div>
   
   
  )
}

export default App
