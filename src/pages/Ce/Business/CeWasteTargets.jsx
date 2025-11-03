// 📄 src/pages/Ce/Business/CeWasteTargets.jsx
import React from 'react';
import styled from 'styled-components';

const generalWaste = [
  '폐합성수지(범퍼류 파쇄품)',
  '폐타이어',
  '폐플라스틱·비철성 혼합물',
  '폐수 처리오니',
  '사업장 일반폐기물',
];

const designatedWaste = [
  '폐유 · 폐윤활유',
  '폐오일필터 · 필터류',
  '폐페인트 / 폐유기용제',
  '폐배터리(납축전지)',
  '자동차 정비과정 지정폐기물',
];

const CeWasteTargets = () => {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">♻️ 영업대상 폐기물</span>
        <h2>자동차환경이 취급하는 폐기물</h2>
        <p>
          자동차 정비업체, 폐차 · 부품업체, 운수업체 등에서 발생하는 폐기물을
          위탁 수집·운반·처리합니다. 아래 품목 외 별도 품목도 상담 가능합니다.
        </p>
      </S.Header>

      <S.ContentWrapper>
        <S.Block>
          <h3>① 일반·사업장 폐기물</h3>
          <p className="desc">재활용·선별 가능한 품목 위주</p>
          <S.BadgeWrap>
            {generalWaste.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </S.BadgeWrap>
        </S.Block>

        <S.Block>
          <h3>② 지정폐기물</h3>
          <p className="desc">폐유·폐용제 등 법적 관리가 필요한 폐기물</p>
          <S.BadgeWrap>
            {designatedWaste.map((item) => (
              <span key={item} className="badge badge--danger">
                {item}
              </span>
            ))}
          </S.BadgeWrap>
        </S.Block>
      </S.ContentWrapper>

      <S.Note>
        ※ 실제 반입 가능 여부는 품목별 성상, 수분함량, 혼입물 여부에 따라 달라질
        수 있습니다.
      </S.Note>
    </S.Section>
  );
};

export default CeWasteTargets;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 6rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 3.5rem;

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
      ${({ theme }) => theme.font.FONT24B};
      font-size: clamp(2rem, 3vw, 2.4rem);
      margin-top: 1.2rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      ${({ theme }) => theme.font.FONT16};
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 0.9rem;
      line-height: 1.7;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
    }
  `,
  ContentWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      grid-template-columns: 1fr;
    }
  `,
  Block: styled.div`
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.color.CE + '14'};
    border-radius: 1.4rem;
    padding: 2.2rem 2rem 1.8rem;
    box-shadow: 0 10px 20px rgba(140, 199, 71, 0.03);

    h3 {
      ${({ theme }) => theme.font.FONT18B};
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 0.4rem;
      color: ${({ theme }) => theme.color.black};
    }

    .desc {
      ${({ theme }) => theme.font.FONT14};
      color: ${({ theme }) => theme.color.deepGray};
      margin-bottom: 1.4rem;
    }
  `,
  BadgeWrap: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    row-gap: 0.7rem;
    min-height: 4rem;

    .badge {
      background: ${({ theme }) => theme.color.CE + '12'};
      color: ${({ theme }) => theme.color.black};
      border: 1px solid ${({ theme }) => theme.color.CE + '33'};
      border-radius: 999px;
      padding: 0.45rem 1rem;
      ${({ theme }) => theme.font.FONT14};
      white-space: nowrap;
    }

    .badge--danger {
      /* 지정폐기물은 색깔 살짝 다르게 */
      background: rgba(255, 115, 115, 0.08);
      border: 1px solid rgba(255, 115, 115, 0.25);
      color: #a63434;
    }
  `,
  Note: styled.p`
    ${({ theme }) => theme.font.FONT12};
    color: ${({ theme }) => theme.color.deepGray};
    margin-top: 2.2rem;
    text-align: right;
  `,
};
