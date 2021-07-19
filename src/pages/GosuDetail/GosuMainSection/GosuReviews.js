import styled from 'styled-components';

import { BsStarFill, BsStarHalf } from 'react-icons/bs';

function GosuReviews() {
  return (
    <ReviewWrapper>
      <GosuReviewWrapper>
        <h2>리뷰</h2>
        <ReviewSummaryBox>
          <ReviewSummary>
            <ReviewAvg>4.7</ReviewAvg>
            <ReviewInfo>
              <StarGrade>
                {/* 리뷰 데이터 받으면 수정 예정 */}
                <BsStarFill color="#FFD85C" size="20" />
                <BsStarFill color="#FFD85C" size="20" />
                <BsStarFill color="#FFD85C" size="20" />
                <BsStarFill color="#FFD85C" size="20" />
                <BsStarHalf color="#FFD85C" size="20" />
              </StarGrade>
              <ReviewTotal>907개 리뷰</ReviewTotal>
            </ReviewInfo>
          </ReviewSummary>
        </ReviewSummaryBox>
        <ReviewShowBox>
          <ReviewList>
            <ReviewCard>
              <UserReviewInfo>
                <UserName>이**</UserName>
                <UserStarGrade>
                  <BsStarFill color="#FFD85C" size="15" />
                  <BsStarFill color="#FFD85C" size="15" />
                  <BsStarFill color="#FFD85C" size="15" />
                  <BsStarFill color="#FFD85C" size="15" />
                  <BsStarFill color="#FFD85C" size="15" />
                </UserStarGrade>
                <UserPostDate>2021.07.18</UserPostDate>
              </UserReviewInfo>
              <UserReviewTextBox>
                <p>
                  정말 깨끗하게 잘 해주셨어요! 화장실 곰팡이 관리법에 대해서도
                  설명해주시고 감사합니다.~~! 다음에 부분청소도 의뢰하고 싶네요
                  ㅎㅎ
                </p>
              </UserReviewTextBox>
            </ReviewCard>
          </ReviewList>
          <ReviewMoreBox>
            <ReviewMoreBtn>리뷰 더보기</ReviewMoreBtn>
          </ReviewMoreBox>
        </ReviewShowBox>
      </GosuReviewWrapper>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.section`
  margin-bottom: 60px;
`;

const GosuReviewWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  h2 {
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 500;
  }
`;

const ReviewSummaryBox = styled.div``;
const ReviewSummary = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #dbdbdb;
`;

const ReviewAvg = styled.span`
  float: left;
  left: 20%;
  font-size: 50px;
  font-weight: 600;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  float: left;
  left: 80%;
`;

const StarGrade = styled.ul`
  margin-bottom: 5px;
`;

const ReviewTotal = styled.span`
  font-size: 15px;
`;

const ReviewShowBox = styled.div`
  display: inline-block;
  width: 100%;
`;

const ReviewList = styled.ul``;

const ReviewCard = styled.li`
  padding: 30px 0;
`;

const UserReviewInfo = styled.div`
  margin-bottom: 10px;
`;

const UserName = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const UserStarGrade = styled.div`
  display: inline;
  margin-right: 10px;
  width: 75px;
`;

const UserPostDate = styled.span`
  color: darkgray;
`;

const UserReviewTextBox = styled.div`
  p {
    color: #737373;
    line-height: 1.5;
  }
`;

const ReviewMoreBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 50px 0;
`;

const ReviewMoreBtn = styled.button`
  padding: 13px 30px;
  border: 1px solid #dbdbdb;
  border-radius: 40px;
  background-color: transparent;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bold;
`;

export default GosuReviews;
