import { useEffect } from 'react'
import { signOut } from '../../services/users'
import { useNavigate } from 'react-router-dom'

const SignOut = (props) => {
  const { setUser } = props
  const history = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history('/')
    }
    signOutUser()
  }, [history, setUser])

  return ''
}

export default SignOut
