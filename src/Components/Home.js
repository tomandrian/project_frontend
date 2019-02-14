import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/img/main-slider1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/img/main-slider2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/img/main-slider3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/img/main-slider4.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

                <br></br>
                <br></br>
                <br></br>

                <div className="feature-section section mb-60">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 col-12 mb-30">
                                <div className="feature feature-shipping">
                                    <div className="feature-wrap">
                                        <div className="icon"><img src="assets/images/icons/feature-van.png" alt="Feature" /></div>
                                        <h4>FREE SHIPPING</h4>
                                        <p>Start from $100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mb-30">
                                <div className="feature feature-guarantee">
                                    <div className="feature-wrap">
                                        <div className="icon"><img src="assets/images/icons/feature-walet.png" alt="Feature" /></div>
                                        <h4>MONEY BACK GUARANTEE</h4>
                                        <p>Back within 15 days</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mb-30">
                                <div className="feature feature-security">
                                    <div className="feature-wrap">
                                        <div className="icon"><img src="assets/images/icons/feature-shield.png" alt="Feature" /></div>
                                        <h4>SECURE PAYMENTS</h4>
                                        <p>Payment Security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Home;