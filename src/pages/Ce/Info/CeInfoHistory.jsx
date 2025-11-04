// src/pages/Ce/Info/CeInfoHistory.jsx
import React from 'react';
import styled from 'styled-components';

const CeInfoHistory = () => {
  const history = [
    { year: '2001.08', text: '자동차환경 협회 설립' },
    {
      year: '2003.04',
      text: '일반 사업자 폐기물 수집·운반업(자가운반) 허가 - 양산시청',
    },
    { year: '2003.12', text: '자동차환경으로 상호 변경 및 업종 추가' },
    {
      year: '2005.08',
      text: '사업장 소재지 확장 이전 (양산시 산막동 → 양산시 호계동)',
    },
    {
      year: '2006.04',
      text: '경상남도 자동차검사정비사업조합 위탁처리 계약 체결',
    },
    { year: '2007.09', text: '현대블루핸즈 사상협의회 위탁처리 계약 체결' },
    {
      year: '2008.01',
      text: '경상남도 자동차검사정비사업조합 양산시지회 위탁처리 계약 체결',
    },
    { year: '2008.01', text: '현대블루핸즈 양산협의회 위탁처리 계약 체결' },
    {
      year: '2008.10',
      text: '경상남도 자동차검사정비사업조합 김해시지회 위탁처리 계약 체결',
    },
    {
      year: '2011.05',
      text: '회사 신축, 확장 이전 (양산시 호계동 → 양산시 상북면 상삼리)',
    },
    {
      year: '2012.03',
      text: '전국 기아자동차(주) 서비스센터 위탁처리 계약 체결',
    },
    { year: '2012.08', text: '한성모터스(벤츠) 위탁처리 계약 체결' },
    { year: '2012.10', text: '동일모터스(렉서스) 위탁처리 계약 체결' },
    { year: '2013.08', text: '오토오아시스 협의회 위탁처리 계약 체결' },
    {
      year: '2014.06',
      text: 'GM대우서비스(주) 사상·양산·김해·연제 위탁처리 계약 체결',
    },
    {
      year: '2014.06',
      text: '쌍용자동차사업소(주) 부산·김해·마산 위탁처리 계약 체결',
    },
    { year: '2017.01', text: '현대정비가맹점 부산협동조합 위탁처리 계약 체결' },
    { year: '2017.07', text: 'GM대우바로코너 위탁처리 계약 체결' },
    { year: '2020.06', text: '동성모터스(BMW) 위탁처리 계약 체결' },
    { year: '2023.11', text: '스타자동차(벤츠) 위탁처리 계약 체결' },
  ];

  return (
    <S.Section>
      <S.Header>
        <span className="tag">🏛️ Company History</span>
        <h2>㈜자동차환경 연혁</h2>
        <p>
          2001년 설립 이래, 자동차환경은 전국 주요 자동차 서비스 네트워크와
          협력하며
          <b> 자동차 정비 폐기물 관리의 선두주자</b>로 자리 잡았습니다.
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

export default CeInfoHistory;

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
      background: ${({ theme }) => theme.color.CE || '#8CC747'};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 800;
      font-size: 1.35rem;
      box-shadow: 0 6px 14px
        ${({ theme }) => (theme.color.CE || '#8CC747') + '55'};
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
        color: ${({ theme }) => theme.color.CE || '#8CC747'};
        font-weight: 800;
      }
    }
  `,
  Timeline: styled.div`
    /* 레일(세로선) + 점 영역 */
    --rail: 42px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: calc(var(--rail) + 16px);

    /* 세로 레일 */
    &::before {
      content: '';
      position: absolute;
      left: calc(var(--rail) / 2);
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${({ theme }) => (theme.color.CE || '#8CC747') + '55'};
    }

    @media (max-width: 640px) {
      --rail: 36px;
      gap: 1.6rem;
      padding-left: calc(var(--rail) + 12px);
    }
  `,
  Item: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 10rem 1fr; /* 연도/내용 영역 구분 */
    column-gap: 2rem;
    align-items: start;

    /* 점(노드) */
    &::before {
      content: '';
      position: absolute;
      left: calc(-1 * (var(--rail) + 14.5px) + var(--rail) / 2);
      top: 1.2rem; /* 폰트에 비례한 자연스러운 y 위치 */
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.CE || '#8CC747'};
    }

    @media (max-width: 640px) {
      grid-template-columns: 8.5rem 1fr;
      column-gap: 1.4rem;
    }
  `,
  Year: styled.div`
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.CE || '#8CC747'};
    letter-spacing: 0.02em;
  `,
  Text: styled.div`
    font-size: 1.5rem;
    line-height: 1.85;
    color: ${({ theme }) => theme.color.black};
  `,
};
