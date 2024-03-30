import { useState } from 'react';
import styled from 'styled-components';
import LogoIcon from '../../assets/icons/Logo.svg';
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
  FactoryContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    color: ${({ theme, $company, $isOpen }) =>
      $isOpen ? theme.color[$company] : theme.color.white};

    @media (max-width: 767px) {
      gap: 2rem;
    }
    span {
      ${({ theme }) => theme.font.FONT18SB}
      cursor: pointer;
      @media (max-width: 767px) {
        ${({ theme }) => theme.font.FONT14B}
      }
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

const Gnb = ({ company }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <S.Container
        className="gnb-container"
        $company={company}
        $isOpen={isOpen}
      >
        <S.LogoContainer>
          <S.Logo src={LogoIcon} />
          <S.TitleContainer $company={company} $isOpen={isOpen}>
            <S.Title>{GNB_CONTENTS[company].title}</S.Title>
            <S.SubTitle>{GNB_CONTENTS[company].subTitle}</S.SubTitle>
          </S.TitleContainer>

          {GNB_CONTENTS[company].Factory && (
            <S.FactoryContainer $company={company} $isOpen={isOpen}>
              <span>{GNB_CONTENTS[company].factory[0]}</span>
              <span>{GNB_CONTENTS[company].factory[1]}</span>
            </S.FactoryContainer>
          )}
        </S.LogoContainer>

        <S.Menu
          $company={company}
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
export default Gnb;
