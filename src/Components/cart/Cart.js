import React, { Component } from 'react'


export default class Cart extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="page-banner-section section">
                        <div className="page-banner-wrap row row-0 d-flex align-items-center ">


                            <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                                <div className="page-banner">
                                    <h1>Cart</h1>
                                    <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                    <div className="breadcrumb">
                                        <ul>
                                            <li><a href="+">HOME</a></li>
                                            <li><a href="+">Shop</a></li>
                                            <li><a href="+">Cart</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 col-12 order-lg-1">
                                <div className="banner"><a href="+"><img src="assets/images/banner/banner-15.jpg" alt="Banner" /></a></div>
                            </div>


                            <div className="col-lg-4 col-md-6 col-12 order-lg-3">
                                <div className="banner"><a href="+"><img src="assets/images/banner/banner-14.jpg" alt="Banner" /></a></div>
                            </div>

                        </div>
                    </div>


                    <div className="page-section section pt-90 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="#">

                                        <div className="cart-table table-responsive mb-40">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="pro-thumbnail">Image</th>
                                                        <th className="pro-title">Product</th>
                                                        <th className="pro-price">Price</th>
                                                        <th className="pro-quantity">Quantity</th>
                                                        <th className="pro-subtotal">Total</th>
                                                        <th className="pro-remove">Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="pro-thumbnail"><a href="+"><img src="assets/images/product/product-1.png" alt="Product" /></a></td>
                                                        <td className="pro-title"><a href="+">Zeon Zen 4 Pro</a></td>
                                                        <td className="pro-price"><span>$295.00</span></td>
                                                        <td className="pro-quantity"><div className="pro-qty"><input type="text" /></div></td>
                                                        <td className="pro-subtotal"><span>$295.00</span></td>
                                                        <td className="pro-remove"><a href="+"><i className="fa fa-trash-o"></i></a></td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>

                                    </form>

                                    <div className="row">

                                        <div className="col-lg-6 col-12 mb-15">



                                        </div>


                                        <div className="col-lg-6 col-12 mb-40 d-flex">
                                            <div className="cart-summary">
                                                <div className="cart-summary-wrap">
                                                    <h4>Cart Summary</h4>
                                                    <p>Sub Total <span>$1250.00</span></p>
                                                    <p>Shipping Cost <span>$00.00</span></p>
                                                    <h2>Grand Total <span>$1250.00</span></h2>
                                                </div>
                                                <div className="cart-summary-button">
                                                    <button className="checkout-btn">Checkout</button>
                                                    <button className="update-btn">Update Cart</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="banner-section section mb-90">
                    <div className="container">
                        <div className="row">


                            <div className="col-12">
                                <div className="banner"><a href="+"><img src="assets/images/banner/banner-10.jpg" alt="Banner" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
