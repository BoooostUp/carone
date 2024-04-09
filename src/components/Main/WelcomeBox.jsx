import styled from 'styled-components';
import { WELCOME_BOX_CONTENTS } from '../../constants/WELCOME_BOX_CONTENTS';

const WelcomeBox = ({ company }) => {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.WelcomeText $color={company}>WELCOME!</S.WelcomeText>
        <S.InfoWrapper>
          <S.CompanyInfo>{WELCOME_BOX_CONTENTS[company]}</S.CompanyInfo>{' '}
        </S.InfoWrapper>
      </S.TextWrapper>
    </S.Container>
  );
};

export default WelcomeBox;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 13rem;
    padding: 0 20rem;
    opacity: 0.8;
    background-color: ${({ theme }) => theme.color.mainGray};

    @media (max-width: 1024px) {
      padding: 0;
      height: 10rem;
    }
  `,

  TextWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  `,

  InfoWrapper: styled.div`
    overflow: hidden;
  `,

  WelcomeText: styled.p`
    color: ${({ theme, $color }) => theme.color[$color]};
    ${({ theme }) => theme.font.FONT45B};

    @media (max-width: 1024px) {
      padding: 0.4rem 6.5rem;
      ${({ theme }) => theme.font.FONT20B};
    }
  `,

  CompanyInfo: styled.p`
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT18};

    @media (max-width: 1024px) {
      padding: 0.4rem 6.5rem;
      ${({ theme }) => theme.font.FONT12};
    }
  `,
};
