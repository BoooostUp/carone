import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">
              <S.Logo src={LogoIcon} />
            </Link>
            <S.TitleContainer $company={company} $isOpen={isOpen}>
              <Link to={GNB_CONTENTS[company].link}>
                <S.Title>{GNB_CONTENTS[company].title}</S.Title>
              </Link>
              <S.SubTitle>{GNB_CONTENTS[company].subTitle}</S.SubTitle>
            </S.TitleContainer>

            {GNB_CONTENTS[company].factory && (
              <S.FactoryContainer $company={company} $isOpen={isOpen}>
                <Link to={GNB_CONTENTS[company].factory.link[0]}>
                  <S.Factory
                    $company={company}
                    $factory={GNB_CONTENTS[company].factory.link[0]}
                  >
                    {GNB_CONTENTS[company].factory.number[0]}
                  </S.Factory>
                </Link>
                <Link to={GNB_CONTENTS[company].factory.link[1]}>
                  <S.Factory
                    $company={company}
                    $factory={GNB_CONTENTS[company].factory.link[1]}
                  >
                    {GNB_CONTENTS[company].factory.number[1]}
                  </S.Factory>
                </Link>
              </S.FactoryContainer>
            )}
          </S.LogoContainer>

          <S.Menu
            $company={company}
            $isOpen={isOpen}
            onMouseEnter={() => company !== 'HOME' && setIsOpen(true)}
          >
            {company === 'HOME'
              ? GNB_CONTENTS.HOME_MENU_LIST.map((item, idx) => (
                  <Link to={item.link} key={idx}>
                    <li>{item.menu}</li>
                  </Link>
                ))
              : company === 'SI'
                ? GNB_CONTENTS.SI_LIST.map((item, idx) => (
                    <Link to={item.link} key={idx}>
                      <li>{item.menu}</li>
                    </Link>
                  ))
                : GNB_CONTENTS.MENU_LIST.map((item, idx) => (
                    <Link to={item.link} key={idx}>
                      <li>{item.menu}</li>
                    </Link>
                  ))}
          </S.Menu>
        </S.Container>
      </S.Gnb>
      {isOpen && (
        <Lnb company={company} onMouseLeave={() => setIsOpen(false)} />
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
    height: 8rem;

    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      height: 9.5rem;
      background-color: ${({ theme, $company }) => theme.color[$company]};
    }
  `,
  Container: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 8rem;

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
    width: 22rem;
    color: ${({ theme, $company, $isOpen }) =>
      $isOpen ? theme.color[$company] : theme.color.white};
    @media (max-width: 767px) {
      color: ${({ theme }) => theme.color.white};
      width: 100%;
    }
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
      color: ${({ theme }) => theme.color.white};
    }
    span {
      ${({ theme }) => theme.font.FONT18SB}
      cursor: pointer;
      @media (max-width: 767px) {
        ${({ theme }) => theme.font.FONT14B}
      }
    }
  `,
  Factory: styled.span`
    text-decoration: ${({ $company, $factory }) =>
      $factory === GNB_CONTENTS[$company].link && 'underline'};
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
        color: ${({ theme }) => theme.color.white};
      }
    }

    @media (max-width: 1024px) {
      max-width: 35rem;
    }
  `,
};
