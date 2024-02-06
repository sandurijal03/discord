import * as api from '../../services/api'
import { setUserDetails } from '../reducers/authReducer'
import { store } from '../store'

export const loginActions = (userDetails: {
  email: string
  password: string
}) => {
  store.dispatch(login(userDetails))
}

export const registerActions = (userDetails: {
  email: string
  password: string
  username: string
}) => {
  store.dispatch(register(userDetails))
}

const login = (userDetails: { email: string; password: string }) => {
  return async (dispatch: any) => {
    const response: any = await api.login(userDetails)
    if (response.error) {
      // show eror messaqge in alert
    } else {
      const { userDetails } = response?.data
      localStorage.setItem('user', JSON.stringify(userDetails))
      dispatch(setUserDetails(userDetails))
    }
  }
}

const register = (userDetails: {
  email: string
  password: string
  username: string
}) => {
  return async (dispatch: any) => {
    const response: any = await api.register(userDetails)
    console.log('response', response)
    if (response.error) {
      // show eror messaqge in alert
    } else {
      const { userDetails } = response?.data
      localStorage.setItem('user', JSON.stringify(userDetails))
      dispatch(setUserDetails(userDetails))
    }
  }
}
