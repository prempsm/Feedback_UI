
import './App.css';
import Header from './Component/Header';
import FeedbackList from './Component/FeedbackList';
import Feedbackdata from './data/Feedbackdata';
import { useState } from 'react';
import FeedbackStats from './Component/FeedbackStats';
import ReviewForm from './Component/ReviewForm';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import AbouticonLink from './Component/AbouticonLink';

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
  const handleAdd = (newObj) =>{
    newObj.id= uuidv4()
    setFeedback([newObj, ...feedback])
  }
  return (
    <div className="App">
      
      <Header changeColor={changeMyColor}  />
      <Router>
      <Routes>
      <Route 
      exact
      path="/"
      element={
        <>
        <ReviewForm ibool={ibool} addFeedback={handleAdd} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} ibool={ibool} handleDelete={handleDelete} />
        <AbouticonLink  />
        </>
      }
      ></Route>  
      <Route path='/about' element={<About ibool={ibool} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
