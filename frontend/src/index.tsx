import * as React from 'react'
import { createRoot } from 'react-dom/client'

import Main from './Main'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './store/store'

const domRoot = document.querySelector('#root')

const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
    }
`

createRoot(domRoot as Element).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  </React.StrictMode>,
)
