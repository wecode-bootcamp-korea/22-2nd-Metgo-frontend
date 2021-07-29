import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RatingStars } from '../../RatingStars';
import { BASE_URL } from '../../config';

function GosuList({ setReviewLength }) {
  const [gosuLists, setGosuLists] = useState([]);
  const location = useLocation();
  const params = useParams();

  const { pathname } = location;
  const history = useHistory();

  useEffect(() => {
    setReviewLength(gosuLists.length);
  }, [gosuLists, setReviewLength]);

  useEffect(() => {
    const { id } = params;
    fetch(`${BASE_URL}/applications/services/${id}/masters`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        setGosuLists(res.results);
      });
  }, []);

  const goToGosuDetail = id => {
    history.push(`/gosudetail/${id}`);
  };

  return (
    <GosuListWrap>
      {gosuLists.map((gosuList, i) => {
        const {
          image,
          master_name,
          introduction,
          average_rating,
          review,
          master_id,
          hired,
        } = gosuList;
        console.log(gosuList);
        return (
          <FindGosu
            key={i}
            name={master_name}
            onClick={() => goToGosuDetail(master_id)}
          >
            <GosuListImg alt="고수 리스트 사진" src={image} />
            <GosuListForm>
              <GosuListTitle>{master_name}</GosuListTitle>
              <GosuListContent>{introduction}</GosuListContent>
              <GosuListReviewForm>
                {average_rating && (
                  <GosuListStar>
                    별점 : {RatingStars(average_rating)}
                  </GosuListStar>
                )}
                <GosuListHire>{hired}회 고용됨</GosuListHire>
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
  width: 100%;
  padding: 0 0 1rem;
  border: none;
  border-radius: 5px;
`;

const FindGosu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #f4f4f4;

  &:hover {
    background: rgb(248, 248, 248);
    box-shadow: rgb(248 248 248) -24px 0px 0px 0px,
      rgb(248 248 248) 24px 0px 0px 0px;
    cursor: pointer;
  }
`;

const GosuListImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const GosuListForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const GosuListTitle = styled.h2`
  font-size: 20px;
  font-weight: bolder;
`;

const GosuListContent = styled.p`
  margin-top: 20px;
  color: gray;
`;

const GosuListReviewForm = styled.div`
  display: flex;
  align-items: center;
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
  margin-top: 20px;
  font-size: 15px;
  color: gray;
`;
