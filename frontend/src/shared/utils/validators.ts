export const validateLoginForm = ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const isEmailValid = validateEmail(email)
  const isPasswordValid = validatePassword(password)

  return isEmailValid && isPasswordValid
}

type RegisterInput = {
  email: string
  password: string
  username: string
}

export const validateRegisterForm = ({
  email,
  password,
  username,
}: RegisterInput) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username)
  )
}

const validateEmail = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return emailPattern.test(email)
}

const validatePassword = (password: string) => {
  return password.length > 6 && password.length < 12
}

const validateUsername = (username: string) => {
  return username.length > 2 && username.length < 13
}
