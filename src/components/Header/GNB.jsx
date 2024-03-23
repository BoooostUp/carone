import { useState } from 'react';
import styled, { css } from 'styled-components';
import LogoImage from '../../assets/images/Logo.webp';
import { GNB_CONTENTS } from '../../constants/GNB_CONTENTS';

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    max-width: 160rem;
    justify-content: space-between;
    padding: 1.5rem 13rem;
    background-color: ${({ theme, $company, $isOpen }) =>
      $isOpen ? theme.color.white : theme.color[$company]};

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 6rem;
      gap: 2rem;
    }
  `,
  LogoContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
    color: ${({ theme, $company, $isOpen }) =>
      $isOpen ? theme.color[$company] : theme.color.white};
  `,
  Logo: styled.img`
    width: 7rem;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 4.5rem;
    }
  `,
  Title: styled.span`
    ${({ theme }) => theme.font.FONT24SB};
    cursor: pointer;
    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT20B};
    }
  `,
  SubTitle: styled.span`
    ${({ theme }) => theme.font.FONT14};
    @media (max-width: 767px) {
      display: none;
    }
  `,
  Menu: styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 50rem;
    color: ${({ theme, $company, $isOpen }) =>
      $isOpen ? theme.color[$company] : theme.color.white};
    li {
      ${({ theme }) => theme.font.FONT18SB};
      cursor: pointer;

      @media (max-width: 767px) {
        ${({ theme }) => theme.font.FONT12SB};
      }
    }

    @media (max-width: 767px) {
      max-width: 35rem;
    }
  `,
};

const GNB = ({ company }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <S.Container
        className="gnb-container"
        $company={company.toLowerCase()}
        $isOpen={isOpen}
      >
        <S.LogoContainer>
          <S.Logo src={LogoImage} />
          <S.TitleContainer $company={company.toLowerCase()} $isOpen={isOpen}>
            <S.Title>{GNB_CONTENTS.TITLE[company.toUpperCase()][0]}</S.Title>
            <S.SubTitle>
              {GNB_CONTENTS.TITLE[company.toUpperCase()][1]}
            </S.SubTitle>
          </S.TitleContainer>
        </S.LogoContainer>
        <S.Menu
          $company={company.toLowerCase()}
          $isOpen={isOpen}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {company === 'Home'
            ? GNB_CONTENTS.HOME_MENU.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))
            : GNB_CONTENTS.MENU.map((item, idx) => <li key={idx}>{item}</li>)}
        </S.Menu>
      </S.Container>
      {isOpen && <div>하이용ㅇㅇㅇㅇㅇ</div>}
    </div>
  );
};
export default GNB;
