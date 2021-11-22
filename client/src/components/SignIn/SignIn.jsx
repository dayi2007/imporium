import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout.jsx';

const SignIn = (props) => {
  const history = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)

      history('/gallery')

    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        username: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button id="button" type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button id="button" type='submit'>Sign In</button>
    }
  }

  const { username, password } = form

  return (
    <div>
      <Layout>
    <div className='form-container'>
      <h3>Sign In</h3>
      <form onSubmit={onSignIn}>
        {/* <label className="lable-sign-in">Username</label> */}
        <input
          className="input"
          id="username"
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter Username'
          onChange={handleChange}
        />
        {/* <label className="lable-sign-in">Password</label> */}
        <input
          className="input"
          id="password"
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
      </div>
      </Layout>
    </div>
  )
}

export default SignIn
