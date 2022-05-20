import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

// STYLES
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <article className='wrapper'>
        <Navbar />
        <section>DashBoard</section>
      </article>
    </>
  )
}

export default Dashboard
