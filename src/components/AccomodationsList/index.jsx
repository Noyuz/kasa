import styled from 'styled-components'
import accomodations from '../../data/accomodations.json'
import AccomodationCard from '../AccomodationCard'

const StyledAccomodationsList = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: #F6F6F6;
  border-radius: 25px;
  margin: 30px 0;
  padding: 45px;
  @media (max-width: 768px) {
    background-color: white;
    margin: 20px 0;
    padding: 0;
    grid-gap: 20px;
  }
`

function AccomodationsList() {
  return (
    <StyledAccomodationsList>
      {accomodations.map((accomodation) => {
        return <AccomodationCard key={accomodation.id} id={accomodation.id} title={accomodation.title} picture={accomodation.pictures[0]} />
      })}
    </StyledAccomodationsList>
  )
}

export default AccomodationsList
