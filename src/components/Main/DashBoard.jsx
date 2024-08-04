import React from 'react';
import styled from 'styled-components';
import deal from '../../assets/images/dashboard/deal.gif';
import facility from '../../assets/images/dashboard/facility.gif';
import dashboard1 from '../../assets/images/dashboard/recycle.gif';
import recycle from '../../assets/images/dashboard/trash.gif';
import theme from '../../styles/theme';
import { media } from '../../styles/utils/mediaQuery';

const DashBoard = () => {
  return (
    <S.MainWrapper>
      <S.MainTitle>우리 회사의 핵심 성과 및 역량</S.MainTitle>
      <S.Wrapper>
        <S.Container>
          <S.Image src={dashboard1} alt="Dashboard" />
          <S.Title>99% 재활용</S.Title>
          <S.Description>
            자원 순환율을 목표로 하며, 폐기물의 최대 재활용을 지향합니다.
          </S.Description>
        </S.Container>
        <S.Container>
          <S.Image src={deal} alt="Deal" />
          <S.Title>주요 거래처</S.Title>
          <S.Description>2,000개의 주요 기업과 협력 중입니다.</S.Description>
        </S.Container>
        <S.Container>
          <S.Image src={recycle} alt="Facility" />
          <S.Title>폐기물 처리 능력</S.Title>
          <S.Description>
            연간 60만 톤 이상의 폐기물을 처리합니다.
          </S.Description>
        </S.Container>
        <S.Container>
          <S.Image src={facility} alt="Recycle" />
          <S.Title>지점 및 설비</S.Title>
          <S.Description>
            10개의 주요 지점에서 폐기물 수집 및 재활용 작업을 수행합니다.
          </S.Description>
        </S.Container>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default DashBoard;

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
    background-color: ${({ theme }) => theme.color.white};
  `,
  MainTitle: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
  `,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.white};
    ${media.desktop`
     grid-template-columns: repeat(4, 1fr);
    `}
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    height: 300px;
    text-align: center;
    gap: 10px;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    ${media.desktop`
      width: 200px;
      height: 300px;
    `}

    &:hover {
      transform: translateY(-5px);
    }
  `,
  Image: styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  `,
  Title: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
  `,
  Description: styled.div`
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
  `,
};
