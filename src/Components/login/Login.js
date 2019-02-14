import React, { Component } from 'react'
import axios from 'axios'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            show: false,
            message: '',
            nampungData: []
        }
    }
    login = () => {
        let dataToken = { email: this.state.email, password: this.state.password }// data yang di tangkap dari user input

        this.setState({ cobaLogin: true })
        axios.post('http://localhost:8000/login', dataToken)
            .then(x => {
                if (x.data.code === 204) {
                    this.setState({
                        show: true,
                        message: "Email and Password Does Not Exist"
                    }, function () {
                        setTimeout((x) => {
                            this.setState({
                                show: false,
                                message: ''
                            });
                        }, 2000);
                    })
                } else if (x.data.code === 200) {
                    console.log(x.data.results)
                    localStorage.setItem("id_user", JSON.stringify(x.data.results[0])); // membuat directory untuk di simpan dari data yang sudah di ambil yaitu data login
                    this.setState({
                        show: true,
                        message: "Login Succes",
                        nampungData: x.data.results
                    }, function () {

                        setTimeout(() => {
                            this.setState({
                                show: false,
                                message: ''
                            });
                            this.props.history.push('/')
                            this.props.getLogin(this.state.nampungData)// fungsi untuk menampung data dan di kirim ke app js
                        }, 2000);
                    })
                } else {
                    this.setState({
                        show: true,
                        message: "email not registered"
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                show: false,
                                message: ''
                            });
                        }, 2000);
                    })
                }

            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <div className="page-banner-section section">
                    <div className="page-banner-wrap row row-0 d-flex align-items-center ">


                        <div className="col-lg-4 col-12 order-lg-2 d-flex align-items-center justify-content-center">
                            <div className="page-banner">
                                <h1>Login</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="+">HOME</a></li>
                                        <li><a href="+">Login</a></li>
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


                <div className="login-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">


                            <div className="col-md-6 col-12 d-flex">
                                <div className="ee-login">

                                    <h3>Login to your account</h3>
                                    <p>E&E provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>


                                    <form onSubmit={(e) => { e.preventDefault() }}>
                                        <div className="row">
                                            <div className="col-12 mb-30"><input type="text" placeholder="Type your username or email address" onChange={(e) => {
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }} /></div>
                                            <div className="col-12 mb-20"><input type="password" placeholder="Enter your passward" onChange={(e) => {
                                                this.setState({
                                                    password: e.target.value
                                                })
                                            }} /></div>

                                            <div className="col-12 mb-15">

                                                <input type="checkbox" id="remember_me" />
                                                <label htmlFor="remember_me">Remember me</label>

                                                <a href="+">Forgotten pasward?</a>

                                            </div>
                                            <div className="col-12"><input type="submit" value="LOGIN" onClick={this.login} /></div>
                                        </div>
                                    </form>
                                    <h4>Don’t have account? please click <a href="register">Register</a></h4>

                                </div>
                            </div>

                            <div className="col-md-1 col-12 d-flex">

                                <div className="login-reg-vertical-boder"></div>

                            </div>


                            <div className="col-md-5 col-12 d-flex">

                                <div className="ee-social-login">
                                    <h3>Also you can login with...</h3>

                                    <a href="+" className="facebook-login">Login with <i className="fa fa-facebook"></i></a>
                                    <a href="+" className="twitter-login">Login with <i className="fa fa-twitter"></i></a>
                                    <a href="+" className="google-plus-login">Login with <i className="fa fa-google-plus"></i></a>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
