import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import PrivacySettings from './components/PrivacySettings/PrivacySettings'
import PrivacyPage from './Pages/PrivacyPage/PrivacyPage'
import PrivacyDashboard from './Pages/PrivacyDashboard/PrivacyDashboard'
import Hero from './components/Hero/Hero';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<PrivacyPage/>}/>
        <Route path="/dashboard" element={<PrivacyDashboard />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
