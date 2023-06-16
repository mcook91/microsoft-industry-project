import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import PrivacySettings from './components/PrivacySettings/PrivacySettings'

import Hero from './components/Hero/Hero';
import './App.scss';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <PrivacySettings />
      <Routes>
        <Route path="/"  element={<Hero/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
