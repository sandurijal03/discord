import { Tooltip } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../../shared/components/RedirectInfo'

type LoginFooterProps = {
  handleLogin: () => void
  isFormValid: boolean
}

const getFormNotValidMessage = () => {
  return 'Enter correct e-mail address and password should contains between 6 and 12 characters.'
}

const getFormValidMessage = () => {
  return 'Press to log in!'
}

const LoginFooter: React.FC<LoginFooterProps> = ({
  handleLogin,
  isFormValid,
}) => {
  const navigate = useNavigate()

  const handlePushRegisterPage = () => {
    navigate('/register')
  }
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label='Login'
            additionalStyles={{ marginTop: '30px', color: '#fff' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Need an account?'
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushRegisterPage}
      />
    </>
  )
}

export default LoginFooter
