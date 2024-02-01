import * as React from 'react'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#5865f2',
})

type AuthBoxProps = {
  children: React.ReactNode
}

const AuthBox: React.FC<AuthBoxProps> = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: '#36393f',
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  )
}

export default AuthBox
