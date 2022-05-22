import PropTypes from 'prop-types'

// COMPONENTS
import Avatar from '../../components/Avatar/Avatar'

// STYLES
import './Projects.scss'

const ProjectSummary = ({ project }) => {
  return (
    <div className='project-summary'>
      <h2 className='page-title'>{project.name}</h2>
      <p className='due-date'>
        <span>project due by:</span> {project.dueDate.toDate().toDateString()}
      </p>
      <p className='details'>{project.details}</p>
      <div className='users'>
        <h4>Project is assigned to:</h4>
        <div className='assigned-users'>
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary

ProjectSummary.propTypes = {
  project: PropTypes.object.isRequired
}
