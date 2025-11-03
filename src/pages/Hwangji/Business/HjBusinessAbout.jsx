import { useEffect } from 'react';
import styled from 'styled-components';

function HjBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Section>
      <S.Header>
        <span className="tag">⚙️ Business Area</span>
        <h2>㈜황지 주요 사업분야</h2>
        <p>
          황지는 <b>울산시청 허가</b>를 받아 사업장 일반폐기물 중{' '}
          <b>매립대상 폐기물</b>을<b> 안정적이고 친환경적으로 처리</b>하는{' '}
          <b>폐기물 최종처분업</b> 전문기업입니다.
        </p>
      </S.Header>

      <S.Card>
        <h3>폐기물 최종처분업 (매립)</h3>
        <p className="subtitle">울산시청 허가</p>
        <ul>
          <li>사업장 일반폐기물 중 매립대상 폐기물 처리</li>
          <li>오니류, 소각재, 폐토사 등 안정적 매립</li>
          <li>친환경 침출수 관리 및 사후 모니터링 시스템 구축</li>
        </ul>
        <p className="status">현재 행정절차 진행 중</p>
      </S.Card>
    </S.Section>
  );
}

export default HjBusinessAbout;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 8rem 2rem 9rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.HJ || '#0033cc'};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 1.3rem;
      letter-spacing: 0.02em;
      box-shadow: 0 6px 15px
        ${({ theme }) => (theme.color.HJ || '#0033cc') + '55'};
    }

    h2 {
      font-size: clamp(3.2rem, 4vw, 3.8rem);
      font-weight: 800;
      margin-top: 1.6rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.5rem;
      line-height: 1.9;
      max-width: 800px;
      margin-inline: auto;
    }

    b {
      color: ${({ theme }) => theme.color.HJ || '#0033cc'};
    }
  `,
  Card: styled.div`
    background: #fff;
    border: 3px solid ${({ theme }) => (theme.color.HJ || '#0033cc') + '44'};
    border-radius: 2rem;
    padding: 4rem 3rem;
    text-align: center;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

    h3 {
      font-size: 2.3rem;
      font-weight: 800;
      margin-bottom: 0.8rem;
      color: ${({ theme }) => theme.color.black};
    }

    .subtitle {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.HJ || '#0033cc'};
      margin-bottom: 1.6rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;

      li {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.color.deepGray};
        line-height: 2;
        margin-bottom: 0.6rem;
      }
    }

    .status {
      font-size: 1.35rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.HJ || '#0033cc'};
      margin-top: 1.2rem;
    }
  `,
};
