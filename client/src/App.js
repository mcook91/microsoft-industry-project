import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import PrivacySettings from './components/PrivacySettings/PrivacySettings'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <PrivacySettings />
      <Routes>
        <Route path="/"  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
