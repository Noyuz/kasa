import styled from 'styled-components'
import banner from '../../assets/images/home-banner.png'

const DivBanner = styled.div`
  background-image: linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(${banner});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;

  @media (max-width: 768px) {
    height: 150px;
    p {
      font-size: 34px;
      padding-left: 20px;
      span {
        display: block;
      }
    }
  }
`

function Banner() {
  return <DivBanner><p><span>Chez vous,</span> partout et ailleurs</p></DivBanner>
}

export default Banner
