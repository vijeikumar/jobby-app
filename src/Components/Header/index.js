import './index.css'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="navbar-container">
      <div className="">
        <Link className="link-item" to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <ul className="head-list-item">
        <Link to="/" className="link-item">
          <li className="home-heading">Home</li>
        </Link>
        <Link className="link-item" to="/jobs">
          <li className="job-heading">Jobs</li>
        </Link>
      </ul>
      <div>
        <button type="button" className="logout-button" onClick={onClickLogOut}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
