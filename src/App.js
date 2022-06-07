
import './App.css';
import Home from './components/Home.js';
import Login from './components/Login';
import NotFound from './components/NotFound';
import {createBrowserHistory} from 'history';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export const customHistory = createBrowserHistory();  //This maintains custom history


export default function App() {
  return (
    <Router history={customHistory}> 
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/> 
        <Route path="*" element={<NotFound/>}/>
      </Routes> 
  </Router>
 
  );
}

