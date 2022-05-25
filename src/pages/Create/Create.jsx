import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// HOOKS
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { timestamp } from '../../firebase/config'

// COMPONENTS
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// STYLES
import './Create.scss'

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' }
]

const Create = () => {
  // ADD PROJECT DOC & USENAVIAGATE()
  let navigate = useNavigate()
  const { addDocument, response } = useFirestore('projects')

  // Users Select Options
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])
  const { user } = useAuthContext()

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return {
          value: user,
          label: user.displayName
        }
      })

      setUsers(options)
    }
  }, [documents])

  // form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  // ANIMATED SELECT INIT
  const animatedComponents = makeAnimated()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if (!category) {
      setFormError('Please Select a Project Category!')
      return
    }

    if (assignedUsers.length < 1) {
      setFormError('Please Assign the Project to at least one User!')
      return
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid //uid not id
    }

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id //id not uid
      }
    })

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comment: [],
      createdBy,
      assignedUsersList
    }

    await addDocument(project)
    if (!response.error) {
      navigate('/', { replace: true })
    }
  }

  return (
    <div className='create'>
      <section className='create-form'>
        <h2 className='page-title'>Create a New Project</h2>

        <form onSubmit={handleSubmit}>
          {formError && <small className='error'>{formError}</small>}

          <label htmlFor='name'>
            <span>Project Name</span>
            <input
              type='text'
              name='name'
              placeholder='Enter Project Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </label>

          <label>
            <span>Project Details</span>
            <textarea
              name='details'
              placeholder='Enter Project Details'
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              required></textarea>
          </label>

          <label htmlFor='name'>
            <span>Set Due Date</span>
            <input
              type='date'
              name='name'
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
              required
            />
          </label>

          <label htmlFor='category'>
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={categories}
              onChange={(option) => setCategory(option)}
            />
          </label>

          <label htmlFor='assignee'>
            <Select
              className='select'
              closeMenuOnSelect={true}
              components={animatedComponents}
              isMulti
              options={users}
              onChange={(option) => setAssignedUsers(option)}
            />
          </label>

          <button className='btnn'>Add Project</button>
        </form>
      </section>
    </div>
  )
}

export default Create
