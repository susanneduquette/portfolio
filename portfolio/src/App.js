import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SuzieHome from './components/SuzieHome/SuzieHome';


function App() {
  return (
    <div className="App">
      {/* <h3 className="suzie-header">Hey, I'm Suzie</h3>
      <h1 className="designer-header">UI/UX Designer</h1> */}
        <Header />
        <SuzieHome>Hey, I'm Suzie</SuzieHome>
        <Footer />
    </div>
  );
}

export default App;
