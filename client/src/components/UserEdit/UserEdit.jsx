import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './UserEdit.css'
import { updateUser } from '../../services/users'
// import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout.jsx';

const UserEdit = (props) => {
  // const history = useNavigate()
 
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })
  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()


    useEffect(() => {
      const fetchUser = async () => {
        const user = await updateUser(id)
        setUser(user)
      }
      fetchProduct()
    }, [id])
    
  const handleChange = (event) =>
  setUser({
    ...user,
    [event.target.name]: event.target.value,
  })
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateUser(id, user)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Navigate to={"/"} />
  }

  // const onSignUp = async (event) => {
  //   event.preventDefault()
  //   const { setUser } = props
  //   try {
  //     const user = await updateUser(user)
  //     setUser(user)
  //     history('/')
  //   } catch (error) {
  //     console.error(error)
  //     setUser({
  //       username: '',
  //       email: '',
  //       password: '',
  //       passwordConfirmation: '',
  //       isError: true,
  //       errorMsg: 'Sign Up Details Invalid',
  //     })
  //   }
  // }

  const renderError = () => {
    const toggleUser = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button id="button" type='submit' className={toggleUser}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button id="button" type='submit'>Update</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <div>
      <Layout>
    <div className='update-user'>
      <h3>Account</h3>
      <form onSubmit={handleSubmit}>
  
        <input
          id="username"
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          autoFocus
          onChange={handleChange}
        />

        {/* <input
          id="email"
          required
          type='email'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
        /> */}
        
        <input
          id="password"
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />

        <input
          id="password1"
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
    </Layout>
    </div>
  )
}

export default UserEdit
