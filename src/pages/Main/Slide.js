import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide({ sliders, GoToServey }) {
  return (
    <Container>
      <SlideTitle>인기 서비스</SlideTitle>
      <StyledSlider {...settings}>
        {sliders.map((slider, i) => {
          const { image, name, id } = slider;
          return (
            <CardBox key={i} onClick={() => GoToServey(id)}>
              <CardImg alt="인기 서비스" src={image} />
              <CardText>{name}</CardText>
            </CardBox>
          );
        })}
      </StyledSlider>
    </Container>
  );
}
export default Slide;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 2,
  centerMode: true,
  centerPadding: '0px',
};
const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
`;
const Container = styled.div`
  margin-right: 25px;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1600px;
    margin: 0 auto;
  }
  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
`;
const CardBox = styled.div`
  cursor: pointer;
  outline: none;
`;
const CardImg = styled.img`
  width: 380px;
  height: 190px;
  border-radius: 10px;
  &:hover {
    opacity: 0.3;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const CardText = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
