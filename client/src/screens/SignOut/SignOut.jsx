import { useEffect } from 'react'
import { signOut } from '../../services/users'
import { useNavigate } from 'react-router-dom'

const SignOut = (props) => {
  const { setUser } = props
  const navigate = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      useNavigate.push('/')
    }
    signOutUser()
  }, [history, setUser])

  return ''
}

export default SignOut
