import React, { forwardRef, useRef, useState } from 'react'
import {AnimateSharedLayout, motion} from 'framer-motion';

const DragDrop = () => {
     const ref0 = useRef(null);
     const ref1 = useRef(null);
     const ref2 = useRef(null);
     const ref3 = useRef(null);
     const [activeIndex,setActiveIndex] = useState(0)
     const [isDragging,setDragging] = useState(false)
     const cells = [ref0,ref1,ref2,ref3]
     const dragStart = ()=>{
          setDragging(true)
     }
     const getActiveCellIndex = ({point})=>{
          const cellIndex = cells.findIndex((cell) => {
               const {
                 offsetLeft,
                 offsetTop,
                 offsetWidth,
                 offsetHeight,
                 parentElement
               } = cell.current;
               console.log(cell)
               console.log(`id:${cell.current.id} point:${point.x}`)
               const leftEdge = parentElement.offsetLeft + offsetLeft;
               const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
               const topEdge = parentElement.offsetTop + offsetTop;
               const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;
         
               return (
                 point.x >= leftEdge &&
                 point.x <= rightEdge &&
                 point.y >= topEdge &&
                 point.y <= bottomEdge
               );
             });
             console.log(point)
          if (cellIndex<0) return activeIndex;
          return cellIndex;
     }
     const dragEnd = (_, info) => {
          console.log(info)
          setDragging(false);
          const newActiveIndex = getActiveCellIndex(info);
          setActiveIndex((prevActiveIndex) => {
            // Only update the activeIndex if the dragged item is not the same as the previously active one
            return prevActiveIndex !== newActiveIndex ? newActiveIndex : prevActiveIndex;
          });
     }
  return (
    <div className='grid grid-cols-2 gap-2 p-2 bg-slate-300'>
     
     {cells.map((cell,i)=>(
          <Cell index={i} key={`cell${i}`} activeIndex={activeIndex} isDragging={isDragging} onDragStart={dragStart} onDragEnd={dragEnd} ref={cell}/>
      ))}
    
      
    </div>
  )
}
const cellvarient={
     dragging:{
          border:'2px dashed #00Be95'
     },
     inactive:{
          border:'2px solid #fff'
     },
}
const draggableVarient = {
     dragging:{
          scale:0.5
     },
     inactive:{
          scale:1
     }
}
const Cell = forwardRef(({index,activeIndex,isDragging,onDragEnd,onDragStart},ref)=>{
     return(
          <motion.div className='bg-slate-400 h-[200px]' ref={ref} id={index} variants={cellvarient}
          animate={isDragging ? 'dragging':'inactive'}>

               {activeIndex === index && (
                    <motion.div
                    drag 
                    variants={draggableVarient}
                    animate={isDragging ? 'dragging' : 'inactive'}
                    dragElastic={1}
                    
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    className='bg-red-200 h-[150px] flex justify-center items-center'>
                       Drag me!
                    </motion.div>     
               )}
             
          </motion.div>
     )
})

export default DragDrop