import PropTypes from 'prop-types'

// COMPONENTS
import Avatar from '../../components/Avatar/Avatar'
import ProjectComments from './ProjectComments'

// STYLES
import './Projects.scss'

const ProjectSummary = ({ project }) => {
  return (
    <div className='project-summary'>
      <h2 className='page-title'>{project.name}</h2>
      <p className='due-date'>
        <span>Project due by:</span> {project.dueDate.toDate().toDateString()}
      </p>

      <p className='details'>{project.details}</p>

      <div className='activity'>
        <div className='assigned-users'>
          <h4>Project is assigned to:</h4>

          <div className='users'>
            {project.assignedUsersList.map((user) => (
              <div key={user.id}>
                <Avatar src={user.photoURL} />
              </div>
            ))}
          </div>
        </div>

        <div className='comments-btn'>
          <ProjectComments />
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary

ProjectSummary.propTypes = {
  project: PropTypes.object.isRequired
}
