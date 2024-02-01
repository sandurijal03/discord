import * as React from 'react'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'

type LoginFooterProps = {
  handleLogin: () => void
  isFormValid: boolean
}

const LoginFooter: React.FC<LoginFooterProps> = ({
  handleLogin,
  isFormValid,
}) => {
  return (
    <div>
      <CustomPrimaryButton
        label='Login'
        additionalStyles={{ marginTop: '30px', color: '#fff' }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  )
}

export default LoginFooter
