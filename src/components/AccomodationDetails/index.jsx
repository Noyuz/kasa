import Avatar from '../../components/Avatar'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const AccomodationDetailsStyled = styled.div`
  display: flex;
  color: ${colors.primary};
  justify-content: space-between;
  margin-bottom: 30px;
  h1 {
    font-size: 2.25em;
    margin-bottom: 0.25em;
  }

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    h1 {
      font-size: 1.5em;
    }

    .accomodation-details-right {
      flex-direction: row-reverse;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: right;
`

function AccomodationDetails ( { title, location, tags, host, hostPhoto, rating }) {
  const firstName = host.split(' ')[0]
  const lastName = host.split(' ')[1]

  return (
    <AccomodationDetailsStyled>
      <div>
        <h1>{title}</h1>
        <p>{location}</p>
        <div>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="accomodation-details-right">
        <AvatarWrapper>
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <Avatar src={hostPhoto} alt={host} />
        </AvatarWrapper>
        <Rating rating={rating} />
      </div>
    </AccomodationDetailsStyled>
  )
}

export default AccomodationDetails
