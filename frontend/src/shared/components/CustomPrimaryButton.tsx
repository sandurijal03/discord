import { Button } from '@mui/material'
import * as React from 'react'

type CustomPrimaryButtonProps = {
  label: string
  additionalStyles: any
  disabled: boolean
  onClick: () => void
}

const CustomPrimaryButton: React.FC<CustomPrimaryButtonProps> = ({
  label,
  additionalStyles,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant='contained'
      sx={{
        bgcolor: '#5865f2',
        color: 'white',
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        width: '100%',
        height: '40px',
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default CustomPrimaryButton
