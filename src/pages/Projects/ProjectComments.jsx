import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// HOOKS
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'

// BOOTSTRAP MODAL COMPONENTS
import { Modal, Form } from 'react-bootstrap'
import { GoCommentDiscussion } from 'react-icons/go'

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css'
import './Projects.scss'

const ProjectComments = () => {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuthContext()

  // BOOTSTRAP MODAL
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // HANDLE ADD COMMENT
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
    <>
      <div onClick={handleShow}>
        {/* <span className='me-3'>Add Comments</span> */}
        <GoCommentDiscussion className='comments text-danger fs-3' />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddComment}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Add New Comment</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                autoFocus
                placeholder='Comment Here'
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                required
              />
            </Form.Group>

            <div className='btn-div w-100 me-auto'>
              <button className='modal-btn' onClick={handleClose}>
                Close
              </button>
              <button className='modal-btn-red' onClick={handleClose}>
                Add Comment
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>

    // <div className='project-comments'>
    //   <h4>Project Comments</h4>

    //   <form className='add-comment' onSubmit={handleAddComment}>
    //     <label htmlFor='comment'>
    //       <span>Add New Comment</span>
    //       <textarea
    //         name='comment'
    //         placeholder='Comment Here'
    //         onChange={(e) => setNewComment(e.target.value)}
    //         value={newComment}
    //         required></textarea>
    //     </label>

    //     <button className='btnn'>Add Comment</button>
    //   </form>
    // </div>
  )
}

export default ProjectComments
