import { css } from 'styled-components';

const theme = Object.freeze({
  color: {
    //회사별 대표 색입니다
    CE: '#8CC747',
    CARONE: '#F6B436',
    CARONE2: '#F6B436',
    SG: '#00B8D6',
    TOTAL: '#217A54',
    SI: '#004686',
    HJ: '#ff9900',
    HOME: '#3E3E43',
    ES: '#c1deef',

    //Gray
    mainGray: '#3E3E43',
    deepGray: '#666666',
    lightGray: '#C7C7C7',

    black: '#202020',
    white: '#FFFFFF',
  },

  breakpoints: {
    tablet: 768,
    desktop: 1024,
    widescreen: 1440,
  },

  font: {
    FONT60B: css`
      font-size: 6rem;
      font-weight: 700;
    `,
    FONT45B: css`
      font-size: 4.5rem;
      font-weight: 700;
    `,
    FONT45SB: css`
      font-size: 4.5rem;
      font-weight: 600;
    `,
    FONT36B: css`
      font-size: 3.6rem;
      font-weight: 700;
    `,
    FONT32B: css`
      font-size: 3.2rem;
      font-weight: 700;
    `,
    FONT28B: css`
      font-size: 2.8rem;
      font-weight: 700;
    `,
    FONT28SB: css`
      font-size: 2.8rem;
      font-weight: 600;
    `,
    FONT28: css`
      font-size: 2.8rem;
      font-weight: 400;
    `,
    FONT24B: css`
      font-size: 2.4rem;
      font-weight: 700;
    `,
    FONT24SB: css`
      font-size: 2.4rem;
      font-weight: 600;
    `,
    FONT24: css`
      font-size: 2.4rem;
      font-weight: 400;
    `,
    FONT20B: css`
      font-size: 2rem;
      font-weight: 700;
    `,
    FONT20SB: css`
      font-size: 2rem;
      font-weight: 600;
    `,
    FONT20: css`
      font-size: 2rem;
      font-weight: 400;
    `,
    FONT20L: css`
      font-size: 2rem;
      font-weight: 300;
    `,
    FONT18B: css`
      font-size: 1.8rem;
      font-weight: 700;
    `,
    FONT18SB: css`
      font-size: 1.8rem;
      font-weight: 600;
    `,
    FONT18: css`
      font-size: 1.8rem;
      font-weight: 400;
    `,
    FONT18L: css`
      font-size: 1.8rem;
      font-weight: 300;
    `,
    FONT16B: css`
      font-size: 1.6rem;
      font-weight: 700;
    `,
    FONT16SB: css`
      font-size: 1.6rem;
      font-weight: 600;
    `,
    FONT16: css`
      font-size: 1.6rem;
      font-weight: 400;
    `,
    FONT14B: css`
      font-size: 1.4rem;
      font-weight: 700;
    `,
    FONT14: css`
      font-size: 1.4rem;
      font-weight: 400;
    `,
    FONT12SB: css`
      font-size: 1.2rem;
      font-weight: 600;
    `,
    FONT12: css`
      font-size: 1.2rem;
      font-weight: 400;
    `,
  },
});

export default theme;
