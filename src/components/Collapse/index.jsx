import { useState, useRef, useEffect } from "react";
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import arrow from '../../assets/images/arrow.png'

const StyledCollapse = styled.div`
  margin-bottom: 30px;
`

const StyledCollapseTop = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 32px;
  color: white;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  font-size: 24px;
  position: relative;
  z-index: 2;

  img {
    transition: transform 0.7s;
    transform: ${props => props.open ? 'rotate(0deg)' : 'rotate(180deg)'};
  }

  p {
    margin: 5px 0;
  }
`

const StyledCollapseContent = styled.div`
  opacity: ${props => props.open ? '1' : '0'};
  padding: ${props => props.open ? '16px 32px' : '0 32px'};
  overflow: hidden;
  transition: all 0.7s;
  margin-top: -8px;
  border-radius: 0 0 10px 10px;
  color: ${colors.primary};
  background-color: #F6F6F6;
  font-size: 24px;
  p, span {
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  `

function Collapse({title, content, open = false}) {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef(null); // Référence à StyledCollapseContent

  let formattedContent = content;

  // Vérifiez si content est un tableau et le formate si nécessaire
  if (Array.isArray(content)) {
    formattedContent = content.map((item, index) => (
      <span key={index}>{item}<br/></span>
    ));
  }

  useEffect(() => {
    // Calculez la hauteur du contenu réellement rendu
    const contentHeight = contentRef.current ? (contentRef.current.scrollHeight + 32) + 'px' : '0';

    // Mettez à jour la hauteur de StyledCollapseContent
    contentRef.current.style.height = isOpen ? contentHeight : '0';
  }, [isOpen, content]);

  return (
    <StyledCollapse>
      <StyledCollapseTop open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <img src={arrow} alt="" />
      </StyledCollapseTop>
      <StyledCollapseContent open={isOpen} ref={contentRef}>
        <p>{formattedContent}</p>
      </StyledCollapseContent>
    </StyledCollapse>
  )
}

export default Collapse;
