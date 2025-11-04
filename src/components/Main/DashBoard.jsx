import styled from 'styled-components';
import capability from '../../assets/images/dashboard/capability.png';
import contract from '../../assets/images/dashboard/contract.png';
import factory from '../../assets/images/dashboard/factory.png';
import recycle from '../../assets/images/dashboard/recycle.png';
import { media } from '../../styles/utils/mediaQuery';

const DashBoard = () => {
  return (
    <S.Section aria-labelledby="dashboard-title">
      <S.Inner>
        {/* Hero */}
        <S.Hero>
          <S.Badge>Zero Waste</S.Badge>
          <S.Title id="dashboard-title">
            깨끗한 지구를 위한 <b>우리의 도전</b>
          </S.Title>
          <S.Sub>
            우리 기업은 폐기물을 최대한 재활용하여 자원의 절약 및 녹색환경
            정책에 부응합니다. <br />
            <strong>
              폐기물 재활용 <em>99.9%</em> 달성
            </strong>
            을 목표로 더 밝은 미래와 깨끗한 환경을 위해 나아갑니다.
          </S.Sub>
        </S.Hero>

        {/* KPI Grid */}
        <S.Grid role="list">
          <S.Card role="listitem">
            <S.IconCircle>
              <img src={recycle} alt="" aria-hidden="true" />
            </S.IconCircle>
            <S.Metric>
              <span className="value">99.9%</span>
              <span className="label">재활용 목표</span>
            </S.Metric>
            <S.Desc>자원 순환을 극대화하는 공정 혁신</S.Desc>
          </S.Card>

          <S.Card role="listitem">
            <S.IconCircle>
              <img src={contract} alt="" aria-hidden="true" />
            </S.IconCircle>
            <S.Metric>
              <span className="value">5,000+</span>
              <span className="label">주요 거래처</span>
            </S.Metric>
            <S.Desc>산업 전반의 파트너십 네트워크</S.Desc>
          </S.Card>

          <S.Card role="listitem">
            <S.IconCircle>
              <img src={capability} alt="" aria-hidden="true" />
            </S.IconCircle>
            <S.Metric>
              <span className="value">80만 톤</span>
              <span className="label">연간 처리능력</span>
            </S.Metric>
            <S.Desc>안전·효율 중심의 처리 시스템</S.Desc>
          </S.Card>

          <S.Card role="listitem">
            <S.IconCircle>
              <img src={factory} alt="" aria-hidden="true" />
            </S.IconCircle>
            <S.Metric>
              <span className="value">20개</span>
              <span className="label">지점 및 설비</span>
            </S.Metric>
            <S.Desc>수집·재활용 전 과정 현장 운영</S.Desc>
          </S.Card>
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
};

export default DashBoard;

/* ===================== styles ===================== */
const S = {
  Section: styled.section`
    position: relative;
    isolation: isolate;
    padding: 64px 20px;
    background: radial-gradient(
        900px 400px at 10% -10%,
        ${({ theme }) => theme.color.TOTAL + '12'},
        transparent 60%
      ),
      radial-gradient(
        800px 360px at 100% 0%,
        ${({ theme }) => theme.color.ES + '12'},
        transparent 60%
      ),
      #fff;

    ${media.desktop`
      padding: 84px 24px;
    `}
  `,

  Inner: styled.div`
    max-width: 1200px;
    margin: 0 auto;
  `,

  Hero: styled.header`
    text-align: center;
    margin-bottom: 36px;

    ${media.desktop`
      margin-bottom: 48px;
    `}
  `,

  Badge: styled.span`
    display: inline-block;
    padding: 8px 14px;
    border-radius: 9999px;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    color: #fff;
    background: ${({ theme }) => theme.color.TOTAL};
    box-shadow: 0 8px 20px ${({ theme }) => theme.color.TOTAL + '44'};
  `,

  Title: styled.h1`
    margin-top: 14px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.black};
    font-size: clamp(2.2rem, 4.6vw, 3.2rem);
    line-height: 1.15;

    b {
      color: ${({ theme }) => theme.color.TOTAL};
    }
  `,

  Sub: styled.p`
    margin-top: 14px;
    color: ${({ theme }) => theme.color.mainGray};
    font-size: clamp(2rem, 2.4vw, 1.25rem);
    line-height: 1.8;
    strong {
      font-weight: 800;
      color: ${({ theme }) => theme.color.black};
      font-size: 1.5rem;
    }
    em {
      font-style: normal;
      color: ${({ theme }) => theme.color.TOTAL};
      font-size: 2rem;
    }
  `,

  Grid: styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 22px;

    ${media.tablet`
      gap: 20px;
    `}
    ${media.desktop`
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 24px;
      margin-top: 28px;
    `}
  `,

  Card: styled.article`
    position: relative;
    border-radius: 16px;
    padding: 20px 18px 22px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
    backdrop-filter: saturate(140%) blur(6px);
    transition:
      transform 0.18s ease,
      box-shadow 0.18s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 24px 44px rgba(0, 0, 0, 0.12);
    }
  `,

  IconCircle: styled.div`
    width: 64px;
    height: 64px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: ${({ theme }) => theme.color.TOTAL + '12'};
    border: 1px solid ${({ theme }) => theme.color.TOTAL + '33'};
    margin-bottom: 14px;

    img {
      width: 38px;
      height: 38px;
      object-fit: contain;
      filter: saturate(1.1);
    }
  `,

  Metric: styled.div`
    display: grid;
    gap: 4px;
    margin-bottom: 8px;

    .value {
      font-weight: 800;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.color.black};
      font-size: clamp(1.6rem, 3.6vw, 2rem);
      line-height: 1.1;
    }
    .label {
      color: ${({ theme }) => theme.color.deepGray};
      font-weight: 700;
      font-size: clamp(1.4rem, 2.2vw, 1.05rem);
    }
  `,

  Desc: styled.p`
    margin-top: 4px;
    color: ${({ theme }) => theme.color.mainGray};
    font-size: clamp(1.4rem, 2vw, 1rem);
    line-height: 1.6;
  `,
};
