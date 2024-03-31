import styled from 'styled-components';
import { media } from '../../styles/utils/mediaQuery';

const QnAButton = () => {
  return (
    <div>
      <S.Container>
        <img src="/src/assets/icons/vector.svg" />
        <span>Q n A</span>
      </S.Container>
    </div>
  );
};

export default QnAButton;

const S = {
  Container: styled.button`
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.6rem;
    height: 3.6rem;
    background-color: ${({ theme }) => theme.color.white};
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.25));
    border-radius: 50%;

    span {
      display: none;
      margin-left: 1rem;
      ${({ theme }) => theme.font.FONT16SB};

      ${media.desktop`
        display: inline;
      `}
    }

    ${media.desktop`
      width: 10.8rem;
      height: 3.8rem;
      border-radius: 80px;
    `}
  `,
};
