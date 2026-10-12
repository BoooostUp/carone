import { useEffect } from 'react';
import styled from 'styled-components';

const businesses = [
  {
    icon: '☣️',
    title: '지정폐기물 수집·운반업',
    authority: '낙동강유역환경청 허가 · 제 1-207호',
    items: [
      '고상 · 액상 지정폐기물 수집·운반',
      '오니류, 분진, 폐석면 등 유해물질 함유 폐기물',
      '폐유, 폐유기용제, 폐페인트, 폐산, 폐알칼리 등 액상 폐기물',
      '탱크로리 · 밀폐형 차량 등 전용 차량 6대 운영',
    ],
  },
  {
    icon: '🚛',
    title: '사업장배출시설계폐기물 수집·운반업',
    authority: '울산광역시 울주군 허가 · 제 울주-사업장-134호',
    items: [
      '사업장배출시설계폐기물(고상) 수집·운반',
      '1톤 트럭부터 25.5톤 덤프트럭 · 암롤트럭까지 전용 차량 4대 운영',
    ],
  },
];

function NaeilBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Section>
      <S.Header>
        <span className="tag">⚙️ Business Area</span>
        <h2>㈜내일넷 주요 사업분야</h2>
        <p>
          ㈜내일넷은 <b>지정폐기물</b>과 <b>사업장배출시설계폐기물</b>을 허가
          기준에 맞는 전용 차량으로 안전하게 수집·운반하는{' '}
          <b>폐기물 수집·운반 전문기업</b>입니다.
        </p>
      </S.Header>

      <S.Cards>
        {businesses.map((b) => (
          <S.Card key={b.title}>
            <div className="icon" aria-hidden="true">
              {b.icon}
            </div>
            <h3>{b.title}</h3>
            <p className="subtitle">{b.authority}</p>
            <ul>
              {b.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </S.Card>
        ))}
      </S.Cards>
    </S.Section>
  );
}

export default NaeilBusinessAbout;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 8rem 2rem 9rem;

    @media (max-width: 767px) {
      padding: 4rem 0 6rem;
    }
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.NAEIL};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 1.3rem;
      letter-spacing: 0.02em;
      box-shadow: 0 6px 15px ${({ theme }) => theme.color.NAEIL + '55'};
    }

    h2 {
      font-size: clamp(3.2rem, 4vw, 3.8rem);
      font-weight: 800;
      margin-top: 1.6rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.5rem;
      line-height: 1.9;
      max-width: 800px;
      margin-inline: auto;
      word-break: keep-all;
    }

    b {
      font-size: inherit;
      color: ${({ theme }) => theme.color.NAEIL};
    }
  `,
  Cards: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
    gap: 2.4rem;
  `,
  Card: styled.div`
    background: #fff;
    border: 3px solid ${({ theme }) => theme.color.NAEIL + '33'};
    border-radius: 2rem;
    padding: 4rem 3rem;
    text-align: center;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

    .icon {
      font-size: 3.5rem;
      margin-bottom: 1.2rem;
    }

    h3 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 0.8rem;
      color: ${({ theme }) => theme.color.black};
      word-break: keep-all;
    }

    .subtitle {
      font-size: 1.35rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.NAEIL};
      margin-bottom: 1.8rem;
      word-break: keep-all;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.color.deepGray};
        line-height: 1.9;
        margin-bottom: 0.6rem;
        word-break: keep-all;
      }
    }

    @media (max-width: 767px) {
      padding: 3rem 1.8rem;
    }
  `,
};
