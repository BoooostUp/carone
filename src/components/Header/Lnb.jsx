import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { LNB_CONTENTS } from '../../constants/LNB_CONTENTS';

const Lnb = ({ company, ...props }) => {
  return (
    <S.Container $company={company} {...props}>
      <S.IntroduceContainer>
        {LNB_CONTENTS.INFO.map((item, index) => (
          <Link to={`info/${item.link}`} key={index}>
            <S.LnbButton>{item.menu}</S.LnbButton>
          </Link>
        ))}
      </S.IntroduceContainer>
      <S.ContentsContainer>
        {LNB_CONTENTS[company].map((item, index) => (
          <Link to={`business/${item.link}`} key={index}>
            <S.LnbButton>{item.menu}</S.LnbButton>
          </Link>
        ))}
      </S.ContentsContainer>
    </S.Container>
  );
};

export default Lnb;

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 13rem;
    padding: 1.5rem;
    position: fixed;
    animation: ${slide} 0.5s ease;
    @media (max-width: 1024px) {
      display: none;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme, $company }) => theme.color[$company]};
    }
  `,
  IntroduceContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: calc(100% - 58rem);
  `,
  ContentsContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: calc(100% - 44rem);
  `,
  LnbButton: styled.button`
    text-align: start;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT14};
    text-shadow: 1px 1px 1px gray;
    line-height: 1.8;
    position: relative;
    z-index: 1;

    &:hover {
      text-decoration: underline;
    }
  `,
};
