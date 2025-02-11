import { store } from '@/app/store'
import { Provider } from 'react-redux'

export function UserProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
