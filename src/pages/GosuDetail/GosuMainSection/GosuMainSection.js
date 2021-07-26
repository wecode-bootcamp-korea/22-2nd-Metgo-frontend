import styled from 'styled-components';

import GosuOverview from './GosuOverview';
import GosuNav from './GosuNav';
import GosuInfoBox from './GosuInfoBox';
import GosuPhotos from './GosuPhotos';
import GosuReviews from './GosuReviews';
import { BsStarFill } from 'react-icons/bs';
import { useState } from 'react';

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

  const [closed, setClosed] = useState({ desc: false, media: false });

  const handleMoreBtn = name => {
    setClosed({ [name]: !closed[name] });
  };

  return (
    <GosuInfo>
      <GosuOverview gosuDetails={gosuDetails} RatingStar={RatingStar} />
      <GosuNav reviewNum={gosuDetails.review_counts} />
      <GosuInfoBox
        gosuDetails={gosuDetails}
        handleMoreBtn={handleMoreBtn}
        closed={closed}
      />
      <GosuPhotos
        uploadedImg={gosuDetails.uploaded_image}
        handleMoreBtn={handleMoreBtn}
        closed={closed}
      />
      <GosuReviews />
    </GosuInfo>
  );
}

const GosuInfo = styled.div`
  display: block;
  max-width: 800px;
`;

export default GosuMainSection;
