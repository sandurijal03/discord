import * as React from 'react'
import InputWithLabel from '../../../shared/components/InputWithLabel'

type LoginInputsProps = {
  username: string
  setUsername: any
  password: string
  setPassword: any
}

const LoginInputs: React.FC<LoginInputsProps> = ({
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel
        value={username}
        label='Username'
        type='text'
        placeholder='Username'
        setValue={setUsername}
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
