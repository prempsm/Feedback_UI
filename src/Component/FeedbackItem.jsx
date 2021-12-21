import React from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({ip, rating, text, ibool, handleDelete}) {
    
  
    return (
        <Card ibool={ibool}>
           <div className='card'>
            <div className="num-display">{rating}</div>
            <button className="close-icon" onClick={()=> handleDelete(ip)} ><FaTimes color="purple" /></button>
            <div className="text-display">{text}</div>
           </div>
        </Card>
    )
}

export default FeedbackItem
