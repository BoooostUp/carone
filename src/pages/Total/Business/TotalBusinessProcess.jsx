// src/pages/Total/Business/TotalWasteFlow.jsx
import React from 'react';
import styled from 'styled-components';

function TotalWasteFlow() {
  return (
    <Section>
      <Header>
        <span className="tag">폐기물 처리 Flow</span>
        <h2>㈜토탈 폐기물 처리·에너지화 공정</h2>
        <p>
          반입 → 보관 이후 폐기물의 성상에 따라
          <b> 재활용 라인 / 일반소각 라인 / 고온소각 라인</b>으로 분기됩니다.
        </p>
      </Header>

      <TopFlow>
        <TopStep className="accent">폐기물 반입</TopStep>
        <Down>↓</Down>
        <TopStep>
          <div className="title">폐기물 보관</div>
          <div className="sub">안전구역 보관 · 성상 확인</div>
        </TopStep>
      </TopFlow>

      <Grid>
        {/* left */}
        <Col>
          <h3>① 페인트 / 액상 폐기물 재활용</h3>
          <Box>
            <Node soft>폐페인트</Node>
            <Arrow>↓</Arrow>
            <Node>
              재활용(정제)
              <span>불순물 제거 · 성상 조정</span>
            </Node>
            <Arrow>↓</Arrow>
            <Node>
              유기용제 생산
              <span>재생 solvent</span>
            </Node>
            <Arrow>↓</Arrow>
            <Node final>판매</Node>
          </Box>
        </Col>

        {/* middle */}
        <Col>
          <h3>② 일반/지정 → 소각 → 스팀생산</h3>
          <Box>
            <Node soft>일반 / 지정</Node>
            <Arrow>↓</Arrow>
            <Node>
              고형분(슬러지)
              <span>탈수 · 안정화</span>
            </Node>
            <Arrow>↓</Arrow>
            <Node>일반소각</Node>
            <Arrow>↓</Arrow>
            <Node>스팀생산</Node>
            <Arrow>↓</Arrow>
            <Node finalGreen>자체연료 사용</Node>
          </Box>
        </Col>

        {/* right */}
        <Col>
          <h3>③ 고온소각 → 스팀판매</h3>
          <Box>
            <Node soft>일반 / 지정</Node>
            <Arrow>↓</Arrow>
            <Node>
              고온소각
              <span>고발열량 폐기물</span>
            </Node>
            <Arrow>↓</Arrow>
            <Node>스팀생산</Node>
            <Arrow>↓</Arrow>
            <Node final>
              판매
              <span>열원 공급</span>
            </Node>
          </Box>
        </Col>
      </Grid>

      <Foot>
        ※ 스팀 사용 기업은 별도 설비 없이 공급을 받아 비용을 절감할 수 있으며,
        소각열 회수로 저탄소·친환경 정책에 부합합니다.
      </Foot>
    </Section>
  );
}

export default TotalWasteFlow;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 8rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4.2rem;

  .tag {
    display: inline-block;
    background: ${({ theme }) => theme.color.TOTAL};
    color: #fff;
    padding: 0.6rem 1.6rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 1.05rem;
  }

  h2 {
    font-size: 2.8rem; /* 👈 진짜 크게 */
    font-weight: 700;
    margin-top: 1.2rem;
    color: ${({ theme }) => theme.color.black};
  }

  p {
    font-size: 1.8rem; /* 👈 서브도 크게 */
    color: ${({ theme }) => theme.color.deepGray};
    margin-top: 1.1rem;
    line-height: 1.9;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TopFlow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: center;
  margin-bottom: 3.3rem;
`;

const TopStep = styled.div`
  background: #edf4f0;
  padding: 1.3rem 2.4rem;
  border-radius: 1.2rem;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  min-width: 13rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);

  &.accent {
    background: ${({ theme }) => theme.color.TOTAL};
    color: #fff;
  }

  .title {
    font-weight: 600;
  }
  .sub {
    font-size: 1rem;
    opacity: 0.75;
    margin-top: 0.3rem;
  }
`;

const Down = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color.deepGray};
  line-height: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;

  h3 {
    font-size: 2rem; /* 👈 컬럼 제목 크게 */
    font-weight: 700;
    text-align: center;
  }
`;

const Box = styled.div`
  background: #fff;
  border: 2px solid rgba(33, 122, 84, 0.12);
  border-radius: 1.4rem;
  padding: 1.4rem 1.6rem 1.6rem;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Node = styled.div`
  background: ${({ final, finalGreen, soft, theme }) => {
    if (final) return theme.color.TOTAL;
    if (finalGreen) return '#2f9f68';
    if (soft) return '#f2f7f4';
    return '#ffffff';
  }};
  color: ${({ final, finalGreen }) => (final || finalGreen ? '#fff' : '#111')};
  border-radius: 1rem;
  padding: 1rem 1rem 1rem;
  text-align: center;
  font-size: 1.8rem; /* 👈 박스 안 메인 글씨 */
  font-weight: 600;
  line-height: 1.4;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);

  span {
    display: block;
    margin-top: 0.25rem;
    font-size: 1.8rem; /* 👈 설명도 큼 */
    opacity: 0.85;
    line-height: 1.4;
  }
`;

const Arrow = styled.div`
  text-align: center;
  font-size: 1.7rem;
  color: rgba(0, 0, 0, 0.25);
`;

const Foot = styled.p`
  margin-top: 3.5rem;
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.deepGray};
  line-height: 1.8;
`;
