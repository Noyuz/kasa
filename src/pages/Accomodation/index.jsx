import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel';
import accomodations from '../../data/accomodations.json'
import AccomodationDetails from '../../components/AccomodationDetails';
import Collapse from '../../components/Collapse';
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'

const CollapseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .collapse-wrapper {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .collapse-wrapper {
      width: 100%;
    }
  }
`

function Accomodation() {
  const { id } = useParams()
  const accomodation = accomodations.find(accomodation => accomodation.id === id)

  if (!accomodation) {
    // je redirige vers la page 404
    return <Navigate to="/*" />
  }

  return (
    <div>
      <Carousel images={accomodation.pictures}/>
      <AccomodationDetails
        title={accomodation.title}
        location={accomodation.location}
        tags={accomodation.tags}
        host={accomodation.host.name}
        hostPhoto={accomodation.host.picture}
        rating={accomodation.rating}/>

      <CollapseContainer>
        <div className='collapse-wrapper'>
          <Collapse title={"Description"} content={accomodation.description} open />
        </div>
        <div className='collapse-wrapper'>
          <Collapse title={"Equipements"} content={accomodation.equipments} open />
        </div>
      </CollapseContainer>
    </div>
  )
}

export default Accomodation
