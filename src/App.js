import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* This is Accordian Component */}
      {/* <Accordian /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}


      {/* Star Rating Component */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
