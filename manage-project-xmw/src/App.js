import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './pages/login';
import Show from './pages/show';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/show' element={<Show></Show>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
