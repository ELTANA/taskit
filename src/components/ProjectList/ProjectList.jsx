import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// COMPONENTS
import Avatar from '../Avatar/Avatar'

// STYLES
import './ProjectList.scss'

const ProjectList = ({ projects }) => {
  // console.log(projects[0].createdBy.displayName, projects[0].createdBy.photoURL)
  return (
    <div className='project-list'>
      {projects.length === 0 ? (
        <p>No Projects Yet!</p>
      ) : (
        projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <h4> {project.name}</h4>
            <p>Due by {project.dueDate.toDate().toDateString()}</p>
            {/* <small>
              Created By: <Avatar src={project.createdBy.photoURL} />
              <span> {project.createdBy.displayName}</span>
            </small> */}

            <div className='assigned-to'>
              <ul>
                <small>Assigned to:</small>
                {project.assignedUsersList.map((user) => (
                  <li key={user.photoURL}>
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}

export default ProjectList

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}
