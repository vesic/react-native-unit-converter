import { AsyncStorage } from 'react-native'

export const saveState = async reduxState => {
  try {
    await AsyncStorage.setItem('reduxState', JSON.stringify(reduxState))
  } catch (error) {
    console.log(error.message)
  }
}

export const getState = async () => {
  let reduxState = ''
  try {
    reduxState = (await AsyncStorage.getItem('reduxState'))
  } catch (error) {
    console.log(error.message)
  }
  return JSON.parse(reduxState)
}
