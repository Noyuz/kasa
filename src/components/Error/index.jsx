import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  display: flex;
  color: ${colors.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;

  h1 {
    font-size: 10rem;
    font-weight: 700;
  }

  p {
    font-size: 2rem;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  a {
    color: ${colors.primary};
    font-size: 1rem;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 7rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </ErrorWrapper>
  )
}

export default Error
