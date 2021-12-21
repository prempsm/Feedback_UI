
import './App.css';
import Header from './Component/Header';
import FeedbackList from './Component/FeedbackList';
import Feedbackdata from './data/Feedbackdata';
import { useState } from 'react';
import FeedbackStats from './Component/FeedbackStats';
import ReviewForm from './Component/ReviewForm';

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);
  const [ibool, setIbool] = useState(true);
  const changeMyColor = () =>{
    setIbool((preval)=>{
      if(preval){
        return false;
      }else{
        return true;
      }
    })
  }

  const handleDelete = (id) =>{
    setFeedback(feedback.filter((item)=> item.id!== id))
  }
  return (
    <div className="App">
      <Header changeColor={changeMyColor}  />
      <ReviewForm ibool={ibool} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} ibool={ibool} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
