import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// HOOKS
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'

// STYLES
import './Projects.scss'

const ProjectComments = () => {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuthContext()

  const handleAddComment = (e) => {
    e.preventDefault()

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: uuidv4()
    }
    // console.log('commentToAdd', commentToAdd)
    // console.log('ID', commentToAdd.id)
  }
  return (
    <div className='project-comments'>
      <h4>Project Comments</h4>

      <form className='add-comment' onSubmit={handleAddComment}>
        <label htmlFor='comment'>
          <span>Add New Comment</span>
          <textarea
            name='comment'
            placeholder='Comment Here'
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            required></textarea>
        </label>

        <button className='btn'>Add Comment</button>
      </form>
    </div>
  )
}

export default ProjectComments
