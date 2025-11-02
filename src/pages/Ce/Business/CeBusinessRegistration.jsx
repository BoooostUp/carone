// 📄 src/pages/Ce/Business/CeBusinessRegistration.jsx
import React from 'react';
import styled from 'styled-components';

const steps = [
  {
    num: '1',
    title: '배출자 등록',
    desc: '사업장폐기물배출자 신고 완료 (양산시)',
  },
  {
    num: '2',
    title: '처리계획 신고',
    desc: '지정폐기물 처리계획(중명) 신고 완료',
  },
  {
    num: '3',
    title: '수집 및 운반',
    desc: '자동차정비업체 등에서 발생한 폐기물을 전문 차량으로 안전하게 운반',
  },
  {
    num: '4',
    title: '선별 및 처리',
    desc: '재활용 가능 품목은 선별 후 자원화, 그 외 폐기물은 적정 처리',
  },
];

function CeBusinessRegistration() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">📋 등록 및 처리 절차</span>
        <h2>자동차환경의 등록 및 처리 과정</h2>
        <p>
          자동차환경은 관계 법령에 따라 모든 절차를 투명하고 안전하게
          수행합니다. 신고 → 수집 → 운반 → 재활용까지 원스톱 시스템으로
          처리합니다.
        </p>
      </S.Header>

      <S.Timeline>
        {steps.map((step, idx) => (
          <S.Step key={idx}>
            <div className="circle">{step.num}</div>
            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </S.Step>
        ))}
      </S.Timeline>

      <S.Footer>
        ※ 모든 처리 절차는 「폐기물관리법」 및 「사업장폐기물 관련 고시」를
        준수합니다.
      </S.Footer>
    </S.Section>
  );
}

export default CeBusinessRegistration;

const S = {
  Section: styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 2rem 8rem;
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
  Timeline: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    margin-left: 2rem;

    &::before {
      content: '';
      position: absolute;
      left: 1rem;
      top: 0;
      width: 3px;
      height: 100%;
      background: ${({ theme }) => theme.color.CE + '66'};
      border-radius: 3px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      margin-left: 1.5rem;
      gap: 1.6rem;
    }
  `,
  Step: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.4rem;
    position: relative;

    .circle {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.CE};
      color: #fff;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.1rem;
      box-shadow: 0 4px 10px ${({ theme }) => theme.color.CE + '55'};
    }

    .content {
      h3 {
        ${({ theme }) => theme.font.FONT18B};
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 0.3rem;
      }

      p {
        ${({ theme }) => theme.font.FONT16};
        color: ${({ theme }) => theme.color.deepGray};
        line-height: 1.6;
      }
    }
  `,
  Footer: styled.p`
    ${({ theme }) => theme.font.FONT12};
    color: ${({ theme }) => theme.color.deepGray};
    margin-top: 3rem;
    text-align: right;
  `,
};
