import * as React from 'react'
import { isFormElement } from 'react-router-dom/dist/dom'

import AuthBox from '../../../shared/components/AuthBox'
import LoginFooter from './LoginFooter'
import LoginHeader from './LoginHeader'
import LoginInputs from './LoginInputs'

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isFormValid, setIsFormValid] = React.useState(false)

  const handleLogin = () => {
    if (!username || !password) {
      setIsFormValid(false)
    }
  }

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  )
}

export default Login
