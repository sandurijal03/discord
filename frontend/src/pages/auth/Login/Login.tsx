import * as React from 'react'
import { useDispatch } from 'react-redux'

import AuthBox from '../../../shared/components/AuthBox'
import { validateLoginForm } from '../../../shared/utils/validators'
import LoginFooter from './LoginFooter'
import LoginHeader from './LoginHeader'
import LoginInputs from './LoginInputs'
import { setUserDetails } from '../../../store/reducers/authReducer'
import { loginActions } from '../../../store/actions/authActions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isFormValid, setIsFormValid] = React.useState(false)

  React.useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }))
  }, [email, password, setIsFormValid])

  const navigate = useNavigate()

  const handleLogin = () => {
    loginActions({ email, password })
    navigate('/dashboard')
  }

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  )
}

export default Login
