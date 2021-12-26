import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function ReviewForm({ibool,addFeedback }) {

     const [text, setText] = useState('');
     const [isdisabled, setIsdisabled] = useState(true);
     const [message, setMessage ] = useState('');
     const [rating, setRating] = useState(10);
     const inputTextHandler = (e)=>{
         if(text === ''){
             setIsdisabled(true)
             setMessage(null)
         }else if(text !== '' && text.trim().length<=20){
             setIsdisabled(true)
             setMessage('Text must be at least 20 characters')
         }else{
             setIsdisabled(false);
             setMessage(false);
         }
         setText(e.target.value);
         
     }
     const formHandler = (e) =>{
         e.preventDefault();
         if(text.trim().length>20){
             const newFeedback ={
                 text,
                 rating
             }
             addFeedback(newFeedback);
             setText('');
         }
         
     }
    return (
        <div >
            <Card ibool={ibool}>
                <div className="card">
                    <form className="form-component" onSubmit={formHandler}>
                        <h2>How would you rate your service with us?</h2>
                        <RatingSelect select={(rating)=> setRating(rating)} />
                        <div className="input-group">
                            <input type="text"
                            onChange={inputTextHandler} 
                            placeholder="Write a review"
                            value={text} />
                            <Button isDisabled={isdisabled} type="submit">Send</Button>
                        </div>
                    </form>
                    {message && <div className="ps-msg">{message}</div>}
                </div>
            </Card>
        </div>
    )
}

export default ReviewForm
