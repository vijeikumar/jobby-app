import './index.css'
import ProfileDetails from '../ProfileDetails'

const JobFilterGroup = props => {
  const getEmploymentTypeList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(employ => {
      const {changeEmploymentType} = props
      const onChangeEmploymentType = event =>
        changeEmploymentType(event.target.value)

      return (
        <li
          className="checkbox-list-items"
          key={employ.employmentTypeId}
          onChange={onChangeEmploymentType}
        >
          <input
            className="check-radio"
            value={employ.employmentTypeId}
            type="checkbox"
            id={employ.employmentTypeId}
          />
          <label htmlFor={employ.employmentTypeId} className="check-label">
            {employ.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )
  const getSalaryRangeList = () => {
    const {salaryRangesList} = props
    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      const onChangeSalaryRange = () => {
        changeSalaryRange(salary.salaryRangeId)
      }
      return (
        <li
          className="check"
          key={salary.salaryRangeId}
          onChange={onChangeSalaryRange}
        >
          <input
            type="radio"
            id={salary.salaryRangeId}
            name="each"
            className="check-radio"
          />
          <label className="check-label" htmlFor={salary.salaryRangeId}>
            {salary.label}
          </label>
        </li>
      )
    })
  }
  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  )
  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="line" />
      {renderEmploymentType()}
      <hr className="line" />
      {renderSalaryRange()}
    </div>
  )
}

export default JobFilterGroup
