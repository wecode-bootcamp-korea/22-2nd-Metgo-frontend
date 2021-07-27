import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Slide from './Slide';
import Category from './Category';
import { CATEGORY } from './CategoryListData';
import { BASE_URL } from '../../config';

const Main = () => {
  const [sliders, setSliders] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [serviceId, setServiceId] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch(`${BASE_URL}/${selectedCategory}`)
      .then(res => res.json())
      .then(data => setSliders(data.services));
  }, [selectedCategory]);

  const GoToServey = serviceId => {
    setServiceId(serviceId);
    return history.push(`/services/${serviceId}`);
  };

  return (
    <>
      <Header>
        <MainTop>
          <MainTopTitle src="../images/Realwhite.png" />
          <MainTopText>생활의 고수들과 새로운 인연을 맺어보세요!</MainTopText>
        </MainTop>
        {selectedCategory.length !== 0 && (
          <Category
            categories={CATEGORY}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </Header>
      {sliders.length !== 0 && (
        <Slide sliders={sliders} GoToServey={GoToServey} />
      )}
    </>
  );
};

export default Main;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  background-image: url('../images/main.png');
  background-position: center;
  background-repeat: no-repeat;
  animation: gradient 9s ease-in-out infinite;
  animation: slidein 30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  z-index: 1;

  &::before {
    position: absolute;
    width: 100%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
  @keyframes slidein {
    from {
      background-position: top;
      background-size: 2000px;
    }
    to {
      background-position: -100px -650px;
      background-size: 2200px;
    }
  }
`;

const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 130px;
  align-items: center;
  z-index: 9999;
`;

const MainTopTitle = styled.img`
  display: flex;
  width: 250px;
  padding: 10px;
  z-index: 9999;
`;

const MainTopText = styled.p`
  margin-top: 15px;
  color: white;
  font-size: 20px;
`;
