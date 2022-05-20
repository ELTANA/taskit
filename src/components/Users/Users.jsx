import { useCollection } from '../../hooks/useCollection'
import Avatar from '../Avatar/Avatar'

// STYLES
import './Users.scss'

const Users = () => {
  const { documents, error } = useCollection('users')

  return (
    <div className='user-list'>
      <div className='user-list-heading'>
        <h2>All Users</h2>
        {error && <div className='error'>{error}</div>}
      </div>
      {documents &&
        documents.map((user) => (
          <div key={user.id} className='user-list-item'>
            {user.online && <span className='online-user'></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  )
}

export default Users
