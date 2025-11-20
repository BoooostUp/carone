import React from 'react';
import styled from 'styled-components';

const EsInfoHistory = () => {
  const history = [
    { year: '2022.07', text: '㈜에너지스토리 설립' },
    {
      year: '2024.05',
      text: '㈜토탈 폐기물처리업(중간재활용업) 양수·인수 허가 → 낙동강유역환경청',
    },
    { year: '2024.07', text: '압축시설(15kW × 1기) 증설' },
    { year: '2025.04', text: '파쇄·분쇄시설 신규설비 교체' },
    {
      year: '2025.07',
      text: '사업장 일반 폐기물처리업(종합재활용업) 허가 → 울산시 남구청',
    },
  ];

  return (
    <S.Section>
      <S.Header>
        <span className="tag">🏛️ Company History</span>
        <h2>(주)에너지스토리 연혁</h2>
        <p>
          설립 이후 액상·고형 폐기물 재활용 인프라를 확장하며
          <b> 울산권 재활용 전문성</b>을 강화해왔습니다.
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

export default EsInfoHistory;

/* ============== styles (CE/Carone/Total과 동일 규격) ============== */
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
      background: ${({ theme }) => theme.color.ES || '#5BB2FF'};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 800;
      font-size: 1.35rem;
      box-shadow: 0 6px 14px
        ${({ theme }) => (theme.color.ES || '#5BB2FF') + '55'};
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
        color: ${({ theme }) => theme.color.ES || '#5BB2FF'};
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

    /* 세로 레일 */
    &::before {
      content: '';
      position: absolute;
      left: calc(var(--rail) / 2);
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${({ theme }) => (theme.color.ES || '#5BB2FF') + '55'};
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
    grid-template-columns: 10rem 1fr; /* 연도 / 내용 */
    column-gap: 2rem;
    align-items: start;

    /* 점(노드) — 레일은 Timeline padding 바깥이므로, pad만큼 음수 보정 */
    &::before {
      content: '';
      position: absolute;
      left: calc(-1 * (var(--rail) + var(--pad)) + var(--rail) / 1.9);
      top: 1rem;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.ES || '#5BB2FF'};
    }

    @media (max-width: 640px) {
      grid-template-columns: 8.5rem 1fr;
      column-gap: 1.4rem;
    }
  `,
  Year: styled.div`
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.ES || '#5BB2FF'};
    letter-spacing: 0.02em;
  `,
  Text: styled.div`
    font-size: 1.5rem;
    line-height: 1.85;
    color: ${({ theme }) => theme.color.black};
  `,
};
