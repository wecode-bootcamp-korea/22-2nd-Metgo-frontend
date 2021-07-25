import React, { useState } from 'react';
import styled from 'styled-components';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function UserMy() {
  const [isWidth, setIsWidth] = useState(false);

  const width = () => {
    setIsWidth(!isWidth);
  };

  return (
    <Container>
      <div>
        <h2>안녕하세요, 성정준님</h2>
        <p className="budget">받은 견적</p>
        <div className="text" onClick={width}>
          <p className="text2">요청한 고수 리스트</p>
          {/* <IoIosArrowUp className="listIcon" /> */}
          {isWidth ? (
            <IoIosArrowUp className="listIcon" />
          ) : (
            <IoIosArrowDown className="listIcon" />
          )}
        </div>
        <ul className={isWidth ? 'active' : null}>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
          <li>
            <img src="/images/user_img1.jpg" alt="" />
            <p>성정준</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default UserMy;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      font-size: 15px;
      margin-bottom: 30px;
      font-weight: bold;
      padding: 0 20px;
    }
    .budget {
      font-size: 15px;
      margin-bottom: 30px;
    }
    .text {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      margin-bottom: 20px;

      .text2 {
        cursor: pointer;
        padding-right: 5px;
        font-size: 15px;
      }
      .listIcon {
        margin-bottom: 3px;
      }
    }
    ul {
      width: 100%;
      height: 100px;
      overflow-y: hidden;

      &.active {
        height: auto;
      }

      li {
        padding: 10px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #eee;

        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          color: blue;
          margin-top: 2px;
          margin-left: 10px;
        }
      }
    }
  }
`;
