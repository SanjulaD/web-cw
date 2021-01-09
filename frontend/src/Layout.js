import React from 'react'
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
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import AdminProfileScreen from './screens/Dashboard/ProfileScreen';
import Farmer_ProductSeed from './screens/Farmer_ProductSeed/Farmer_ProductSeedScreen';
import SeedProductScreen from './screens/Product_Seed/SeedProductScreen';
import Farmer_LendScreen from './screens/Farmer_LendMachine/Farmer_LendScreen';
import LendMachineProduct from './screens/Product_LendMachine/LendMachineProduct';
import PaymentMethodScreen from './screens/Payment/PaymentMethodScreen'
import ConsumerProductDetailScreen from './screens/Product_Consumer/ConsumerProductDetailScreen'
import ShippingScreen from './screens/Shipping/ShippingScreen';
import OrderScreen from './screens/Order/OrderScreen';
import Cart from './screens/Cart/Cart';
import UserListScreen from './screens/Dashboard/UserListScreen';
import UserEditScreen from './screens/UserEdit/UserEditScreen';
import ProductListScreen from './screens/Dashboard/ProductListScreen'
import SeedListEdit from './screens/ProductListEdit/SeedListEdit/SeedListEdit'
import MachineListEdit from './screens/ProductListEdit/MachineListEdit/MachineListEdit'
import ConsumerListEdit from './screens/ProductListEdit/ConsumerListEdit/ConsumerListEdit'
import SupplierProductEdit from './components/SupplierProductEdit/SupplierProductEdit'
import OrderListScreen from './screens/Dashboard/OrderListScreen'
import HarvestScreen from './screens/Dashboard/HarvestScreen';
import FarmerProduct from './screens/FarmerProducts/FarmerProducts';
import MapScreen from './screens/Dashboard/MapScreen';

const Layout = () => {
    return (
        <>
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
                    <Route exact path="/cart/:id?" component={Cart} />
                    <Route path="/order/:id" component={OrderScreen} />

                    <Route exact path="/admin/userList" component={UserListScreen} />
                    <Route exact path="/admin/dashboard" component={DashboardScreen} />
                    <Route exact path="/admin/profile" component={AdminProfileScreen} />
                    <Route exact path="/admin/productlist" component={ProductListScreen} />
                    <Route exact path="/admin/orderlist" component={OrderListScreen} />
                    <Route exact path="/admin/supplierproducts" component={HarvestScreen} />
                    <Route exact path="/admin/map" component={MapScreen} />
                    <Route exact path="/admin/productlist/seed/:id/edit" component={SeedListEdit} />
                    <Route exact path="/admin/productlist/machine/:id/edit" component={MachineListEdit} />
                    <Route exact path="/admin/productlist/consumer/:id/edit" component={ConsumerListEdit} />
                    <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
                    <Route exact path="/supplierproducts/:id/review" component={FarmerProduct} />
                    <Route exact path="/supplierproducts/:id/edit" component={SupplierProductEdit} />

                    <Route exact path="/farmers/purchaseSeeds" component={Farmer_ProductSeed} />
                    <Route exact path="/farmers/purchaseSeeds/:id" component={SeedProductScreen} />
                    <Route exact path="/farmers/lendMachines" component={Farmer_LendScreen} />
                    <Route exact path="/farmers/lendMachines/:id" component={LendMachineProduct} />
                    <Route exact path="/consumer/:id" component={ConsumerProductDetailScreen} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Layout
