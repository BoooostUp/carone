// src/pages/Carone/Business/CaroneWasteFlow.jsx
import React from 'react';
import styled from 'styled-components';

const FLOW_STEPS = [
  {
    no: '01',
    emoji: '🚚',
    title: '원료 입고',
    desc: '수집·운반된 폐기물을 입고하여 성상과 품목을 확인합니다.',
  },
  {
    no: '02',
    emoji: '🪓',
    title: '파쇄',
    desc: '대형 또는 부피가 큰 폐기물을 장비로 1차 파쇄합니다.',
  },
  {
    no: '03',
    emoji: '⚙️',
    title: '분쇄',
    desc: '재활용·선별이 가능하도록 크기를 균일하게 2차 분쇄합니다.',
  },
  {
    no: '04',
    emoji: '🧲',
    title: '선별',
    desc: '금속/비금속, 플라스틱/고무 등으로 분리하여 재활용 라인에 투입합니다.',
  },
  {
    no: '05',
    emoji: '🏭',
    title: '생산',
    desc: '파쇄·분쇄·선별된 폐기물을 재활용 원료(스크랩, 파쇄품 등)로 생산합니다.',
  },
  {
    no: '06',
    emoji: '📦',
    title: '보관',
    desc: '생산된 재활용품을 규격에 맞게 적재·보관합니다.',
  },
  {
    no: '07',
    emoji: '🚛',
    title: '출고',
    desc: '협력사 및 재활용업체, 제철/재생업체로 출고합니다.',
  },
];

const CaroneWasteFlow = () => {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">♻️ 폐기물 처리 Flow</span>
        <h2>카원의 폐기물 처리 공정</h2>
        <p>
          본·제2공장에서 반입되는 폐기물은 아래 순서에 따라 파쇄 → 선별 → 재활용
          원료화 과정을 거칩니다.
        </p>
      </S.Header>

      <S.Timeline>
        {FLOW_STEPS.map((step, idx) => (
          <S.Item key={step.no}>
            <S.Badge>{step.no}</S.Badge>
            <S.Body>
              <S.Emoji>{step.emoji}</S.Emoji>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </S.Body>
            {idx !== FLOW_STEPS.length - 1 && <S.Line aria-hidden="true" />}
          </S.Item>
        ))}
      </S.Timeline>
    </S.Section>
  );
};

export default CaroneWasteFlow;

const S = {
  Section: styled.section`
    max-width: 1080px;
    margin: 0 auto;
    padding: 6rem 1.5rem 7rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 3.5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.CARONE};
      color: #fff;
      padding: 0.5rem 1.2rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 4px 12px ${({ theme }) => theme.color.CARONE + '44'};
    }

    h2 {
      ${({ theme }) => theme.font.FONT24B};
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      ${({ theme }) => theme.font.FONT16};
      color: ${({ theme }) => theme.color.deepGray};
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }
  `,
  Timeline: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  `,
  Item: styled.div`
    position: relative;
    display: flex;
    gap: 1.6rem;
    align-items: flex-start;
    padding-left: 0.5rem;
  `,
  Badge: styled.div`
    min-width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    background: ${({ theme }) => theme.color.CARONE};
    color: #fff;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 0 4px 10px ${({ theme }) => theme.color.CARONE + '55'};
    flex-shrink: 0;
    z-index: 2;
  `,
  Emoji: styled.div`
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
  `,
  Body: styled.div`
    background: #fffef9;
    border: 1px solid rgba(246, 180, 54, 0.25);
    border-radius: 1.2rem;
    padding: 1.3rem 1.4rem;
    flex: 1;
    box-shadow: 0 6px 20px rgba(246, 180, 54, 0.07);
    transition: all 0.2s ease;

    &:hover {
      background: #fffbe5;
      transform: translateY(-2px);
      box-shadow: 0 10px 22px rgba(246, 180, 54, 0.15);
    }

    h3 {
      ${({ theme }) => theme.font.FONT16B};
      margin-bottom: 0.4rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      ${({ theme }) => theme.font.FONT14};
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.55;
    }
  `,
  Line: styled.div`
    position: absolute;
    left: 2.1rem;
    top: 3.4rem;
    width: 3px;
    height: calc(100% + 2rem);
    background: ${({ theme }) => theme.color.CARONE + '55'};
    z-index: 1;
  `,
};
