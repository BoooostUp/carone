import React from 'react';
import styled from 'styled-components';

const businessItems = [
  {
    icon: '🔥',
    title: '폐기물 중간처분업 (소각)',
    desc: '낙동강청·울산시 허가를 받아 폐유, 폐페인트, 폐산 등 다양한 산업폐기물을 고온 소각 처리합니다.',
  },
  {
    icon: '🌿',
    title: '폐기물 종합재활용업',
    desc: '폐페인트(액상) 등 재활용 가능한 폐기물을 원료화하여 자원 순환에 기여합니다.',
  },
  {
    icon: '💨',
    title: '스팀 생산·공급',
    desc: '소각 과정에서 발생한 열원을 활용해 스팀을 생산·공급하며, 저탄소 친환경 에너지 전환에 앞장섭니다.',
  },
];

function TotalBusinessArea() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">♻️ Business Area</span>
        <h2>㈜토탈의 주요 사업분야</h2>
        <p>
          토탈은 폐기물 소각과 재활용을 통해 환경 보전과 에너지 자원 순환을
          실현하는 전문 기업입니다. 소각 과정에서 발생하는 열원을 활용하여
          **스팀을 생산·공급**함으로써 저탄소 녹색성장 정책에 부합하는 친환경
          시스템을 구축했습니다.
        </p>
      </S.Header>

      <S.Grid>
        {businessItems.map((item) => (
          <S.Card key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
}

export default TotalBusinessArea;

const S = {
  Section: styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 2rem 7rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.TOTAL};
      color: #fff;
      padding: 0.55rem 1.3rem;
      border-radius: 9999px;
      font-size: 1rem;
      font-weight: 700;
      box-shadow: 0 4px 10px ${({ theme }) => theme.color.TOTAL + '55'};
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    h2 {
      ${({ theme }) => theme.font.FONT28B};
      font-size: clamp(2rem, 3vw, 2.6rem);
      margin-top: 1.2rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      ${({ theme }) => theme.font.FONT18};
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1rem;
      line-height: 1.8;
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
    }
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  `,
  Card: styled.div`
    background: #fff;
    border: 2px solid ${({ theme }) => theme.color.TOTAL + '22'};
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.25s ease;

    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: ${({ theme }) => theme.color.TOTAL + '15'};
      color: ${({ theme }) => theme.color.TOTAL};
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 1rem;
      display: grid;
      place-items: center;
      margin-inline: auto;
    }

    h3 {
      ${({ theme }) => theme.font.FONT20B};
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 0.6rem;
    }

    p {
      ${({ theme }) => theme.font.FONT16};
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.6;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 18px 38px ${({ theme }) => theme.color.TOTAL + '33'};
      border-color: ${({ theme }) => theme.color.TOTAL};
    }
  `,
};
