// 📄 src/pages/Carone/Business/CaroneBusinessArea.jsx
import React from 'react';
import styled from 'styled-components';

const businessItems = [
  {
    icon: '🚛',
    title: '폐기물 수집·운반업',
    desc: '양산시, 낙동강청, 부산시 사하구청 허가를 통해 지정 및 사업장 폐기물을 안전하게 운반',
  },
  {
    icon: '♻️',
    title: '폐기물 종합재활용업',
    desc: '폐합성수지류 및 폐합성고무류를 파쇄·분석 후 자원화',
  },
  {
    icon: '🏗️',
    title: '건설폐기물 수집·운반업',
    desc: '부산광역시 일대의 건설폐기물을 수집·운반',
  },
  // ✅ 2공장 추가
  {
    icon: '🏭',
    title: '금속·철제용기류 파쇄·분쇄',
    desc: '낙동강청·양산시청 등록. 철제용기류(폐유성페인트, 폐주둥유, 폐광물유) 및 고철을 파쇄·분쇄 후 재활용',
  },
];

function CaroneBusinessArea() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">⚙️ Business Area</span>
        <h2>카원의 주요 사업분야</h2>
        <p>
          카원은 양산시·낙동강청 등 관할 지역에서 다양한 폐기물의 수집·운반과
          재활용을 수행하는 전문 기업입니다. 환경과 자원 순환을 함께 고려한 종합
          재활용 시스템을 운영합니다.
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

export default CaroneBusinessArea;

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
      background: ${({ theme }) => theme.color.CARONE};
      color: #fff;
      padding: 0.55rem 1.3rem;
      border-radius: 9999px;
      font-size: 1rem;
      font-weight: 700;
      box-shadow: 0 4px 10px ${({ theme }) => theme.color.CARONE + '55'};
      text-transform: uppercase;
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
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  `,
  Card: styled.div`
    background: #fff;
    border: 2px solid ${({ theme }) => theme.color.CARONE + '22'};
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.25s ease;

    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: ${({ theme }) => theme.color.CARONE + '15'};
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
      box-shadow: 0 18px 38px ${({ theme }) => theme.color.CARONE + '33'};
      border-color: ${({ theme }) => theme.color.CARONE};
    }
  `,
};
