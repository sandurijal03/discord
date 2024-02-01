import * as React from 'react'
import { Typography } from '@mui/material'
import AuthBox from '../shared/components/AuthBox'

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant='h5' sx={{ color: '#fff' }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: '#b9bbbe' }}>
        We are happy that you are with us!
      </Typography>
    </>
  )
}

const Login = () => {
  return (
    <AuthBox>
      <LoginPageHeader />
    </AuthBox>
  )
}

export default Login
