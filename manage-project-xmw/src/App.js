import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
// import { Button } from 'antd';
import Login from '@/pages/login';
// import Show from './pages/show';
import Show from '@/pages/show';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <Button type="primary">Primary Button</Button> */}
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/show' element={<Show></Show>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
