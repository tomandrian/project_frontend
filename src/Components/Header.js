import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Header extends Component {
  constructor() {
    super()
    this.state = {
      inLogin: false // ini state untuk menampilkan Login or Username user
    }
  }
  componentDidMount() {// ini untuk check apakah di storage atau penyimpanan user udah login atau belum 
    if (localStorage.getItem('id_user')) {
      this.setState({
        isLogIn: true
      })
    } else if (localStorage.getItem('id_user')) (
      this.setState({
        isLogIn: false
      })
    )
  }
  logout = () => {
    localStorage.removeItem('id_user')
    console.log(this.props)
  }
  render() {
    var abc = JSON.parse(localStorage.getItem('id_user')) // kita parsing dulu format dari object ke JSON biar bisa di panggil dengan kita jadikan variable
    return (
      <div>
        {console.log(this.props.dataUser)}

        <header className="header mb-5" >
          <div id="top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offer mb-3 mb-lg-0"><a href="/" className="btn btn-success btn-sm">Diskon khusus hari ini!</a><a
                  href="/" className="ml-1">Beli 2 Liquid gratis bon!</a>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                  <ul className="menu list-inline mb-0">
                    {this.state.isLogIn ?
                      <React.Fragment>
                        <li className="list-inline-item"><Link to="/login">{abc.nama}</Link> </li>

                      </React.Fragment>
                      :
                      <React.Fragment>
                        <li className="list-inline-item"><Link to="/login">Login</Link></li>
                        <li className="list-inline-item"><Link to="/register">Register</Link></li>
                      </React.Fragment>}

                    <li className="list-inline-item"><a href="contact.html">Contact</a></li>
                    <li className="list-inline-item"><a href="/">Recently viewed</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" className="modal fade">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Customer login</h5>
                    <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                  </div>
                  <div className="modal-body">
                    <form action="customer-orders.html" method="post">
                      <div className="form-group">
                        <input id="email-modal" type="text" placeholder="email" className="form-control" />
                      </div>
                      <div className="form-group">
                        <input id="password-modal" type="password" placeholder="password" className="form-control" />
                      </div>
                      <p className="text-center">
                        <button className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
                      </p>
                    </form>
                    <p className="text-center text-muted">Not registered yet?</p>
                    <p className="text-center text-muted"><a href="register.html"><strong>Register now</strong></a>! It is easy
                  and done in 1 minute and gives you access to special discounts and much more!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg">
            <div className="container"><Link to="/" className="navbar-brand home">
              <img src="/assets/img/logo.png" alt="TVs logo"
                className="d-none d-md-inline-block" />
              <img src="/assets/img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none" /><span
                className="sr-only">Obaju - go to homepage</span></Link>
              <div className="navbar-buttons">
                <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler" aria-controls="navbarToggleExternalContent"
                  aria-expanded="false" aria-label="Toggle navigation"><span
                    className="sr-only">Toggle navigation</span><i className="fa fa-align-justify"></i></button>
                <button type="button" data-toggle="collapse" data-target="search" className="btn btn-outline-secondary navbar-toggler"><span
                  className="sr-only">Toggle search</span><i className="fa fa-search"></i></button><a href="basket.html" className="btn btn-outline-secondary navbar-toggler"><i
                    className="fa fa-shopping-cart"></i></a>
              </div>
              <nav id="navigation" className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="nav-item"><a href="/shop" className="nav-link ">Shop</a></li>
                  <li className="nav-item dropdown menu-large"><a href="/" data-toggle="dropdown" data-hover="dropdown"
                    data-delay="200" className="dropdown-toggle nav-link">MODS<b className="caret"></b></a>
                    <ul className="dropdown-menu megamenu">
                      <li>
                        <div className="row">
                          <div className="col-md-6 col-lg-3">
                            <h5>Mechanical Mods</h5>
                            <ul className="list-unstyled mb-3">
                              <li className="nav-item"><a href="category.html" className="nav-link">Coil Art</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Shirts</a></li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <h5>Electrical Mods</h5>
                            <ul className="list-unstyled mb-3">
                              <li className="nav-item"><a href="category.html" className="nav-link">Coil Art</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">SMOK</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">IPV</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">SXmini</a></li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <h5>New Mods</h5>
                            <ul className="list-unstyled mb-3">
                              <li className="nav-item"><a href="category.html" className="nav-link">Vmate</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">WISMEC</a></li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <div className="banner"><a href="/"><img src="/assets/img/banner3.jpg" alt="" className="img img-fluid" /></a></div>
                            <div className="banner"><a href="/"><img src="/assets/img/banner4.jpg" alt="" className="img img-fluid" /></a></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown menu-large"><a href="/" data-toggle="dropdown" data-hover="dropdown"
                    data-delay="200" className="dropdown-toggle nav-link">Accessories<b className="caret"></b></a>
                    <ul className="dropdown-menu megamenu">
                      <li>
                        <div className="row">
                          <div className="col-md-6 col-lg-3">
                            <h5>Atomizer</h5>
                            <ul className="list-unstyled mb-3">
                              <li className="nav-item"><a href="category.html" className="nav-link">RTA</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">RDA</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">RDTA</a></li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <h5>Accessories</h5>
                            <ul className="list-unstyled mb-3">
                              <li className="nav-item"><a href="category.html" className="nav-link">Battery</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Cotton</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Battery Charger</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Coiling Tools</a></li>
                            </ul>
                          </div>

                          <div className="col-md-6 col-lg-3">
                            <div className="banner"><a href="/"><img src="/assets/img/banner.jpg" alt="" className="img img-fluid" /></a></div>
                            <div className="banner"><a href="/"><img src="/assets/img/banner2.jpg" alt="" className="img img-fluid" /></a></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown menu-large"><a href="/" data-toggle="dropdown" data-hover="dropdown"
                    data-delay="200" className="dropdown-toggle nav-link">Liquid<b className="caret"></b></a>
                    <ul className="dropdown-menu megamenu">
                      <li>
                        <div className="row">
                          <div className="col-md-6 col-lg-3">
                            <h5>Local Liquid</h5>
                            <ul className="list-unstyled mb-3">
                              <li className="nav-item"><a href="category.html" className="nav-link">Banana Butt</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Cloud Niners</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Susu Bro!</a></li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <h5>Import Liquid</h5>
                            <ul className="list-unstyled mb-3">
                              <li className="nav-item"><a href="category.html" className="nav-link">Suicide Bunny</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Crank</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Jam Monster</a></li>
                              <li className="nav-item"><a href="category.html" className="nav-link">Beard</a></li>
                            </ul>
                          </div>

                          <div className="col-md-6 col-lg-3">
                            <div className="banner"><a href="/"><img src="assets//assets/img/banner5.jpg" alt="" className="img img-fluid" /></a></div>
                            <div className="banner"><a href="/"><img src="/assets/img/banner6.jpg" alt="" className="img img-fluid" /></a></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="navbar-buttons d-flex justify-content-end">

                  <div id="search-not-mobile" className="navbar-collapse collapse">
                  </div>
                  <a data-toggle="collapse" href="/search" className="btn navbar-btn btn-primary d-none d-lg-inline-block">
                    <span className="sr-only">Toggle search</span><i className="fa fa-search"></i></a>
                  <div id="basket-overview" className="navbar-collapse collapse d-none d-lg-block"><Link to='/cart' className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart"></i><span>CART</span></Link></div>
                </div>

              </nav>
            </div>
          </nav>
          <div id="search" className="collapse">
            <div className="container">
              <form role="search" className="ml-auto">
                <div className="input-group">
                  <input type="text" placeholder="Search" className="form-control" />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
export default Header
