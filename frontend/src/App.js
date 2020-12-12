import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import HomeScreen from './screens/Home/HomeScreen';
import Consumer from './screens/Consumer/ConsumerScreen';
import Farmer from './screens/Farmer/FarmerScreen';
import Supplier from './screens/Supplier/SupplierScreen';
import Farmer_ProductSeed from './screens/Farmer_ProductSeed/Farmer_ProductSeedScreen';
import SeedProductScreen from './screens/Product/SeedProductScreen';

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
          <Route exact path="/farmers/purchaseSeeds" component={Farmer_ProductSeed} />
          <Route exact path="/farmers/purchaseSeeds/:id" component={SeedProductScreen} /> 
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
