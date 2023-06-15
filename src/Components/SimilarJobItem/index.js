import './index.css'
import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'

const SimilarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = jobDetails

  return (
    <li className="similar-list-docs">
      <div className="logo-container">
        <img src={companyLogoUrl} className="" alt="similar company logo url" />
        <h1 className="company-logo-title">{title}</h1>
        <div className="rating-container">
          <AiFillStar className="star-icon" />
          <p className="count-rating">{rating}</p>
        </div>
        <h1 className="similar-desc-heading">Description</h1>
        <p className="similar-desc">{jobDescription}</p>
        <div className="location-flex-justify">
          <div className="responsive">
            <GoLocation className="location-logo" />
            <p className="">{location}</p>
          </div>
          <div className="responsive">
            <BsBriefcaseFill className="location-logo-brief" />
            <p className="">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem
