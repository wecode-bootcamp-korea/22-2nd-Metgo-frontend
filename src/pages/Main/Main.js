import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import Category from './Category';
import { CATEGORY } from './CategoryListData';

const Main = () => {
  const [sliders, setSliders] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);

  useEffect(() => {
    fetch(`http://10.58.0.252:8000/${selectedCategory}`)
      .then(res => res.json())
      .then(data => setSliders(data.services));
  }, [selectedCategory]);

  return (
    <>
      <Header>
        <MainTop>
          <MainTopTitle>맺고</MainTopTitle>
          <MainTopText>생활의 고수들과 새로운 인연을 맺어보세요!</MainTopText>
        </MainTop>
        <Category
          categories={CATEGORY}
          setSelectedCategory={setSelectedCategory}
        />
      </Header>
      {sliders.length !== 0 && <Slide sliders={sliders} />}
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
  margin-top: 150px;
  align-items: center;
  z-index: 9999;
`;

const MainTopTitle = styled.h1`
  padding: 10px;
  color: white;
  font-size: 50px;
  font-weight: bolder;
`;

const MainTopText = styled.p`
  color: white;
  font-size: 20px;
`;
