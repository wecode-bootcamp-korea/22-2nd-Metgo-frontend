import styled from 'styled-components';

import GosuOverview from './GosuOverview';
import GosuNav from './GosuNav';
import GosuInfoBox from './GosuInfoBox';
import GosuPhotos from './GosuPhotos';
import GosuReviews from './GosuReviews';
import { BsStarFill } from 'react-icons/bs';

function GosuMainSection({ gosuDetails }) {
  const { rating } = gosuDetails;
  const totalFilled = Math.ceil(rating);
  const RatingStar = () =>
    [...Array(totalFilled).keys()].map(key => (
      <BsStarFill
        key={key}
        isFilled={key < totalFilled}
        color="#FFD85C"
        size="17"
      />
    ));
  return (
    <GosuInfo>
      <GosuOverview gosuDetails={gosuDetails} RatingStar={RatingStar} />
      <GosuNav reviewNum={gosuDetails.review_counts} />
      <GosuInfoBox gosuDetails={gosuDetails} />
      <GosuPhotos uploadedImg={gosuDetails.uploaded_image} />
      <GosuReviews />
    </GosuInfo>
  );
}

const GosuInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

export default GosuMainSection;
