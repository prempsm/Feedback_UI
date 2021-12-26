import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({feedback,ibool, handleDelete}) {
    
    return (
        <div className='feedback-list'>
           <AnimatePresence>
           {feedback.map((item) => (
             <motion.div
              key={item.id}
              initial={{ opacity:0}}
              animate={{ opacity:1}}
              exit={{ opacity:0}}
             >
             <FeedbackItem key={item.id} handleDelete={handleDelete} ip={item.id} rating={item.rating} text={item.text} ibool={ibool} />
             </motion.div>
           ))}
           </AnimatePresence>
        </div>
    )
}

export default FeedbackList
