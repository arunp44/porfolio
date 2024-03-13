import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Experience from './components/experience/Experience.jsx';
import Nav from './components/nav/Nav.jsx';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <Nav />
        <div className="container">
          <Router>
            <Routes>
              <Route path = "/" element = {<Experience/>}> </Route>
              <Route path = "/about" element = {<About/>}> </Route>
              <Route path = "/contacts" element = {<Contacts/>}> </Route>
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
