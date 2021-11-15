import { useEffect } from 'react'
import { signOut } from '../../services/users'
import { Navigate } from 'react-router-dom'

const SignOut = (props) => {
  const { setUser } = props
  const history = Navigate()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push('/')
    }
    signOutUser()
  }, [history, setUser])

  return ''
}

export default SignOut
