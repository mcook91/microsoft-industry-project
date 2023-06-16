import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import PrivacySettings from './components/PrivacySettings/PrivacySettings'
import MicrosoftNav from './components/MicrosoftNav/MicrosoftNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MicrosoftNav />
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
