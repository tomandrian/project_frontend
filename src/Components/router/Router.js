import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home'
import Shop from '../shop/Shop'
import Product from '../product/Product'
// import Login from '../login/Login'
import Regist from '../register/Regist'
// import ShopDetail from '../ShopDetail/Shopdetail'
import Cart from '../cart/Cart'
export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/product' component={Product} />
                <Route exact path='/register' component={Regist} />
                {/* <Route exact path='/shopdetail' component={ShopDetail} /> */}
                <Route exact path='/cart' component={Cart} />
            </React.Fragment>
        )
    }
}
