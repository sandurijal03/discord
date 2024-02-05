import * as React from 'react'
import InputWithLabel from '../../../shared/components/InputWithLabel'

type RegisterInputsProps = {
  email: string
  setEmail: any
  username: string
  setUsername: any
  password: string
  setPassword: any
}

const RegisterInputs: React.FC<RegisterInputsProps> = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label={'Email address'}
        type='email'
        placeholder='john@doe.com'
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label={'Username'}
        type='text'
        placeholder='johndoe'
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label={'Password'}
        type='password'
        placeholder='password'
      />
    </>
  )
}

export default RegisterInputs
