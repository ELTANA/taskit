import { useParams } from 'react-router-dom'
import useDocument from '../../hooks/useDocument'

// COMPONENTS
import ProjectSummary from './ProjectSummary'

// STYLES
import './Projects.scss'
import ProjectComments from './ProjectComments'

const Project = () => {
  const { id } = useParams()
  const { document, error } = useDocument('projects', id)
  // console.log(document)

  if (error) {
    return <small className='error'>{error}</small>
  }

  if (!document) {
    return (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <section className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComments />
    </section>
  )
}

export default Project
