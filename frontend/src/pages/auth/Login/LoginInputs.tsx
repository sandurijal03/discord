import * as React from 'react'
import InputWithLabel from '../../../shared/components/InputWithLabel'

type LoginInputsProps = {
  email: string
  setEmail: any
  password: string
  setPassword: any
}

const LoginInputs: React.FC<LoginInputsProps> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel
        value={email}
        label='Email'
        type='email'
        placeholder='Email'
        setValue={setEmail}
      />
      <InputWithLabel
        value={password}
        label='Password'
        type='password'
        placeholder='Password'
        setValue={setPassword}
      />
    </>
  )
}

export default LoginInputs
