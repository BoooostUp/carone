import React from 'react';
import styled from 'styled-components';

const HjInfoHistory = () => {
  const history = [
    {
      year: '2021.04',
      text: '폐기물처리(매립) 사업계획서 제출',
      bullets: [
        '사업부지 : 105,207 ㎡', // 원문 표기 보완(가독용 기호만 추가)
        '매립면적 : 79,453 ㎡',
        '매립용량 : 1,871,721 ㎥',
      ],
    },
    {
      year: '2021.07',
      text: '지하안전영향평가서 협의 완료 → 부산지방국토관리청',
    },
    { year: '2021.09', text: '폐기물처리 사업계획서 적정 통보 → 울산광역시' },
    { year: '2022.01', text: '㈜황지 설립' },
    {
      year: '2022.03',
      text: '폐기물처리시설 조성사업 부지 내 문화재 지표조사 → 문화재청',
    },
    {
      year: '2023.07',
      text: '폐기물처리 사업예정부지 부동산계약 체결 및 동의서 확보',
    },
    {
      year: '2025.11',
      text: '도시관리계획 시설 입안 제안 행정절차 진행 중 → 울산시 울주군',
    },
  ];

  return (
    <S.Section>
      <S.Header>
        <span className="tag">🏛️ Company History</span>
        <h2>㈜황지 연혁</h2>
        <p>
          ㈜황지는 울산권역의 안정적 매립 인프라 구축을 목표로
          <b> 행정·부지·기술 절차</b>를 단계적으로 추진 중입니다.
        </p>
      </S.Header>

      <S.Timeline>
        {history.map((item, idx) => (
          <S.Item key={idx}>
            <S.Year>{item.year}</S.Year>
            <div>
              <S.Text>{item.text}</S.Text>
              {Array.isArray(item.bullets) && item.bullets.length > 0 && (
                <S.Bullets>
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </S.Bullets>
              )}
            </div>
          </S.Item>
        ))}
      </S.Timeline>

      <S.Foot>
        ※ 본 매립시설 사업은 초기 단계에서 <b>(주)토탈</b>이 주관하여 절차를
        진행했으며,
        <br />
        향후 <b>허가 후 승계 등</b> 다양한 방식(검토 후 결정)을 통해{' '}
        <b>㈜황지로 일원화</b>하여 사업 추진 및 운영할 계획입니다.
      </S.Foot>
    </S.Section>
  );
};

export default HjInfoHistory;

/* ============== styles (CE/Carone/Total과 동일 규격) ============== */
const S = {
  Section: styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 8rem 2rem 10rem;
  `,
  Header: styled.header`
    text-align: center;
    margin-bottom: 5.5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.HJ || '#ff9900'};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 800;
      font-size: 1.35rem;
      box-shadow: 0 6px 14px
        ${({ theme }) => (theme.color.HJ || '#ff9900') + '55'};
      letter-spacing: 0.02em;
    }

    h2 {
      font-size: clamp(3.2rem, 4.2vw, 3.8rem);
      font-weight: 800;
      margin-top: 1.4rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.2rem;
      line-height: 1.95;
      max-width: 820px;
      margin-inline: auto;

      b {
        color: ${({ theme }) => theme.color.HJ || '#ff9900'};
        font-weight: 800;
      }
    }
  `,
  Timeline: styled.div`
    /* 레일(세로선) + 패딩 변수 — 표준 */
    --rail: 42px;
    --pad: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: calc(var(--rail) + var(--pad));

    /* 세로 레일 */
    &::before {
      content: '';
      position: absolute;
      left: calc(var(--rail) / 2);
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${({ theme }) => (theme.color.HJ || '#ff9900') + '55'};
    }

    @media (max-width: 640px) {
      --rail: 36px;
      --pad: 12px;
      gap: 1.6rem;
      padding-left: calc(var(--rail) + var(--pad));
    }
  `,
  Item: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 10rem 1fr; /* 연도 / 내용 */
    column-gap: 2rem;
    align-items: start;

    /* 점(노드) — 레일은 Timeline padding 바깥이므로, pad만큼 음수 보정 */
    &::before {
      content: '';
      position: absolute;
      left: calc(-1 * (var(--rail) + var(--pad)) + var(--rail) / 1.9);
      top: 1rem;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.HJ || '#ff9900'};
    }

    @media (max-width: 640px) {
      grid-template-columns: 8.5rem 1fr;
      column-gap: 1.4rem;
    }
  `,
  Year: styled.div`
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.HJ || '#ff9900'};
    letter-spacing: 0.02em;
  `,
  Text: styled.div`
    font-size: 1.5rem;
    line-height: 1.85;
    color: ${({ theme }) => theme.color.black};
  `,
  Bullets: styled.ul`
    margin-top: 0.5rem;
    padding-left: 1.2rem;
    li {
      font-size: 1.4rem;
      line-height: 1.8;
      color: ${({ theme }) => theme.color.deepGray};
      list-style: disc;
    }
  `,
  Foot: styled.p`
    margin-top: 3.2rem;
    text-align: center;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.color.deepGray};
    line-height: 1.9;

    b {
      color: ${({ theme }) => theme.color.HJ || '#ff9900'};
      font-weight: 800;
    }
  `,
};
