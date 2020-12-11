import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import HomeScreen from './screens/Home/HomeScreen';
import Farmer from './screens/Farmer/FarmerScreen';
import Consumer from './screens/Consumer/ConsumerScreen';
import Supplier from './screens/Supplier/SupplierScreen';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/farmer" component={Farmer} />
          <Route exact path="/consumer" component={Consumer} />
          <Route exact path="/supplier" component={Supplier} />
          <Route exact path="/farmers/sellMeterial" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
