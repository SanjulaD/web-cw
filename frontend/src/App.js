import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginComponent from './components/Login/LoginComponent';
import Register from './components/Register/Register';
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx'

import HomeScreen from './screens/Home/HomeScreen';
import Consumer from './screens/Consumer/ConsumerScreen';
import Farmer from './screens/Farmer/FarmerScreen';
import Supplier from './screens/Supplier/SupplierScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import Farmer_ProductSeed from './screens/Farmer_ProductSeed/Farmer_ProductSeedScreen';
import SeedProductScreen from './screens/Product_Seed/SeedProductScreen';
import Farmer_LendScreen from './screens/Farmer_LendMachine/Farmer_LendScreen';
import LendMachineProduct from './screens/Product_LendMachine/LendMachineProduct';
import PaymentMethodScreen from './screens/Payment/PaymentMethodScreen'
import ConsumerProductDetailScreen from './screens/Product_Consumer/ConsumerProductDetailScreen'
import ShippingScreen from './screens/Shipping/ShippingScreen';
import Cart from './screens/Cart/Cart';

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
          <Route exact path="/farmers/sellMeterial" component={LoginComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/shipping" component={ShippingScreen} />
          <Route exact path="/payment" component={PaymentMethodScreen} />
          <Route exact path="/placeorder" component={PlaceOrder} />
          <Route path="/cart/:id?" component={Cart} />
          <Route exact path="/farmers/purchaseSeeds" component={Farmer_ProductSeed} />
          <Route exact path="/farmers/purchaseSeeds/:id" component={SeedProductScreen} /> 
          <Route exact path="/farmers/lendMachines" component={Farmer_LendScreen} />
          <Route exact path="/farmers/lendMachines/:id" component={LendMachineProduct} />
          <Route exact path="/consumer/:id" component={ConsumerProductDetailScreen} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
