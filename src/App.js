import logo from './logo.svg';
import './App.css';
import Event from './component/Event';
import Blog from './component/Blog';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Header from './component/Header';
import ScrollArea from 'react-scrollbar';
import Image from './component/Image';

function App() {
  return (
    <div className="App">
      <div className='banner'>
        <br/>
        <div className='a'>
          <Image/>
        </div>

      </div>
      <br/>
      <br/>
      <br/>
      
      <div className='we'>
        <Router>
          <Header/>
          <div className='as'>
            <ScrollArea speed={0.8}  >
              <Routes>
                <Route exact path='/' element={<Event/>}/>
                <Route path='/blog' element={<Blog/>}/>
              </Routes>

            </ScrollArea>
            
          </div>
        </Router>
      </div>
      <br/>
    </div>
  );
}

export default App;
