import * as React from 'react'
import { createRoot } from 'react-dom/client'

import Main from './Main'
import { createGlobalStyle } from 'styled-components'

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
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
)
