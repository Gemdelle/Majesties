import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import RiddlesPage from './pages/RiddlesPage';
import DressupPage from './pages/DressupPage';
import HeavenorhellPage from './pages/HeavenorhellPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/riddlespage' element={<RiddlesPage/>}></Route>
            <Route path='/dressuppage' element={<DressupPage/>}></Route>
            <Route path='/heavenorhellpage' element={<HeavenorhellPage/>}></Route>
            <Route path='/contactpage' element={<ContactPage/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
