
import './App.css';
import Navbar from "./navbar"
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  let component; 
  if (window.location.pathname === "/") {
    component =  <h1>This is the Home</h1>
  }
  else if (window.location.pathname === "/about") {
    component =  <About />
  }
  else if (window.location.pathname === "/contact") {
    component =  <Contact />
  }

  return (
    <>
    <Navbar />
    <div className="container">
      {component}
    </div>
    </>)
}

export default App;
