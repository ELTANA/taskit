// COMPONENTS
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Users from '../../components/Users/Users'

// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'

// STYLES
import './Create.scss'

const Create = () => {
  const { user } = useAuthContext()
  return (
    <>
      <Sidebar />
      <article className='wrapper'>
        <Navbar />
        <section>Create</section>
      </article>
      {user && <Users />}
    </>
  )
}

export default Create
