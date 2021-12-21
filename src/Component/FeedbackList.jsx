import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback,ibool, handleDelete}) {
    
    return (
        <div className='feedback-list'>
           {feedback.map((item) => (
             <FeedbackItem key={item.id} handleDelete={handleDelete} ip={item.id} rating={item.rating} text={item.text} ibool={ibool} />
           ))}
        </div>
    )
}

export default FeedbackList
