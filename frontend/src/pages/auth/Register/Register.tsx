import * as React from 'react'
import { Typography } from '@mui/material'
import AuthBox from '../../../shared/components/AuthBox'
import RegisterInputs from './RegisterInputs'
import RegisterFooter from './RegisterPageFooter'
import { validateRegisterForm } from '../../../shared/utils/validators'

const Register = () => {
  const [email, setEmail] = React.useState<string>('')
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [isFormValid, setIsFormValid] = React.useState<boolean>(false)

  React.useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, username, password }))
  }, [email, username, password, setIsFormValid])

  const handleRegister = () => {
    console.log(email, username, password)
  }

  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: '#fff' }}>
        Create an account
      </Typography>
      <RegisterInputs
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  )
}

export default Register
