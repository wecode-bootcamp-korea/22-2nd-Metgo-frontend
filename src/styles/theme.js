import { css } from 'styled-components';

const theme = {
  flex: (justify = null, align = null, direction = null) => {
    return css`
      display: flex;
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${direction};
    `;
  },
  color: (color = null, weight = null) => {
    return css`
      color: #323232;

      &:hover {
        color: ${color};
        font-weight: ${weight};
      }
    `;
  },

  background: '#FFFEFC',
  white: '#FFFFFF',
  vermilion: '#ff7425',
  orange: '#FF9900',
  opacityOrange: 'rgba(242,153,74,0.5)',
  yellow: '#FFD66C',
  grey: 'rgba(196,196,196,0.3)',
  middleGrey: 'rgba(65,65,65,0.4)',
  deepGrey: '#828282',
  lightOrange: 'rgba(255,195,170,0.3)',
  fontColor: '#2D2B2B',
  fontTitle: "'Alata', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
};

export default theme;
