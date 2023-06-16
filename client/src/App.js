import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import './App.scss';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Hero/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
