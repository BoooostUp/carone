// src/pages/EnergyStory/Business/EnergyStoryBusinessArea.jsx
import React from 'react';
import styled from 'styled-components';

const businessItems = [
  {
    icon: '🛢️',
    title: '폐기물 중간재활용업',
    subtitle: '낙동강유역환경청 허가',
    desc: '폐유성페인트, 폐수성페인트, 폐연마유, 폐유기용제, 폐절삭유 등을 파쇄·분쇄 후 정제하여 유기용제/재생연료로 재활용합니다.',
  },
  {
    icon: '🏗️',
    title: '폐기물 종합재활용업',
    subtitle: '울산시 남구청 허가',
    desc: '폐판넬(51-33-00) 및 건설·산업 현장의 고형 폐기물을 파쇄·선별해 자원으로 순환시킵니다.',
  },
];

function EsBusinessArea() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">⚙️ Business Area</span>
        <h2>㈜에너지스토리 주요 사업분야</h2>
        <p>
          에너지스토리는 액상 폐기물과 폐판넬 등 산업폐기물을
          <strong> 파쇄 → 분쇄 → 정제 → 재활용</strong>하는 일괄 공정으로
          처리하는 재활용 전문 기업입니다.
        </p>
      </S.Header>

      <S.Grid>
        {businessItems.map((item) => (
          <S.Card key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.subtitle}</p>
            <p className="desc">{item.desc}</p>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
}

export default EsBusinessArea;

const S = {
  Section: styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 7rem 2rem 8rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.ES || '#2e8540'};
      color: #fff;
      padding: 0.6rem 1.5rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 0 4px 10px
        ${({ theme }) => (theme.color.ES || '#2e8540') + '4d'};
    }

    h2 {
      font-size: clamp(2.8rem, 4vw, 3.2rem);
      font-weight: 800;
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1rem;
      line-height: 1.7;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    p strong {
      font-weight: 700;
      color: ${({ theme }) => theme.color.black};
    }
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    gap: 2.2rem;
  `,
  Card: styled.div`
    background: #fff;
    border: 2px solid ${({ theme }) => (theme.color.ES || '#2e8540') + '22'};
    border-radius: 1.5rem;
    padding: 2.4rem 2rem 2.2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease;

    .icon {
      font-size: 3.6rem;
      margin-bottom: 1.1rem;
      background: ${({ theme }) => (theme.color.ES || '#2e8540') + '0f'};
      width: 5rem;
      height: 5rem;
      border-radius: 1.3rem;
      display: grid;
      place-items: center;
      margin-inline: auto;
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 0.4rem;
    }

    .subtitle {
      font-size: 1.3rem;
      font-weight: 800;
      color: ${({ theme }) => theme.color.ES || '#2e8540'};
      margin-bottom: 0.8rem;
    }

    .desc {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.6;
    }

    &:hover {
      transform: translateY(-6px);
      border-color: ${({ theme }) => theme.color.ES || '#2e8540'};
      box-shadow: 0 16px 38px
        ${({ theme }) => (theme.color.ES || '#2e8540') + '33'};
    }
  `,
};
