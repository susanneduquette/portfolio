import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Fafsa from './views/FAFSA/FAFSA';
import Foodisle from './views/Foodisle/Foodisle';
import Home from './views/Home/Home';
import Pantheon from './views/Pantheon/Pantheon';
import Starlies from './views/Starlies/Starlies';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <ScrollToTop>
          <div>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/pantheon" component={Pantheon}/>
              <Route path="/starlies" component={Starlies}/>
              <Route path="/fafsa" component={Fafsa}/>
              <Route path="/foodisle" component={Foodisle}/>
            <Route component={Error}/>
            </Switch>
          </div> 
        </ScrollToTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
