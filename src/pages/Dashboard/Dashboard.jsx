// COMPONENTS
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Users from '../../components/Users/Users'

// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'

// STYLES
import './Dashboard.scss'

const Dashboard = () => {
  const { user } = useAuthContext()
  return (
    <>
      <Sidebar />
      <article className='wrapper'>
        <Navbar />
        <section>DashBoard</section>
      </article>
      {user && <Users />}
    </>
  )
}

export default Dashboard
