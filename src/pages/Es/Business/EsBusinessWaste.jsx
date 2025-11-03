import React from 'react';
import styled from 'styled-components';

function EsBusinessWaste() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">영업대상 폐기물</span>
        <h2>㈜에너지스토리 영업대상 폐기물 및 처리공정</h2>
        <p>
          에너지스토리는 낙동강유역환경청과 울산 남구청의 허가를 받아
          <b> 폐유·폐페인트류·폐판넬</b> 등을 합법적으로 수집·재활용하는 전문
          기업입니다.
        </p>
      </S.Header>

      <S.Grid>
        <S.Card>
          <h3>① 낙동강유역환경청 허가</h3>
          <p className="type">폐기물 중간재활용업</p>
          <ul>
            <li>폐유성페인트 (폐절삭유 포함)</li>
            <li>폐수성페인트</li>
            <li>폐연마유 / 폐유기용제 / 폐윤활유</li>
            <li>폐절삭유 / 폐지용기류</li>
          </ul>

          <S.Flow>
            <S.Step>파쇄</S.Step>
            <S.Arrow>→</S.Arrow>
            <S.Step>분쇄</S.Step>
            <S.Arrow>→</S.Arrow>
            <S.Step>정제</S.Step>
            <S.Arrow>→</S.Arrow>
            <S.Step final>재활용 (유기용제·연료유)</S.Step>
          </S.Flow>
        </S.Card>

        <S.Card>
          <h3>② 울산 남구청 허가</h3>
          <p className="type">폐기물 종합재활용업</p>
          <ul>
            <li>폐판넬 (51-33-00)</li>
            <li>건설·산업 재활용 자재류</li>
          </ul>

          <S.Flow>
            <S.Step>파쇄</S.Step>
            <S.Arrow>→</S.Arrow>
            <S.Step>선별</S.Step>
            <S.Arrow>→</S.Arrow>
            <S.Step final>재활용 (자원화)</S.Step>
          </S.Flow>
        </S.Card>
      </S.Grid>

      <S.Foot>
        ※ 에너지스토리는 파쇄·분쇄·정제 등의 과정을 통해 산업폐기물을 친환경
        자원으로 전환하는 <b>순환형 재활용 시스템</b>을 운영합니다.
      </S.Foot>
    </S.Section>
  );
}

export default EsBusinessWaste;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 2rem 8rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.ES || '#2e8540'};
      color: #fff;
      padding: 0.8rem 2rem;
      border-radius: 999px;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 0 5px 15px
        ${({ theme }) => (theme.color.ES || '#2e8540') + '55'};
    }

    h2 {
      font-size: clamp(2.8rem, 4vw, 3.3rem);
      font-weight: 800;
      margin-top: 1.3rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.35rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.2rem;
      line-height: 1.9;
      max-width: 820px;
      margin-inline: auto;
    }

    b {
      color: ${({ theme }) => theme.color.ES || '#2e8540'};
      font-weight: 700;
    }
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
    gap: 3rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      grid-template-columns: 1fr;
    }
  `,
  Card: styled.div`
    background: #fff;
    border: 3px solid ${({ theme }) => (theme.color.ES || '#2e8540') + '22'};
    border-radius: 1.6rem;
    padding: 3rem 2.4rem;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    h3 {
      font-size: 1.9rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 0.5rem;
    }

    .type {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.ES || '#2e8540'};
      margin-bottom: 1.3rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;

      li {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.color.deepGray};
        line-height: 1.8;
        text-align: left;
      }
    }

    &:hover {
      transform: translateY(-10px);
      border-color: ${({ theme }) => theme.color.ES || '#2e8540'};
      box-shadow: 0 20px 48px
        ${({ theme }) => (theme.color.ES || '#2e8540') + '33'};
    }
  `,
  Flow: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  `,
  Step: styled.span`
    background: ${({ final, theme }) =>
      final ? theme.color.ES || '#2e8540' : '#f2f6f3'};
    color: ${({ final }) => (final ? '#fff' : '#111')};
    padding: 1rem 1.4rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    min-width: 6rem;
    text-align: center;
  `,
  Arrow: styled.span`
    font-size: 1.6rem;
    color: #888;
  `,
  Foot: styled.p`
    margin-top: 4rem;
    text-align: center;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.deepGray};
    line-height: 1.9;

    b {
      color: ${({ theme }) => theme.color.ES || '#2e8540'};
    }
  `,
};
