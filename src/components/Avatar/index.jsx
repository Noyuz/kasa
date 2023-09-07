import styled from 'styled-components'

const AvatarStyled = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: 10px;
  margin-bottom: 1em;
`

function Avatar({src, alt}) {
  return (
    <AvatarStyled src={src} alt={alt} />
  )
}

export default Avatar
