export const SIGNUP_INFO = {
  status: '회원가입',
  engStatus: 'signup',
  idx: 0,
  paddingBig: false,
  bottomText: '계정이 없으신가요?',
  radioBtn: [
    {
      id: 0,
      text: '고객',
    },
    {
      id: 1,
      text: '고수',
    },
  ],
  inputLists: [
    {
      text: '이름',
      type: 'text',
      value: 'name',
      placeholder: '이름을 입력해주세요',
    },
    {
      text: '이메일',
      type: 'text',
      value: 'email',
      placeholder: `'@' 를 포함한 이메일을 입력해주세요`,
    },
    {
      text: '비밀번호',
      type: 'password',
      value: 'password',
      placeholder: '6~12자리 사이의 비밀번호을 입력해주세요',
    },
  ],
  btnLists: [
    {
      id: 0,
      text: '회원가입',
      bg: '#00a18c',
      blackFont: false,
      name: 'signup',
    },
    {
      id: 1,
      text: 'Facebook으로 회원가입',
      bg: '#1876f1',
      blackFont: false,
    },
  ],
};
export const LOGIN_INFO = {
  status: '로그인',
  engStatus: 'login',
  idx: 1,
  paddingBig: true,
  bottomText: '비밀번호를 잊어버리셨나요?',
  radioBtn: [
    {
      id: 0,
      text: '고객',
    },
    {
      id: 1,
      text: '고수',
    },
  ],
  inputLists: [
    {
      text: '이메일',
      type: 'text',
      value: 'email',
      placeholder: '이메일을 입력해주세요',
    },
    {
      text: '비밀번호',
      type: 'password',
      value: 'password',
      placeholder: '비밀번호을 입력해주세요',
    },
  ],
  btnLists: [
    {
      id: 0,
      text: '이메일 로그인',
      bg: '#00a18c',
      blackFont: false,
      name: 'email',
    },
    // {
    //   id: 1,
    //   text: '카카오톡 로그인',
    //   bg: '#fee500',
    //   blackFont: true,
    // },
    {
      id: 1,
      text: '구글 로그인',
      // bg: '#1876f1',
      bg: 'rebeccapurple',
      blackFont: false,
      name: 'google',
    },
  ],
};
