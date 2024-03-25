import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import { media } from '../../styles/utils/mediaQuery.ts';

const Footer = () => {
  return (
    <div>
      <S.NameSloganWrapper>
        <div>
          <S.CompanyName>
            <S.LogoImage src={Logo} alt="" />
            (주)카원
          </S.CompanyName>
          <div>
            폐기물을 자원으로, 우리 환경을 꺠끗하게 추구하는 신뢰의 기업
          </div>
        </div>

        <div>© Since 2002</div>
      </S.NameSloganWrapper>

      <S.InfoWrapper>
        <p>경상남도 양산시 상북면 공원로 403 - 19</p>
        <p>TEL 055-381-0703</p>
        <p>FAX 055-384-0703</p>
      </S.InfoWrapper>
    </div>
  );
};

export default Footer;

const S = {
  LogoImage: styled.img`
    width: 50px;
    margin-right: 10px;
  `,
  NameSloganWrapper: styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
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

  CompanyName: styled.div`
    display: flex;
    align-items: flex-end;
    ${({ theme }) => theme.font.FONT28B};
    margin-bottom: 10px;
  `,
};
