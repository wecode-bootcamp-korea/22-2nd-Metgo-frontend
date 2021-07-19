import styled from 'styled-components';

function GosuPhotos({ uploadedImg }) {
  return (
    <PhotosWrapper>
      <GosuMediaWrapper>
        <h2>사진 및 동영상</h2>
        <MediaViewBox>
          <MediaList>
            {uploadedImg.map((img, index) => {
              return (
                <li key={index}>
                  <img alt="리뷰사진" src={img} />
                </li>
              );
            })}
          </MediaList>
          <ViewAllBox>
            <ViewAllBtn>더보기</ViewAllBtn>
          </ViewAllBox>
        </MediaViewBox>
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

const MediaViewBox = styled.div`
  max-height: 700px;
`;

const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;

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
`;

export default GosuPhotos;
