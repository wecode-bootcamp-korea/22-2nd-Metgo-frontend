// 성별 나이 지역 경력

// 남여
// 10 20 30 ~ 50
// 성동구
// 0 5 10 15
export const questionOne = {
  id: 0,
  Q1: `희망하는 고수의 성별은 무엇입니까?`,
  answer: ['무관', '남', '여'],
};

export const questionTwo = {
  id: 1,
  Q1: `희망하는 고수의 나이는 어떻게 되십니까?`,
  answer: ['무관', '20대', '30대', '40대', '50대'],
};

export const questionThree = {
  id: 2,
  Q1: `원하시는 고수의 경력은 어떻게 되십니까?`,
  answer: ['0~4년', '5~10년', '11~15년', '16~20년'],
};

export const surveyData = [
  {
    id: 0,
    Q1: `희망하는 고수의 성별은 무엇입니까?`,
    answer: ['무관', '남', '여'],
  },
  {
    id: 1,
    Q1: `희망하는 고수의 나이는 어떻게 되십니까?`,
    answer: ['무관', '20대', '30대', '40대', '50대'],
  },
  {
    id: 2,
    Q1: `원하시는 고수의 경력은 어떻게 되십니까?`,
    answer: ['0~4년', '5~10년', '11~15년', '16~20년'],
  },
];

export const surveyData2 = {
  id: 0,
  Q1: `희망하는 레슨 지역은 어디십니까?`,
  A: {
    select: '시/도',
    option: '서울',
  },
  B: {
    select: '시/군/구',
    option: [
      '강남구',
      '강동구',
      '강북구',
      '강서구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '도봉구',
      '동대문구',
      '동작구',
      '마포구',
      '서대문구',
      '서초구',
      '성동구',
      '성북구',
      '송파구',
      '양천구',
      '영등포구',
      '용산구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ],
  },
};
