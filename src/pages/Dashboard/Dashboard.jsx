import PropTypes from 'prop-types'

// HOOKS
import ProjectList from '../../components/ProjectList/ProjectList'
import { useCollection } from '../../hooks/useCollection'

// STYLES
import './Dashboard.scss'

const Dashboard = () => {
  const { documents, error } = useCollection('projects')
  // console.log('documents:', documents)

  return (
    <div className='dashboard'>
      <section className='dashboard-content'>
        <h2 className='page-title'>Dashboard</h2>
        {error && <small className='error'>{error}</small>}

        {documents && <ProjectList projects={documents} />}
      </section>
    </div>
  )
}

export default Dashboard
