import * as React from 'react'

import AuthBox from '../../../shared/components/AuthBox'
import LoginHeader from './LoginHeader'
import LoginInputs from './LoginInputs'

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  console.log('username', username)
  console.log('username', password)

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  )
}

export default Login
