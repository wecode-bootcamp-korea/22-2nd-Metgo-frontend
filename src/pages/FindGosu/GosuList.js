import React from 'react';
import styled from 'styled-components';

function GosuList({ gosuLists }) {
  return (
    <GosuListWrap>
      {gosuLists.map((gosuList, i) => {
        const { image, name, introduction, rating, review } = gosuList;
        return (
          <FindGosu key={i}>
            <GosuListImg alt="고수 리스트 사진" src={image} />
            <GosuListForm>
              <GosuListTitle>{name}</GosuListTitle>
              <GosuListContent>{introduction}</GosuListContent>
              <GosuListReviewForm>
                <GosuListStar>별점 : {rating}</GosuListStar>
                <GosuListHire>2,222회 고용</GosuListHire>
              </GosuListReviewForm>
              <GosuListComment>리뷰 개수 : {review}</GosuListComment>
            </GosuListForm>
          </FindGosu>
        );
      })}
    </GosuListWrap>
  );
}
export default GosuList;

const GosuListWrap = styled.div`
  margin-top: 30px;
`;

const FindGosu = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid #f4f4f4;
`;

const GosuListImg = styled.img`
  width: 130px;
  height: 130px;
  margin: 0 20px 30px 0;
  border: 1px solid gray;
  border-radius: 10px;
`;

const GosuListForm = styled.div`
  margin-left: 10px;
`;

const GosuListTitle = styled.h2`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bolder;
`;

const GosuListContent = styled.p`
  margin-top: 10px;
  color: gray;
`;

const GosuListReviewForm = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const GosuListStar = styled.div`
  font-size: 15px;
`;

const GosuListHire = styled.h2`
  margin-left: 20px;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bolder;
`;

const GosuListComment = styled.h3`
  margin-top: 10px;
  font-size: 15px;
  color: gray;
`;
