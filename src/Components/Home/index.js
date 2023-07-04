import './index.css'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../Header'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/loginForm" />
  }

  return (
    <>
      <Header />

      <div className="home-container">
        <div className="responsive-container">
          <h1 className="main-heading">Find The Job That Fits Your Life</h1>
          <p className="job-des">
            Millions of people are searching for jobs,salary information
            ,company reviews . Find the job that fits your abilities and
            potential
          </p>
          <Link to="/jobs" className="link-item">
            <button type="button" className="find-job-btn">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Home
