import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button";
function ReviewForm({ibool}) {

     const [text, setText] = useState('');
     const inputTextHandler = (e)=>{
         setText(e.target.value);
     }
    return (
        <div >
            <Card ibool={ibool}>
                <div className="card">
                    <form className="form-component">
                        <h2>How would you rate your service with us?</h2>
                        <div className="input-group">
                            <input type="text"
                            onChange={inputTextHandler} 
                            placeholder="Write a review"
                            value={text} />
                            <Button type="submit">Send</Button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default ReviewForm
