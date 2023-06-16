import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import PrivacySettings from './components/PrivacySettings/PrivacySettings'
import EventInfo from './components/EventInfo/EventInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <PrivacySettings />
      <Routes>
        <Route path="/edit" element={<EventInfo />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
