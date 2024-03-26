import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import { media } from '../../styles/utils/mediaQuery.ts';

//TODO: Mobile version : 글씨체 Bold 빼기
//TODO: 카원 회사글씨 줄이던가 로고 키우기
//TODO: 주소빼고 전화번호랑 팩스번호 서로 사이에 만들기

const Footer = ({ contents }) => {
  return (
    <div>
      <S.NameSloganWrapper>
        <div>
          <S.MainWrapper>
            <S.LogoImage src={Logo} alt="" />
            <div>
              <S.CompanyName>{contents.companyName}</S.CompanyName>
              <S.Subtitle>{contents.subtitle}</S.Subtitle>
            </div>
          </S.MainWrapper>
        </div>

        <div>© Since 2002</div>
      </S.NameSloganWrapper>

      <S.InfoWrapper>
        <p>{contents.address}</p>
        <p>{contents.tel}</p>
        <p>{contents.fax}</p>
      </S.InfoWrapper>
    </div>
  );
};

export default Footer;

const S = {
  LogoImage: styled.img`
    width: 45px;
    margin-right: 10px;
  `,
  NameSloganWrapper: styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  `,

  Subtitle: styled.div`
    ${({ theme }) => theme.font.FONT14}
  `,

  InfoWrapper: styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    ${({ theme }) => theme.font.FONT18}

    ${media.desktop`
        flex-direction: row;
        justify-content: start;
        gap: 20px;
    `}
  `,

  MainWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `,

  CompanyName: styled.div`
    display: flex;
    align-items: flex-end;
    ${({ theme }) => theme.font.FONT20};
    margin-bottom: 10px;
  `,
};
