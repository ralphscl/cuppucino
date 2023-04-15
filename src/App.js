// Package
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import BlogList from './pages/blog/BlogList';
import BlogPage from './pages/blog/BlogPage';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        {/* Navigation */}
        {/* <Navbar/> */}

        {/* Body */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<BlogList/>} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        {/* Footer */}
        <Footer/>
      </>
    </div>
  );
}

export default App;
