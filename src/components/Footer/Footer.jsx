import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import { media } from '../../styles/utils/mediaQuery.ts';

//TODO: Mobile version : 글씨체 Bold 빼기
//TODO: 카원 회사글씨 줄이던가 로고 키우기
//TODO: 주소빼고 전화번호랑 팩스번호 서로 사이에 만들기

const Footer = ({ contents }) => {
  return (
    console.log(contents.subtitle),
    (
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

        <S.InfoContainer>
          {contents.info.map((info) => {
            return (
              <S.InfoWrapper>
                <p>{info.address}</p>
                <p>{info.tel}</p>
                <p>{info.fax}</p>
              </S.InfoWrapper>
            );
          })}
        </S.InfoContainer>
      </div>
    )
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
    ${({ theme }) => theme.font.FONT}
  `,

  InfoWrapper: styled.div`
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    ${({ theme }) => theme.font.FONT14};
    ${media.desktop`
        flex-direction: row;
        justify-content: start;
    `};
  `,

  MainWrapper: styled.div`
    display: flex;
    align-items: center;
  `,

  InfoContainer: styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    ${media.desktop`
        flex-direction: column;
    `}
  `,

  CompanyName: styled.div`
    display: flex;
    align-items: flex-end;
    ${({ theme }) => theme.font.FONT16};
    margin-bottom: 10px;
  `,
};
