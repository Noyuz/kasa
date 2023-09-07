import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import RedLogo from '../../assets/images/red-logo.svg'
import colors from '../../utils/style/colors'

const HeaderContainer = styled.header`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`

const HomeLogo = styled.img`
  width: 210px;
  @media (max-width: 768px) {
    width: 150px;
  }
`

const NavContainer = styled.nav`
  ul > li {
    display: inline;
    margin-left: 60px;
    a.active {
      border-bottom: 2px solid ${colors.primary};
    }
  }
  @media (max-width: 768px) {
    ul > li {
      margin-left: 20px;
      & > a {
        font-size: 1.2rem;
      }
    }
  }
`

const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  font-size: 1.5rem;
  &:hover {
    border-bottom: 2px solid ${colors.primary};
  }
`

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/"><HomeLogo src={RedLogo} /></NavLink>
      <NavContainer>
        <ul>
          <li><StyledLink to="/">Accueil</StyledLink></li>
          <li><StyledLink to="/about">A Propos</StyledLink></li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
