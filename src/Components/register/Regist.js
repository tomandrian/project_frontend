import React, { Component } from 'react'
import axios from 'axios'


class Regist extends Component {
    constructor() {
        super()
        this.state = {
            nama: '',
            tgllahir: '',
            email: '',
            password: '',

        }
    }
    consumersdata = () => {

        var url = 'http://localhost:8000/users'
        axios.post(url, {
            nama: this.state.nama,
            tgllahir: this.state.tgllahir,
            email: this.state.email,
            password: this.state.password

        })
            .then((output) => {
                console.log(output.data)
            })
            .catch((err) => {
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
                                <h1>Register</h1>
                                <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
                                <div className="breadcrumb">
                                    <ul>
                                        <li><a href="+">HOME</a></li>
                                        <li><a href="+">Register</a></li>
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


                <div className="register-section section mt-90 mb-90">
                    <div className="container">
                        <div className="row">


                            <div className="col-md-6 col-12 d-flex">
                                <div className="ee-register">

                                    <h3>We will need for your registration</h3>
                                    <p>E&E provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>


                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12 mb-30"><input type="text" onChange={(e) => { this.setState({ nama: e.target.value }) }} placeholder="Fullname" /></div>
                                            <div className="col-12 mb-30"><input type="text" onChange={(e) => { this.setState({ tgllahir: e.target.value }) }} placeholder="Date of Birth" /></div>
                                            <div className="col-12 mb-30"><input type="email" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Your email here" /></div>
                                            <div className="col-12 mb-30"><input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} placeholder="Enter passward" /></div>
                                            <div className="col-12"><input type="submit" onClick={this.consumersdata} value="register" /></div>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="col-md-1 col-12 d-flex">

                                <div className="login-reg-vertical-boder"></div>

                            </div>


                            <div className="col-md-5 col-12 d-flex">

                                <div className="ee-account-image">
                                    <h3>Upload your Image</h3>

                                    <img src="assets/images/account-image-placeholder.jpg" alt="gbr" className="image-placeholder" />

                                    <div className="account-image-upload">
                                        <input type="file" name="chooseFile" id="account-image-upload" />
                                        <label className="account-image-label" htmlFor="account-image-upload">Choose your image</label>
                                    </div>

                                    <p>jpEG 250x250</p>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Regist;
