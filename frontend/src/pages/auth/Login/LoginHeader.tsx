import * as React from 'react'
import { Typography } from '@mui/material'

const LoginHeader = () => {
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

export default LoginHeader
