import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GosuList from './GosuList';
import { BASE_URL } from '../../config';

const FindGosu = () => {
  const [gosuLists, setGosuLists] = useState([]);
  const [selectedGosu, setSelectedGosu] = useState([]);
  const [serviceId, setServiceId] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    fetch(`${BASE_URL}/applications/services/17/masters?user_id=15`)
      .then(res => res.json())
      .then(data => setGosuLists(data.results));
  }, [selectedGosu]);
  // const GoToGosuDetail = serviceId => {
  //   setServiceId(serviceId);
  //   return history.push(`/services/${serviceId}/master`);
  // };

  return (
    <FindGosuForm>
      <Header>
        <GosuTitle>고수 찾기</GosuTitle>
        <GosuTitleSub>지역, 카테고리</GosuTitleSub>
        <FilterGosuForm>
          <TotalGosu>100 명의 고수</TotalGosu>
          <FilterGosu>별점순</FilterGosu>
        </FilterGosuForm>
      </Header>
      <GosuList gosuLists={gosuLists} />
    </FindGosuForm>
  );
};
export default FindGosu;

const FindGosuForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
`;

const Header = styled.div`
  width: 790px;
`;

const FilterGosuForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px 20px 0px;
`;

const TotalGosu = styled.p`
  font-size: 15px;
`;

const FilterGosu = styled.p`
  font-size: 15px;
`;

const GosuTitle = styled.h1`
  font-size: 40px;
  font-weight: bolder;
`;

const GosuTitleSub = styled.p`
  margin: 30px 0px 20px 0px;
  font-size: 15px;
  color: gray;
`;
