import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
