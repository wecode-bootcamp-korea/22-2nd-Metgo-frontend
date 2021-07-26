import React from 'react';

import styled, { keyframes } from 'styled-components';

function Loding() {
  return (
    <Container>
      <TextBox>
        <H1>성정준님께 딱 맞는 고수들을 찾고있습니다</H1>
        <TextImg src="/images/koala.png" alt="koala" />
      </TextBox>
      <Loader>
        <Outer></Outer>
        <Middle></Middle>
        <Inner></Inner>
        <Dot></Dot>
      </Loader>
    </Container>
  );
}

export default Loding;

const loading = keyframes`
    0% { transform : rotate(0deg)}
    100% { transform : rotate(360deg)}
`;
const jumping = keyframes`
    0% { transform : translateY(0)}
    50% { transform : translateY(-5px)}
    100% { transform : translateY(0)}
  `;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 400px;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  animation: ${jumping} 1s linear infinite;
`;
const H1 = styled.h1`
  font-size: 25px;
`;

const Loader = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;
const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-left: 5px solid #eb4d4d;
  border-right: 5px solid #eb4d4d;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`;
const Middle = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  bottom: 30px;
  right: 30px;
  border-left: 5px solid rebeccapurple;
  border-right: 5px solid rebeccapurple;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite reverse;
`;
const Inner = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  bottom: 60px;
  right: 60px;
  border-left: 5px solid #fae4ad;
  border-right: 5px solid #fae4ad;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`;
const Dot = styled.div`
  position: absolute;
  top: 90px;
  bottom: 90px;
  left: 90px;
  right: 90px;
  background-color: rebeccapurple;
  border-radius: 50%;
`;
