import styled from 'styled-components';

//   background-image: url('https://dmmj3ljielax6.cloudfront.net/upload/service/075c038f-1021-4184-b9aa-1e3a6fc145fc.jpg');

export const SurveyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
export const AboutImgBox = styled.div`
  width: 100%;
  height: 700px;
  margin-bottom: 100px;
`;
export const AboutImg = styled.div`
  width: 100%;
  height: 314px;
  background-image: url('https://dmmj3ljielax6.cloudfront.net/upload/service/075c038f-1021-4184-b9aa-1e3a6fc145fc.jpg');
  background-repeat: no-repeat;
`;
export const Others = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const SurveyBg = styled.div`
  width: 1200px;
  height: 650px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 3px solid #000;
`;
export const SurveyBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow: hidden;
`;

export const AboutWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;
  border: 3px solid red;
`;

export const AboutTop = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 60px;
`;

export const AboutBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ServeyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SurveyForm = styled.div`
  flex: 2;
  height: 500px;
  border: 3px solid rebeccapurple;
  padding: 30px;
`;

export const SurveyTextArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const PRCompany = styled.div`
  border: 2px solid #000;
  margin-left: 20px;
  padding: 10px;

  &:last-child {
    margin-top: 50px;
  }
`;
export const PRQuestion = styled.div`
  margin: 10px 0;
`;
export const PRAnswer = styled.div`
  line-height: 1.3;
  letter-spacing: 1.3;
`;
export const RequestProcessBox = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fafafa;
`;
export const RequestProcessBg = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  border: 1px solid red;
  margin: 0 auto;
`;
export const RequestProcessTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
export const RequestProcess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;
export const RequestSteps = styled.div`
  width: 200px;
  height: 220px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  flex-direction: column;

  .icons {
    font-size: 30px;
  }
`;
