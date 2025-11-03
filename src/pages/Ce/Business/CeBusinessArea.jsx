// 📄 src/pages/Ce/Business/CeBusinessArea.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme'; // ✅ theme import 경로 확인 (프로젝트 구조에 맞게 수정)

const businessItems = [
  {
    icon: '🧾',
    title: '사업장폐기물 배출 대행',
    desc: '자동차정비업 등에서 발생하는 사업장폐기물 신고·대행',
  },
  {
    icon: '♻️',
    title: '지정폐기물 수집·처리',
    desc: '폐유, 폐합성수지, 폐타이어 등 안전하게 수집 및 운반',
  },
  {
    icon: '🔧',
    title: '폐기물 재활용',
    desc: '선별과정을 거쳐 자원을 재활용하고 순환경제를 실현',
  },
];

const CeBusinessArea = () => {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">🚗 Business Area</span>
        <h2>자동차환경의 주요 사업분야</h2>
        <p>
          자동차환경은 자동차 정비업체에서 발생하는 각종 폐기물을 공동으로
          수집·운반·처리하는 전문 업체입니다. 양산시 신고를 완료하고
          합법적·안전하게 폐기물을 처리합니다.
        </p>
      </S.Header>

      <S.CardGrid>
        {businessItems.map((item) => (
          <S.Card key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </S.Card>
        ))}
      </S.CardGrid>
    </S.Section>
  );
};

export default CeBusinessArea;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem 8rem;
    background: #fff;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.CE};
      color: #fff;
      padding: 0.55rem 1.3rem;
      border-radius: 9999px;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      box-shadow: 0 4px 10px ${({ theme }) => theme.color.CE + '66'};
      text-transform: uppercase;
      transform: translateY(0);
      transition: all 0.25s ease;

      &:hover {
        background: ${({ theme }) => theme.color.CE};
        box-shadow: 0 6px 16px ${({ theme }) => theme.color.CE + '88'};
        transform: translateY(-2px);
      }
    }

    h2 {
      ${({ theme }) => theme.font.FONT28B};
      font-size: clamp(2.2rem, 3vw, 2.8rem);
      font-weight: 800;
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
  CardGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.2rem;
  `,
  Card: styled.div`
    background: #ffffff;
    border: 2px solid ${({ theme }) => theme.color.CE + '22'};
    border-radius: 1.5rem;
    padding: 3rem 2rem 2.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
    transition: all 0.25s ease;
    text-align: center;

    .icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      background: ${({ theme }) => theme.color.CE + '15'};
      width: 5rem;
      height: 5rem;
      border-radius: 1.2rem;
      display: grid;
      place-items: center;
      margin-inline: auto;
    }

    h3 {
      ${({ theme }) => theme.font.FONT20B};
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 0.8rem;
    }

    p {
      ${({ theme }) => theme.font.FONT16};
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.7;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 40px ${({ theme }) => theme.color.CE + '33'};
      border-color: ${({ theme }) => theme.color.CE};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      padding: 2.2rem 1.6rem;
      .icon {
        width: 3.8rem;
        height: 3.8rem;
        font-size: 2.4rem;
      }
      h3 {
        ${({ theme }) => theme.font.FONT20B};
      }
      p {
        ${({ theme }) => theme.font.FONT20B};
      }
    }
  `,
};
