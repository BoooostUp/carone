import React from 'react';
import styled from 'styled-components';

const Carone2InfoHistory = () => {
  const history = [
    { year: '2002.04', text: '(주)카원 회사 설립' },
    { year: '2005.08', text: '지정폐기물 수집운반업 허가 → 낙동강유역환경청' },
    {
      year: '2007.01',
      text: '사업장 배출시설계 폐기물 수집운반업 허가 → 양산시청',
    },
    { year: '2007.12', text: '파쇄시설 설치(50HP × 1기)' },
    { year: '2008.08', text: '파쇄시설 설치(100HP × 1기)' },
    { year: '2008.09', text: '사업장폐기물 종합재활용업 허가 → 양산시청' },
    {
      year: '2009.01',
      text: '대형폐기물 수집운반업 허가 → 부산광역시 사하구청',
    },
    { year: '2009.05', text: '(주)카원 부산지점 증설' },
    {
      year: '2011.05',
      text: '회사 신축, 확장 이전 (양산시 호계동 → 양산시 상북면 상삼리)',
    },
    { year: '2011.11', text: '파쇄시설 설치(75HP × 2기)' },
    {
      year: '2011.11',
      text: '지정폐기물 종합재활용업 허가 → 낙동강유역환경청',
    },
    {
      year: '2022.04',
      text: '(주)카원 제2공장 지점 설립 (양산시 상북면 내석리)',
    },
    {
      year: '2022.07',
      text: '건설폐기물 수집운반업 허가 → 부산광역시 사상구청',
    },
    {
      year: '2023.07',
      text: '(주)카원 제2공장 종합재활용업 허가 → 낙동강유역환경청',
    },
    { year: '2024.07', text: '(주)카원 → 카원 유한책임회사 법인종류 변경' },
    {
      year: '2024.12',
      text: '카원(유) 제2공장 폐기물처리(재활용) 신고 → 양산시청',
    },
  ];

  return (
    <S.Section>
      <S.Header>
        <span className="tag">🏛️ Company History</span>
        <h2>카원 연혁</h2>
        <p>
          2002년 설립 이후 수집·운반에서 종합재활용까지 사업을 확장하며
          <b> 폐기물 자원화 선도 기업</b>으로 성장했습니다.
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

export default Carone2InfoHistory;

/* ===================== styles ===================== */
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
      background: ${({ theme }) => theme.color.CARONE || '#F6B436'};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 800;
      font-size: 1.35rem;
      box-shadow: 0 6px 14px
        ${({ theme }) => (theme.color.CARONE || '#F6B436') + '55'};
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
        color: ${({ theme }) => theme.color.CARONE || '#F6B436'};
        font-weight: 800;
      }
    }
  `,
  Timeline: styled.div`
    /* 레일(세로선) + 점 영역 */
    --rail: 42px;
    --pad: 16px; /* 레일 오른쪽 여백(=Timeline padding-left에서 더한 값) */
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
      background: ${({ theme }) => (theme.color.CARONE || '#F6B436') + '55'};
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
    grid-template-columns: 10rem 1fr; /* 연도/내용 영역 구분 */
    column-gap: 2rem;
    align-items: start;

    /* 점(노드) : 레일은 Timeline의 패딩 앞에 있으므로, 패딩만큼 음수 보정 */
    &::before {
      content: '';
      position: absolute;
      left: calc(-1 * (var(--rail) + var(--pad)) + var(--rail) / 1.9);
      top: 1rem;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.CARONE || '#F6B436'};
    }

    @media (max-width: 640px) {
      grid-template-columns: 8.5rem 1fr;
      column-gap: 1.4rem;
    }
  `,
  Year: styled.div`
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.CARONE || '#F6B436'};
    letter-spacing: 0.02em;
  `,
  Text: styled.div`
    font-size: 1.5rem;
    line-height: 1.85;
    color: ${({ theme }) => theme.color.black};
  `,
};
