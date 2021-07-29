import styled, { css } from 'styled-components';

function GosuPhotos({ uploadedImg, handleMoreBtn, closed }) {
  return (
    <PhotosWrapper>
      <GosuMediaWrapper>
        <h2>사진 및 동영상</h2>
        <MediaList isClosed={closed.media}>
          {uploadedImg.map((img, index) => {
            return (
              <li key={index}>
                <img alt="리뷰사진" src={img} />
              </li>
            );
          })}
        </MediaList>
        <ViewAllBox>
          <ViewAllBtn name="media" onClick={e => handleMoreBtn(e.target.name)}>
            {closed.media ? '접기' : '더보기'}
          </ViewAllBtn>
        </ViewAllBox>
      </GosuMediaWrapper>
    </PhotosWrapper>
  );
}

const PhotosWrapper = styled.section`
  margin: 60px 0;
  border-bottom: 1px solid #dbdbdb;
`;

const GosuMediaWrapper = styled.div`
  h2 {
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 500;
  }
`;

const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${({ isClosed }) =>
    !isClosed &&
    css`
      max-height: 475px;
      overflow: hidden;
    `}

  li {
    margin: 5px;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border-radius: 5px;
    }
  }
`;

const ViewAllBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 50px 0;
`;

const ViewAllBtn = styled.button`
  padding: 13px 30px;
  border: 1px solid #dbdbdb;
  border-radius: 40px;
  background-color: transparent;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;

export default GosuPhotos;
