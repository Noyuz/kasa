import styled from 'styled-components'
import logo from '../../assets/images/white-logo.svg'

const StyledFooter = styled.footer`
  margin-top: auto;
  height: 210px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  img {
    width: 120px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`

function Footer() {

  return (
    <StyledFooter>
      <img src={logo} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </StyledFooter>
  );
}

export default Footer;
