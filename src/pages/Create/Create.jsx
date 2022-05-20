import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

// STYLES
import './Create.scss'

const Create = () => {
  return (
    <>
      <Sidebar />
      <article className='wrapper'>
        <Navbar />
        <section>Creates</section>
      </article>
    </>
  )
}

export default Create
