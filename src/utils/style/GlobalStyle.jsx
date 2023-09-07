import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-family: 'Montserrat';
    font-weight: 500;
    ul {
      padding: 0;
    }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
