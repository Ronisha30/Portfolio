import './App.css';
import Navbar from './Components/Navbar/Nb';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Profile from './Components/Portfolio/Portfolio';
import Projects from './Components/Portfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
 
  return (
    <div className='App'>
   <BrowserRouter>
    <Navbar links ={['Home', 'About Me', 'Portfolio', 'Contact Me']}/>
    <Route exact path = '/'>
      <Home/>
    </Route>
    <Route exact path = "/about">
      <About/>
    </Route>
    <Route exact path = "/profile">
      <Profile/>
    </Route>
    <Route exact path = "/projects">
      <Projects/>
    </Route>
    <Route exact path = "/portfolio">
      <Portfolio/>
    </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
