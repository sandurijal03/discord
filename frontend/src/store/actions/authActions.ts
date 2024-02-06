import * as api from '../../services/api'
import { setUserDetails } from '../reducers/authReducer'

export const getActions = (dispatch: any) => {
  return {
    login: (userDetails: { email: string; password: string }, history: any) =>
      dispatch(login(userDetails, history)),
    register: (
      userDetails: { email: string; password: string; username: string },
      history: any,
    ) => dispatch(register(userDetails, history)),
  }
}

const login = (
  userDetails: { email: string; password: string },
  history: any,
) => {
  return async (dispatch: any) => {
    const response: any = await api.login(userDetails)
    if (response.error) {
      // show eror messaqge in alert
    } else {
      const { userDetails } = response?.data
      localStorage.setItem('user', JSON.stringify(userDetails))
      dispatch(setUserDetails(userDetails))
      history.push('/dashboard')
    }
  }
}

const register = (
  userDetails: { email: string; password: string; username: string },
  history: any,
) => {
  return async (dispatch: any) => {
    const response: any = await api.register(userDetails)
    if (response.error) {
      // show eror messaqge in alert
    } else {
      const { userDetails } = response?.data
      localStorage.setItem('user', JSON.stringify(userDetails))
      dispatch(setUserDetails(userDetails))
      history.push('/dashboard')
    }
  }
}
