import styled from 'styled-components'

const HomeContainer = styled.div`
  min-height: 100vh;
  margin: 0 7%;
  @media (max-width: 768px) {
    margin: 0 3%;
  }
`

function Container({ children }) {
  return <HomeContainer>{children}</HomeContainer>;
}

export default Container
