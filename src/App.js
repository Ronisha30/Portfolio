import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter/Counter';
let counter = 0;
function App() {
  console.log('did this happens');
  counter++;
  return (
    <div className='App'>
    <Navbar links ={['Home', 'Anout Me', 'Portfolio', 'Contact Me']}/>
    // <AboutMe/>
    // <Portfolio/>
    <Counter text='Here is the count captain:'/>
    {console.log('hello world', counter)}
    <h2> Welcome to my portfolio</h2>
    </div>
  );
}

export default App;
