import styled from 'styled-components';

function GosuNav({ reviewNum }) {
  const navList = ['고수 정보', '사진/동영상', `리뷰 ${reviewNum}`];

  return (
    <GosuStickyNav>
      {navList.map((name, index) => {
        return <NavTitle key={index}>{name}</NavTitle>;
      })}
    </GosuStickyNav>
  );
}

const GosuStickyNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  position: sticky;
  width: 100%;
  top: 0;
  padding-top: 10px;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  z-index: 2;
`;

const NavTitle = styled.li`
  padding: 10px 0 15px 0;
  color: #737373;
  font-size: 16px;

  & + li {
    margin-left: 20px;
  }

  &:hover {
    border-bottom: 2px solid black;
    color: black;
    font-weight: bold;
  }
`;

export default GosuNav;
