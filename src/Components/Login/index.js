import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  onSubmitForm = async () => {
    const {userName, password} = this.props
    const userDetails = {userName, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      body: JSON.stringify(userDetails),
      method: 'POST',
    }
    const response = await fetch(loginUrl, options)
    const data = response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          className="user-input"
          value={username}
          onChange={this.changeUsername}
          id="username"
          placeholder="Username"
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          value={password}
          placeholder="Password"
          className="user-input"
          onChange={this.changePassword}
          type="text"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="job-app-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />

          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderUsername}</div>
            <div className="input-container">{this.renderPassword}</div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showSubmitError && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
