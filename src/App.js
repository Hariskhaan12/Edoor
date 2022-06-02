import "./App.css";
import FrontEnd from './Container/FrontEnd/FrontEnd'
import {Routes,Route} from 'react-router-dom'
import SignUp from './Component/Auth/Auth'
import Home from "./Container/Home/Home";
import Question from "./Container/Question/Question";


function App() {
  return <div className="App">
    <Routes>
      <Route path='/' element={<FrontEnd/>}></Route>
      <Route path='/Auth' element={<SignUp/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Question' element={<Question/>}></Route>
    </Routes>
    
  </div>;
}

export default App;
