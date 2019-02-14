import React, { Component } from 'react'


export default class Product extends Component {
    render() {
        return (
            <div>
                <div class="page-banner-section section">
                    <div class="page-banner-wrap row row-0 d-flex align-items-center ">


                        <div class="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div class="page-banner">
                                <h1>Product Details</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div class="breadcrumb">
                                    <ul>
                                        <li><a href="+">HOME</a></li>
                                        <li><a href="+">Product Details</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Banner --> */}
                        <div class="col-lg-4 col-md-6 col-12 order-lg-1">
                            <div class="banner"><a href="+"><img src="assets/images/banner/banner-15.jpg" alt="Banner" /></a></div>
                        </div>

                        {/* <!-- Banner --> */}
                        <div class="col-lg-4 col-md-6 col-12 order-lg-3">
                            <div class="banner"><a href="+"><img src="assets/images/banner/banner-14.jpg" alt="Banner" /></a></div>
                        </div>

                    </div>
                </div>


                <div class="product-section section mt-90 mb-90">
                    <div class="container">

                        <div class="row mb-90">

                            <div class="col-lg-6 col-12 mb-50">

                                {/* <!-- Image --> */}
                                <div class="single-product-image thumb-right">

                                    <div class="tab-content">
                                        <div id="single-image-1" class="tab-pane fade show active big-image-slider">
                                            <div class="big-image"><img src="assets/images/single-product/big-1.png" alt="gbr" /><a href="assets/images/single-product/big-1.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                            <div class="big-image"><img src="assets/images/single-product/big-2.png" alt="gbr" /><a href="assets/images/single-product/big-2.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                            <div class="big-image"><img src="assets/images/single-product/big-3.png" alt="gbr" /><a href="assets/images/single-product/big-3.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                        </div>
                                        <div id="single-image-2" class="tab-pane fade big-image-slider">
                                            <div class="big-image"><img src="assets/images/single-product/big-7.png" alt="gbr" /><a href="assets/images/single-product/big-7.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                            <div class="big-image"><img src="assets/images/single-product/big-8.png" alt="gbr" /><a href="assets/images/single-product/big-9.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                            <div class="big-image"><img src="assets/images/single-product/big-9.png" alt="gbr" /><a href="assets/images/single-product/big-9.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                        </div>
                                        <div id="single-image-3" class="tab-pane fade big-image-slider">
                                            <div class="big-image"><img src="assets/images/single-product/big-13.png" alt="gbr" /><a href="assets/images/single-product/big-13.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                            <div class="big-image"><img src="assets/images/single-product/big-14.png" alt="gbr" /><a href="assets/images/single-product/big-14.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                            <div class="big-image"><img src="assets/images/single-product/big-15.png" alt="gbr" /><a href="assets/images/single-product/big-15.png" class="big-image-popup"><i class="fa fa-search-plus"></i></a></div>
                                        </div>
                                    </div>

                                    <div class="thumb-image-slider nav" data-vertical="true">
                                        <a class="thumb-image active" data-toggle="tab" href="#single-image-1"><img src="assets/images/single-product/thumb-1.png" alt="img" /></a>
                                        <a class="thumb-image" data-toggle="tab" href="#single-image-2"><img src="assets/images/single-product/thumb-2.png" alt="img" /></a>
                                        <a class="thumb-image" data-toggle="tab" href="#single-image-3"><img src="assets/images/single-product/thumb-3.png" alt="img" /></a>
                                    </div>

                                </div>

                            </div>

                            <div class="col-lg-6 col-12 mb-50">

                                {/* <!-- Content --> */}
                                <div class="single-product-content">

                                    {/* <!-- Category & Title --> */}
                                    <div class="head-content">

                                        <div class="category-title">
                                            <a href="+" class="cat">Smartphone</a>
                                            <h5 class="title">Flex 3310</h5>
                                        </div>

                                        <h5 class="price">$295.00</h5>

                                    </div>

                                    <div class="single-product-description">

                                        <div class="ratting">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>

                                        <div class="desc">
                                            <p>enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inform </p>
                                        </div>

                                        <span class="availability">Availability: <span>In Stock</span></span>

                                        <div class="quantity-colors">

                                            <div class="quantity">
                                                <h5>Quantity</h5>
                                                <div class="pro-qty"><input type="text" value="1" /></div>
                                            </div>

                                            <div class="colors">
                                                <h5>Color</h5>
                                                <select class="nice-select">
                                                    <option>red</option>
                                                    <option>black</option>
                                                    <option>yellow</option>
                                                    <option>grey</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div class="actions">

                                            <a href="+" class="add-to-cart"><i class="ti-shopping-cart"></i><span>ADD TO CART</span></a>

                                            <div class="wishlist-compare">
                                                <a href="+" data-tooltip="Compare"><i class="ti-control-shuffle"></i></a>
                                                <a href="+" data-tooltip="Wishlist"><i class="ti-heart"></i></a>
                                            </div>

                                        </div>

                                        <div class="tags">

                                            <h5>Tags:</h5>
                                            <a href="+">Electronic</a>
                                            <a href="+">Smartphone</a>
                                            <a href="+">Phone</a>
                                            <a href="+">Charger</a>
                                            <a href="+">Powerbank</a>

                                        </div>

                                        <div class="share">

                                            <h5>Share: </h5>
                                            <a href="+"><i class="fa fa-facebook"></i></a>
                                            <a href="+"><i class="fa fa-twitter"></i></a>
                                            <a href="+"><i class="fa fa-instagram"></i></a>
                                            <a href="+"><i class="fa fa-google-plus"></i></a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}