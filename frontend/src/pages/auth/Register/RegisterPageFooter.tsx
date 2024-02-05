import { Tooltip } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../../shared/components/RedirectInfo'

type RegisterFooterProps = {
  handleRegister: () => void
  isFormValid: boolean
}

const getFormNotValidMessage = () => {
  return 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 characters and correct email address should be provided.'
}

const getFormValidMessage = () => {
  return 'Press to Register!'
}

const RegisterFooter: React.FC<RegisterFooterProps> = ({
  handleRegister,
  isFormValid,
}) => {
  const navigate = useNavigate()

  const handlePushLogin = () => {
    navigate('/login')
  }
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label='Register'
            additionalStyles={{ marginTop: '30px', color: '#fff' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        redirectText='Already have an account?'
        text=''
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushLogin}
      />
    </>
  )
}

export default RegisterFooter
