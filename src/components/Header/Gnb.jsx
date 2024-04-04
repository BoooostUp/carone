import { useState } from 'react';
import styled from 'styled-components';
import Lnb from './Lnb';
import LogoIcon from '../../assets/icons/Logo.svg';
import { GNB_CONTENTS } from '../../constants/GNB_CONTENTS';

const Gnb = ({ company }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <S.Gnb className="gnb-container" $company={company} $isOpen={isOpen}>
        <S.Container>
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
          >
            {company === 'Home'
              ? GNB_CONTENTS.HOME_MENU.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))
              : GNB_CONTENTS.MENU.map((item, idx) => <li key={idx}>{item}</li>)}
          </S.Menu>
        </S.Container>
      </S.Gnb>
      {isOpen && (
        <Lnb
          company={company}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
export default Gnb;

const S = {
  Gnb: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme, $company, $isOpen }) =>
      $isOpen ? theme.color.white : theme.color[$company]};
  `,
  Container: styled.div`
    display: flex;
    width: 100%;
    /* max-width: 130rem; */
    justify-content: space-between;
    padding: 1.5rem 8rem;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 3rem;
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

    @media (max-width: 1024px) {
      max-width: 35rem;
    }
  `,
};
