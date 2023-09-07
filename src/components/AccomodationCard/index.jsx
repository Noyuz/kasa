import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledAccomodationCard = styled.div`
  background-image: ${({ $picture }) =>
  `linear-gradient(180deg, rgba(0,0,0,0.01), rgba(0,0,0,0.6)), url(${$picture})`};
  background-size: cover;
  background-position: center;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Ajoute une transition douce */

  &:hover {
    box-shadow: 0 2px 8px #000;
    transform: scale(1.02);
  }

  p {
    margin: 0;
    padding: 16px;
    font-size: 18px;
    line-height: 24px;
  }
`

function AccomodationCard({id, title, picture}) {
  return (
    <Link to={`/accomodations/${id}`}>
    <StyledAccomodationCard $picture={picture}>
      <p>{title}</p>
    </StyledAccomodationCard>
    </Link>
  );
}

export default AccomodationCard
