import styled from 'styled-components';

// 출처: 폐기물 수집·운반업 허가증(일반 - 울주군 / 지정 - 낙동강유역환경청) 변경사항
const history = [
  {
    year: '2022.05',
    text: '사업장배출시설계폐기물 수집·운반업 최초 허가 → 울산광역시 울주군',
    bullets: ['허가번호 : 제 울주-사업장-134호'],
  },
  {
    year: '2022.08',
    text: '지정폐기물 수집·운반업 최초 허가 → 낙동강유역환경청',
    bullets: ['허가번호 : 제 1-207호', '고상차량 3대 · 액상차량 2대'],
  },
  {
    year: '2023.01',
    text: '지정폐기물 수집·운반업 변경허가 (액상 탱크로리 증차)',
    bullets: ['총 6대 · 총 적재능력 63.35톤'],
  },
  {
    year: '2023.06',
    text: '사업장배출시설계폐기물 수집·운반업 변경허가 (덤프트럭 증차)',
    bullets: ['총 3대'],
  },
  {
    year: '2024.04',
    text: '지정폐기물 수집·운반업 변경허가 (영업대상 폐기물 폐석면 추가)',
  },
  {
    year: '2026.02',
    text: '사업장배출시설계폐기물 수집·운반업 변경허가 (덤프트럭 증차)',
    bullets: ['총 4대'],
  },
];

const NaeilInfoHistory = () => {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">🏛️ Company History</span>
        <h2>㈜내일넷 연혁</h2>
        <p>
          ㈜내일넷은 <b>지정폐기물</b>과 <b>사업장배출시설계폐기물</b>의
          수집·운반 허가를 바탕으로 차량과 처리 품목을 꾸준히 확대해 왔습니다.
        </p>
      </S.Header>

      <S.Timeline>
        {history.map((item) => (
          <S.Item key={item.year + item.text}>
            <S.Year>{item.year}</S.Year>
            <div>
              <S.Text>{item.text}</S.Text>
              {item.bullets?.length > 0 && (
                <S.Bullets>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </S.Bullets>
              )}
            </div>
          </S.Item>
        ))}
      </S.Timeline>
    </S.Section>
  );
};

export default NaeilInfoHistory;

/* ============== styles (HJ 연혁과 동일 규격) ============== */
const S = {
  Section: styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 8rem 2rem 10rem;

    @media (max-width: 767px) {
      padding: 4rem 0 6rem;
    }
  `,
  Header: styled.header`
    text-align: center;
    margin-bottom: 5.5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.NAEIL};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 800;
      font-size: 1.35rem;
      box-shadow: 0 6px 14px ${({ theme }) => theme.color.NAEIL + '55'};
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
      word-break: keep-all;

      b {
        font-size: inherit;
        color: ${({ theme }) => theme.color.NAEIL};
        font-weight: 800;
      }
    }
  `,
  Timeline: styled.div`
    --rail: 42px;
    --pad: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: calc(var(--rail) + var(--pad));

    &::before {
      content: '';
      position: absolute;
      left: calc(var(--rail) / 2);
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.color.NAEIL + '55'};
    }

    @media (max-width: 640px) {
      --rail: 28px;
      --pad: 10px;
      gap: 1.6rem;
    }
  `,
  Item: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 10rem 1fr;
    column-gap: 2rem;
    align-items: start;

    &::before {
      content: '';
      position: absolute;
      left: calc(-1 * (var(--rail) + var(--pad)) + var(--rail) / 1.9);
      top: 1rem;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.NAEIL};
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      row-gap: 0.4rem;
    }
  `,
  Year: styled.div`
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.NAEIL};
    letter-spacing: 0.02em;
  `,
  Text: styled.div`
    font-size: 1.5rem;
    line-height: 1.85;
    color: ${({ theme }) => theme.color.black};
    word-break: keep-all;
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
};
