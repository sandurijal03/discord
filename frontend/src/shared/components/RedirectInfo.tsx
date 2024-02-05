import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

type RedirectInfoProps = {
  text: string
  redirectText: string
  additionalStyles?: any
  redirectHandler: () => void
}

const RedirectInfo: React.FC<RedirectInfoProps> = ({
  text,
  redirectText,
  redirectHandler,
  additionalStyles,
}) => {
  return (
    <Typography
      sx={{ color: '#72767d' }}
      style={additionalStyles ? additionalStyles : {}}
      variant='subtitle2'
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  )
}

export default RedirectInfo

const RedirectText = styled('span')({
  color: '#00aff4',
  fontWeight: 500,
  cursor: 'pointer',
})
