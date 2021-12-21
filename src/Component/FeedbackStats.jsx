import React from 'react'

function FeedbackStats({feedback}) {
    let average = feedback.reduce((acc, cur) => {
        return acc = acc + cur.rating;
    },0)/feedback.length;
    average = average.toFixed(1);
    return (
        <div className='feed-back-stats'>
           <div className="feedbackstats-left">
              <h2 className="stats-h2">Total Feedback: {feedback.length}</h2>
           </div>
           <div className="feedbackstats-right">
           <h2 className="stats-h2">Rating: {isNaN(average) ? 0 : average}</h2>
           </div>
        </div>
    )
}

export default FeedbackStats
