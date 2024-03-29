import styled from 'styled-components';
import { WELCOME_BOX_CONTENTS } from '../../constants/WELCOME_BOX_CONTENTS';

const WelcomeBox = ({ company }) => {
  return (
    <S.Container>
      <S.WelcomeText $color={company}>WELCOME!</S.WelcomeText>
      <S.CompanyInfo>{WELCOME_BOX_CONTENTS[company]}</S.CompanyInfo>
    </S.Container>
  );
};

export default WelcomeBox;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    width: 100%;
    height: 18rem;
    padding: 6rem 20rem;
    opacity: 0.8;
    background-color: ${({ theme }) => theme.color.mainGray};

    @media (max-width: 1024px) {
      padding: 0.4rem 6.5rem;
      gap: 3rem;
    }
  `,

  WelcomeText: styled.p`
    color: ${({ theme, $color }) => theme.color[$color]};
    ${({ theme }) => theme.font.FONT45B};

    @media (max-width: 1024px) {
      padding: 0.4rem 6.5rem;
      ${({ theme }) => theme.font.FONT24B};
    }
  `,

  CompanyInfo: styled.p`
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT18};

    @media (max-width: 1024px) {
      padding: 0.4rem 6.5rem;
      ${({ theme }) => theme.font.FONT10};
    }
  `,
};
