import { useContext } from 'react'
import { AppContext } from './Context'

const GlobalContext = () => {
  return useContext(AppContext)
}

export default GlobalContext