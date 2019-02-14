import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Shop extends Component {
    constructor() {
        super()
        this.state = {
            produk: []
        }
    }
    componentDidMount() {
        var url = 'http://localhost:8000/products'
        axios.get(url)
            .then((x) => {
                this.setState({
                    produk: x.data
                })
                console.log(this.state.produk)
            })
    }


    render() {

        var hasil = this.state.produk.map((val, i) => {
            var nama = val.nama
            var harga = val.harga
            var gambar = val.gambar
            var deskripsi = val.deskripsi
            var kategori = val.kategori
            return (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 pb-30 pt-10" >

                    {/* Product Start */}
                    <div className="ee-product">

                        {/* Image */}
                        <div className="image">

                            <Link to="/shopdetail" className="img"><img src={`./assets/img/${gambar}`}
                                alt="Product" /></Link>

                            <div className="wishlist-compare">
                                <a href="#a" data-tooltip="Compare"><i className="ti-control-shuffle"></i></a>
                                <a href="#a" data-tooltip="Wishlist"><i className="ti-heart"></i></a>
                            </div>

                            <a href="#a" className="add-to-cart"><i className="ti-shopping-cart"></i><span>Buy</span></a>

                        </div>

                        {/* Content */}
                        <div className="content">

                            {/* Category & Title */}
                            <div className="category-title">

                                <a href="#a" className="cat">{kategori}</a>
                                <h5 className="title"><Link to="/shopdetail">{nama}</Link></h5>

                            </div>

                            {/* Price & Ratting */}
                            <div className="price-ratting">

                                <h5 className="price">Rp.{harga}</h5>
                                <div className="ratting">
                                    <h5>{deskripsi}</h5>

                                </div>

                            </div>

                        </div>

                    </div>{/* Product End */}

                    {/* Product List Start */}

                </div>

            )
        })
        return (
            <div className="product-section section mt-90 mb-90">
                <div className="container">
                    <div className="row">

                        <div className="col-12">

                            <div className="row mb-50">
                                <div className="col">

                                    {/* Shop Top Bar Start */}
                                    <div className="shop-top-bar">

                                        {/* Product View Mode */}
                                        <div className="product-view-mode">
                                            <a className="active" href="#a" data-target="grid"><i className="fa fa-th"></i></a>
                                            <a href="#a" data-target="list"><i className="fa fa-list"></i></a>
                                        </div>

                                        {/* Product Showing */}
                                        <div className="product-showing">
                                            <p>Showing</p>
                                            <select name="showing" className="nice-select">
                                                <option value="1">8</option>
                                                <option value="2">12</option>
                                                <option value="3">16</option>
                                                <option value="4">20</option>
                                                <option value="5">24</option>
                                            </select>
                                        </div>

                                        {/* Product Short */}
                                        <div className="product-short">
                                            <p>Short by</p>
                                            <select name="sortby" className="nice-select">
                                                <option value="trending">Trending items</option>
                                                <option value="sales">Best sellers</option>
                                                <option value="rating">Best rated</option>
                                                <option value="date">Newest items</option>
                                                <option value="price-asc">Price: low to high</option>
                                                <option value="price-desc">Price: high to low</option>
                                            </select>
                                        </div>

                                        {/* Product Pages */}
                                        <div className="product-pages">
                                            <p>Pages 1 of 25</p>
                                        </div>

                                    </div>{/* Shop Top Bar End */}

                                </div>
                            </div>

                            {/* Shop Product Wrap Start */}
                            {/* Shop Product Wrap Start */}
                            <div className="shop-product-wrap grid row">
                                {hasil}

                            </div>

                            <div className="row mt-30">
                                <div className="col">

                                    <ul className="pagination">
                                        <li><a href="+"><i className="fa fa-angle-left"></i>Back</a></li>
                                        <li className="active"><a href="+">1</a></li>
                                        <li ><a href="+">2</a></li>
                                        <li><a href="+">3</a></li>
                                        <li> - - - - - </li>
                                        <li><a href="+">18</a></li>
                                        <li><a href="+">18</a></li>
                                        <li><a href="+">20</a></li>
                                        <li><a href="+">Next<i className="fa fa-angle-right"></i></a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

