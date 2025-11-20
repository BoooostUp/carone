import React from 'react';
import styled from 'styled-components';

const TotalInfoHistory = () => {
  const history = [
    { year: '2013.07', text: '(주)토탈 설립' },
    { year: '2013.09', text: '한솔이엠이(주) 동부지사 사업양수도 인수' },
    { year: '2013.10', text: '일반폐기물 중간처분업 변경허가 → 울산광역시청' },
    {
      year: '2013.10',
      text: '지정폐기물 중간처분업 변경허가 → 낙동강유역환경청',
    },
    {
      year: '2013.10',
      text: '지정폐기물 종합재활용업 변경허가 → 낙동강유역환경청',
    },
    {
      year: '2015.12',
      text: '회사 증축, 지정폐기물 중간재활용업 허가 → 낙동강유역환경청',
    },
    { year: '2018.02', text: '폐기물 금속용기 처리시설 설비 전면 교체' },
    { year: '2018.08', text: '증발 농축시설 설비 전면 교체' },
    { year: '2020.06', text: '소각로 1·2호기 SNCR 방지시설 설치' },
    { year: '2020.12', text: '통합환경허가 승인 → 환경부' },
    {
      year: '2022.06',
      text: '지정폐기물 중간재활용업 분쇄·선별시설 증설 변경허가 → 낙동강유역환경청',
    },
    {
      year: '2024.05',
      text: '지정폐기물 중간재활용업 허가 승계 → (주)에너지스토리',
    },
  ];

  return (
    <S.Section>
      <S.Header>
        <span className="tag">🏛️ Company History</span>
        <h2>(주)토탈 연혁</h2>
        <p>
          2013년 설립 이후 소각·재활용 설비 고도화와 인허가 확대로
          <b> 울산권 종합 처리 인프라</b>를 구축했습니다.
        </p>
      </S.Header>

      <S.Timeline>
        {history.map((item, idx) => (
          <S.Item key={idx}>
            <S.Year>{item.year}</S.Year>
            <S.Text>{item.text}</S.Text>
          </S.Item>
        ))}
      </S.Timeline>
    </S.Section>
  );
};

export default TotalInfoHistory;

/* ============== styles (CE/Carone과 동일 규격) ============== */
const S = {
  Section: styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 8rem 2rem 10rem;
  `,
  Header: styled.header`
    text-align: center;
    margin-bottom: 5.5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.TOTAL || '#217A54'};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 800;
      font-size: 1.35rem;
      box-shadow: 0 6px 14px
        ${({ theme }) => (theme.color.TOTAL || '#217A54') + '55'};
      letter-spacing: 0.02em;
    }

    h2 {
      font-size: clamp(3.2rem, 4.2vw, 3.8rem);
      font-weight: 800;
      margin-top: 1.4rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.2rem;
      line-height: 1.95;
      max-width: 820px;
      margin-inline: auto;

      b {
        color: ${({ theme }) => theme.color.TOTAL || '#217A54'};
        font-weight: 800;
      }
    }
  `,
  Timeline: styled.div`
    /* 레일(세로선) + 패딩 변수 — 표준 */
    --rail: 42px;
    --pad: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: calc(var(--rail) + var(--pad));

    &::before {
      content: '';
      position: absolute;
      left: calc(var(--rail) / 2);
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${({ theme }) => (theme.color.TOTAL || '#217A54') + '55'};
    }

    @media (max-width: 640px) {
      --rail: 36px;
      --pad: 12px;
      gap: 1.6rem;
      padding-left: calc(var(--rail) + var(--pad));
    }
  `,
  Item: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 10rem 1fr;
    column-gap: 2rem;
    align-items: start;

    &::before {
      content: '';
      position: absolute;
      /* 레일은 Timeline padding 앞에 있으므로 패딩만큼 음수 보정 */
      left: calc(-1 * (var(--rail) + var(--pad)) + var(--rail) / 1.9);
      top: 1rem;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.TOTAL || '#217A54'};
    }

    @media (max-width: 640px) {
      grid-template-columns: 8.5rem 1fr;
      column-gap: 1.4rem;
    }
  `,
  Year: styled.div`
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.TOTAL || '#217A54'};
    letter-spacing: 0.02em;
  `,
  Text: styled.div`
    font-size: 1.5rem;
    line-height: 1.85;
    color: ${({ theme }) => theme.color.black};
  `,
};
