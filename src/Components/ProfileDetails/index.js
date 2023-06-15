import './index.css'

import {component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class ProfileDetails extends component {
  state = {profileList: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const profileUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(profileUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const profileData = {
        name: data.name,
        profileImageUrl: data.profile_image_url,
        shortBio: data.short_bio,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        profileList: profileData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProfileDetails = () => {
    const {profileList} = this.state
    const {profileImageUrl, name, shortBio} = profileList
    return (
      <div className="">
        <img
          src={profileImageUrl}
          alt="profile logo"
          className="profile-logo"
        />
        <h1 className="">{name}</h1>
        <p className="">{shortBio}</p>
      </div>
    )
  }

  renderLoaderView = () => (
    <div className="profile-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <button
        type="button"
        className="job-item-failure-button"
        data-testid="button"
        onClick={this.getProfileDetails}
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()

      default:
        return null
    }
  }
}

export default ProfileDetails
