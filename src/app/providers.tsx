'use client'

import store from '@/store'
import { Provider } from 'react-redux'

export interface IProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: IProvidersProps): JSX.Element => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers
