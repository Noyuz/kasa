import styled from 'styled-components'
import colors from '../../utils/style/colors'

const TagStyled = styled.span`
  display: inline-block;
  padding: 0.6em 2em;
  background-color: ${colors.primary};
  border-radius: 15px;
  margin-right: 1em;
  margin-top: 2em;
  font-size: 0.8em;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.1em;
  `

function Tag({ children }) {
  return (
    <TagStyled>{children}</TagStyled>
  )
}

export default Tag
