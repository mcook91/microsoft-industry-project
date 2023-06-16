import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
