import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  margin-bottom: 1em;
  display: flex;
  gap: 0.4em;

  .filled-icon, .empty-icon {
    font-size: 2em;
  }

  @media screen and (max-width: 768px) {
    .filled-icon,
    .empty-icon {
      font-size: 1em;
    }
    margin: 0;
  }
`;

function Rating({ rating }) {
  const maxRating = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={filledStar} className="filled-icon" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={emptyStar} className="empty-icon" />);
      }
    }
    return stars;
  };

  return <RatingWrapper>{renderStars()}</RatingWrapper>;
}

export default Rating;
