import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Routes from './Components/router/Router'
import { Route } from 'react-router-dom'
import Login from './Components/login/Login'
class App extends Component {
  constructor() {
    super()
    this.state = {
      dataUser: []
    }
  }

  getLogin = (x) => {// ini fungsi yang akan di lempar di login js dan akan menampung data yang dapat di lempar ke tempat lain
    this.setState({
      dataUser: x
    })
  }

  render() {
    return (
      <React.Fragment>
        {console.log(this.state.dataUser)}
        <Header dataUser={this.state.dataUser} />
        <Route exact path='/login'
          render={(props) => <Login {...props} getLogin={this.getLogin} component={Login} />} />
        <Routes />

        <Footer />


      </React.Fragment>


    )
  }
}

export default App;
