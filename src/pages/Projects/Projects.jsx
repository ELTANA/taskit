import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

// STYLES
import './Projects.scss'

const Project = () => {
  return (
    <>
      <Sidebar />
      <article className='wrapper'>
        <Navbar />
        <section>Projects</section>
      </article>
    </>
  )
}

export default Project
