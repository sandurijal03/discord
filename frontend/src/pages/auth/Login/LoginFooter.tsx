import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../../shared/components/RedirectInfo'

type LoginFooterProps = {
  handleLogin: () => void
  isFormValid: boolean
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
      <div>
        <CustomPrimaryButton
          label='Login'
          additionalStyles={{ marginTop: '30px', color: '#fff' }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
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
