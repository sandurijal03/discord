import * as React from 'react'

import AuthBox from '../../../shared/components/AuthBox'
import { validateLoginForm } from '../../../shared/utils/validators'
import LoginFooter from './LoginFooter'
import LoginHeader from './LoginHeader'
import LoginInputs from './LoginInputs'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isFormValid, setIsFormValid] = React.useState(false)

  React.useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }))
  }, [email, password, setIsFormValid])

  const handleLogin = () => {
    if (!email || !password) {
      setIsFormValid(false)
    }
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
