import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props
  const {name, imageUrl} = skillDetails
  return (
    <li className="skill-list-item">
      <div className="skill-container">
        <img src={imageUrl} alt="skills" className="skill-image" />
        <p className="image-name">{name}</p>
      </div>
    </li>
  )
}
export default SkillsCard
