import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Navbar from './Navbar';


function App() {
  //React Router-Dom
  //ReactDom- Links.
  return (
    <Router>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
    
    </Router>
  );
}

export default App;
