import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LNB_CONTENTS } from '../../constants/LNB_CONTENTS';

const Lnb = ({ company, ...props }) => {
  return (
    <S.WithGnb>
      <S.Container company={company} {...props}>
        <S.IntroduceContainer>
          {LNB_CONTENTS.OUR_COMPANY.map((item, index) => (
            <Link to={item.link} key={index}>
              <S.LnbButton>{item.menu}</S.LnbButton>
            </Link>
          ))}
        </S.IntroduceContainer>
        <S.Contents>
          {LNB_CONTENTS[company].map((item, index) => (
            <Link to={item.link} key={index}>
              <S.LnbButton key={index}>{item.menu}</S.LnbButton>
            </Link>
          ))}
        </S.Contents>
      </S.Container>
    </S.WithGnb>
  );
};

export default Lnb;

const S = {
  WithGnb: styled.div`
    width: 100%;
    max-height: 50rem;
    display: flex;
    justify-content: center;
    position: relative;
    @media (max-width: 1024px) {
      display: none;
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    width: 100%;
    max-width: 130rem;
    padding: 1.5rem 6rem;
    position: absolute;
    left: calc(100% - 61rem);

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.6;
      background-color: ${({ theme, company }) => theme.color[company]};
    }
  `,
  IntroduceContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Contents: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 4.5rem;
  `,
  LnbButton: styled.button`
    text-align: start;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT14};
    line-height: 1.8;
    position: relative;
    z-index: 1;

    &:hover {
      text-decoration: underline;
    }
  `,
};
