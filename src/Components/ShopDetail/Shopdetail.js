// import React, { Component } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// export default class Details extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             productdetails: [],
//             value: 0
//         }
//     }
//     componentDidMount() {
//         console.log(this.props.match.params.detail)
//         let det = this.props.match.params.detail
//         let link = `http://localhost:8000/data/${det}`
//         axios.get(link)
//             .then((data) => {

//                 this.setState({
//                     productdetails: data.data[0]
//                 })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//     kurang = () => {
//         let currentValue = this.state.value
//         this.setState({
//             value: currentValue - 1
//         })
//     }
//     tambah = () => {
//         let currentValue = this.state.value
//         this.setState({
//             value: currentValue + 1
//         })
//     }

//     render() {

//         return (
//             <div>


//                 <div className="page-banner-section section">
//                     <div className="page-banner-wrap row row-0 d-flex align-items-center ">


//                         <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
//                             <div className="page-banner">
//                                 <h1>Product Details</h1>
//                                 <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
//                                 <div className="breadcrumb">
//                                     <ul>
//                                         <li><a href="+">HOME</a></li>
//                                         <li><a href="+">Product Details</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className="col-lg-4 col-md-6 col-12 order-lg-1">
//                             <div className="banner"><a href="+"><img src="assets/images/banner/banner-15.jpg" alt="Banner" /></a></div>
//                         </div>


//                         <div className="col-lg-4 col-md-6 col-12 order-lg-3">
//                             <div className="banner"><a href="+"><img src="assets/images/banner/banner-14.jpg" alt="Banner" /></a></div>
//                         </div>

//                     </div>
//                 </div>


//                 <div key={i} className="product-section section mt-90 mb-90">
//                     <div className="container">

//                         <div className="row mb-90">

//                             <div className="col-lg-6 col-12 mb-50">


//                                 <div className="single-product-image thumb-right">

//                                     <div className="tab-content">
//                                         <div id="single-image-1" className="tab-pane fade show active big-image-slider">
//                                             <div className="big"><img src={`./assets/img/${gambar}`} alt="Big" /><a href={`./assets/img/${gambar}`} className="big-image-popup"><i className="fa fa-search-plus"></i></a></div>

//                                         </div>


//                                     </div>

//                                 </div>

//                             </div>

//                             <div className="col-lg-6 col-12 mb-50">


//                                 <div className="single-product-content">


//                                     <div className="head-content">

//                                         <div className="category-title">
//                                             <a href="+" className="cat">Smartphone</a>
//                                             <h5 className="title">{nama}</h5>
//                                         </div>

//                                         <h5 className="price">{this.state.productdetails.product_price}</h5>

//                                     </div>

//                                     <div className="single-product-description">

//                                         <div className="ratting">
//                                             <i className="fa fa-star"></i>
//                                             <i className="fa fa-star"></i>
//                                             <i className="fa fa-star"></i>
//                                             <i className="fa fa-star"></i>
//                                             <i className="fa fa-star-o"></i>
//                                         </div>

//                                         <div className="desc">
//                                             <p>{deskripsi}</p>
//                                         </div>

//                                         <span className="availability">Availability: <span>In Stock</span></span>

//                                         <div className="quantity-colors">

//                                             <div className="quantity">
//                                                 <h5>Quantity</h5>
//                                                 <div className="pro-qty"><input type="text" value="1" />
//                                                 </div>

//                                                 <div className="colors">
//                                                     <h5>Color</h5>
//                                                     <select className="nice-select">
//                                                         <option>red</option>
//                                                         <option>black</option>
//                                                         <option>yellow</option>
//                                                         <option>grey</option>
//                                                     </select>
//                                                 </div>

//                                             </div>

//                                             <div className="actions">

//                                                 <a href="+" className="add-to-cart"><i className="ti-shopping-cart"></i><span>ADD TO CART</span></a>

//                                                 <div className="wishlist-compare">
//                                                     <a href="+" data-tooltip="Compare"><i className="ti-control-shuffle"></i></a>
//                                                     <a href="+" data-tooltip="Wishlist"><i className="ti-heart"></i></a>
//                                                 </div>

//                                             </div>

//                                             <div className="tags">

//                                                 <h5>Tags:</h5>
//                                                 <a href="+">Electronic</a>
//                                                 <a href="+">Smartphone</a>
//                                                 <a href="+">Phone</a>
//                                                 <a href="+">Charger</a>
//                                                 <a href="+">Powerbank</a>

//                                             </div>

//                                             <div className="share">

//                                                 <h5>Share: </h5>
//                                                 <a href="+"><i className="fa fa-facebook"></i></a>
//                                                 <a href="+"><i className="fa fa-twitter"></i></a>
//                                                 <a href="+"><i className="fa fa-instagram"></i></a>
//                                                 <a href="+"><i className="fa fa-google-plus"></i></a>

//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }