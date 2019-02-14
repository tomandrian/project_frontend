import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            // <!-- Footer Section Start -->
            <div className="footer-section section bg-ivory">

                {/* <!-- Footer Top Section Start --> */}
                <div className="footer-top-section section pt-90 pb-50">
                    <div className="container">

                        <div className="row">

                            {/* <!-- Footer Widget Start --> */}
                            <div className="col-lg-3 col-md-6 col-12 mb-40">
                                <div className="footer-widget">

                                    <h4 className="widget-title">CONTACT INFO</h4>

                                    <p className="contact-info">
                                        <span>Address</span>
                                        Apt Green Pramuka 28/KH  <br />
                                        Jl. Jend. A. Yani Kav.49  <br />
                                        Rawasari Cempaka Putih  <br />
                                        Jakarta Pusat -DKI Jakarta  <br />
                                        INDONESIA

                                </p>

                                    <p className="contact-info">
                                        <span>Phone</span>
                                        <a href="tel:01234567890">+62 8128 2099 681</a>
                                        <a href="tel:01234567891">021 7171010</a>
                                    </p>

                                    <p className="contact-info">
                                        <span>Web</span>
                                        <a href="mailto:tomapple58@gmail.com">tomapple58@gmail.com</a>
                                        <a href="+">www.tomvapestore.com</a>
                                    </p>

                                </div>
                            </div>
                            {/* <!-- Footer Widget End --> */}

                            {/* <!-- Footer Widget Start --> */}
                            <div className="col-lg-3 col-md-6 col-12 mb-40">
                                <div className="footer-widget">

                                    <h4 className="widget-title">CUSTOMER CARE</h4>

                                    <ul className="link-widget">
                                        <li><a href="+">About us</a></li>
                                        <li><a href="+">Features</a></li>
                                        <li><a href="+">My Account</a></li>
                                        <li><a href="+">Cart</a></li>
                                        <li><a href="+">Checkout</a></li>
                                        <li><a href="+">Wishlist</a></li>
                                        <li><a href="+">blog</a></li>
                                        <li><a href="+">Contact</a></li>
                                    </ul>

                                </div>
                            </div>
                            {/* <!-- Footer Widget End --> */}

                            {/* <!-- Footer Widget Start --> */}
                            <div className="col-lg-3 col-md-6 col-12 mb-40">
                                <div className="footer-widget">

                                    <h4 className="widget-title">INFORMATION</h4>

                                    <ul className="link-widget">
                                        <li><a href="+">Track your order</a></li>
                                        <li><a href="+">Locate Store</a></li>
                                        <li><a href="+">Online Support</a></li>
                                        <li><a href="+">Terms & Conditions</a></li>
                                        <li><a href="+">Payment</a></li>
                                        <li><a href="+">Shipping & Returns</a></li>
                                        <li><a href="+">Gift coupon</a></li>
                                        <li><a href="+">Special coupon</a></li>
                                    </ul>

                                </div>
                            </div>
                            {/* <!-- Footer Widget End --> */}
                            <div>
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" /><span className="input-group-append">
                                            <button type="button" className="btn btn-outline-secondary">Subscribe!</button></span>
                                    </div>
                                </form>

                                <hr />
                                <h4 className="mb-3">Stay in touch</h4>
                                <p className="social">
                                    <a href="https://www.facebook.com/tom.c.andrian" className="facebook external"><i className="fab fa-facebook-square"></i></a>
                                    <a href="https://twitter.com/tomandrian58" className="twitter external"><i className="fab fa-twitter-square"></i></a>
                                    <a href="https://www.instagram.com/tomandrian58/?hl=id" className="instagram external"> <i className="fab fa-instagram"></i></a><a href="mailto" className="email external">
                                        <i className="far fa-envelope"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer;