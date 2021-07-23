import React from 'react';
import { FaWpforms } from 'react-icons/fa';

// FaWpforms
// IoIosGitCompare
// TiContacts
// FaHandsHelping

import {
  SurveyContainer,
  AboutImgBox,
  AboutImg,
  AboutWrap,
  AboutTop,
  AboutBottom,
  Others,
  SurveyBg,
  SurveyBox,
  ServeyWrap,
  SurveyForm,
  SurveyTextArea,
  PRCompany,
  PRQuestion,
  PRAnswer,
  RequestProcessBox,
  RequestProcessBg,
  RequestProcessTitle,
  RequestProcess,
  RequestSteps,
} from './SurveyEle';

function Survey() {
  const arr = [1, 2, 3, 4];
  return (
    <SurveyContainer>
      <AboutImgBox>
        <AboutImg></AboutImg>
      </AboutImgBox>
      <Others>
        <SurveyBg>
          <SurveyBox>
            <AboutWrap>
              <AboutTop>결혼식 사회자</AboutTop>
              <AboutBottom>블라블라블라/블라블라블라</AboutBottom>
            </AboutWrap>
            <ServeyWrap>
              <SurveyForm></SurveyForm>
              <SurveyTextArea>
                <PRCompany>
                  <PRQuestion>숨고는 어떤 곳인가요?</PRQuestion>
                  <PRAnswer>
                    서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고
                    빠르게 연결해드리는 전문가 매칭 서비스입니다. 1분 내외의
                    요청서를 작성하면, 여러 고수님들이 맞춤형 견적을 보내드려요.
                    맘에 쏙 드는 고수의 맞춤형 서비스를 받아보세요.
                  </PRAnswer>
                </PRCompany>
                <PRCompany>
                  <PRQuestion>숨고는 어떤 곳인가요?</PRQuestion>
                  <PRAnswer>
                    서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고
                    빠르게 연결해드리는 전문가 매칭 서비스입니다. 1분 내외의
                    요청서를 작성하면, 여러 고수님들이 맞춤형 견적을 보내드려요.
                    맘에 쏙 드는 고수의 맞춤형 서비스를 받아보세요.
                  </PRAnswer>
                </PRCompany>
              </SurveyTextArea>
            </ServeyWrap>
          </SurveyBox>
        </SurveyBg>
        <RequestProcessBox>
          <RequestProcessBg>
            <RequestProcessTitle>
              요청서를 보낸 후 어떻게 진행되는지 알려드릴게요
            </RequestProcessTitle>
            <RequestProcess>
              {arr.map((el, i) => {
                return (
                  <RequestSteps key={i}>
                    <h2>dasd</h2>
                    <FaWpforms className="icons" />
                    <h3>asfsad</h3>
                    <p>asfas</p>
                  </RequestSteps>
                );
              })}
            </RequestProcess>
          </RequestProcessBg>
        </RequestProcessBox>
      </Others>
    </SurveyContainer>
  );
}

export default Survey;
