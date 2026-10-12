import styled from 'styled-components';
import designated5tHighcar from '../../assets/images/naeil/designated_5t_highcar.webp';
import designatedHighcar from '../../assets/images/naeil/designated_highcar.webp';
import designatedHooklift from '../../assets/images/naeil/designated_hooklift.webp';
import designatedTanklorry from '../../assets/images/naeil/designated_tanklorry.webp';
import designatedWingbody from '../../assets/images/naeil/designated_wingbody.webp';
import general1tTruck from '../../assets/images/naeil/general_1t_truck.webp';
import generalDump from '../../assets/images/naeil/general_dump.webp';
import generalHooklift from '../../assets/images/naeil/general_hooklift.webp';
import office1 from '../../assets/images/naeil/office1.webp';
import office2 from '../../assets/images/naeil/office2.webp';

// 허가증 기준 차량 현황 (지정: 2023.01.04 변경허가 / 사업장: 2026.02.12 변경허가)
const summary = [
  { label: '지정폐기물 차량', value: '6대', sub: '총 적재능력 63.35톤' },
  { label: '액상 (탱크로리 등)', value: '3대', sub: '32.45톤' },
  { label: '고상 (밀폐형)', value: '3대', sub: '30.9톤' },
  { label: '사업장배출시설계 차량', value: '4대', sub: '1톤 ~ 25.5톤' },
];

const sections = [
  {
    title: '지정폐기물 수집·운반 차량',
    items: [
      { src: designatedTanklorry, caption: '탱크로리' },
      { src: designatedWingbody, caption: '윙바디' },
      { src: designatedHighcar, caption: '하이카' },
      { src: designated5tHighcar, caption: '5톤 하이카' },
      { src: designatedHooklift, caption: '암롤트럭' },
    ],
  },
  {
    title: '사업장배출시설계폐기물 수집·운반 차량',
    items: [
      { src: generalDump, caption: '25.5톤 덤프트럭' },
      { src: generalHooklift, caption: '암롤트럭' },
      { src: general1tTruck, caption: '1톤 트럭' },
    ],
  },
  {
    title: '사무실',
    items: [
      { src: office1, caption: '사무실 전경' },
      { src: office2, caption: '상담 공간' },
    ],
  },
];

function NaeilFacilities() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">🚚 Facilities</span>
        <h2>㈜내일넷 보유 설비</h2>
        <p>허가 기준에 맞춘 전용 수집·운반 차량을 운영합니다.</p>
      </S.Header>

      <S.Summary>
        {summary.map((s) => (
          <li key={s.label}>
            <span className="label">{s.label}</span>
            <strong>{s.value}</strong>
            <span className="sub">{s.sub}</span>
          </li>
        ))}
      </S.Summary>

      {sections.map((section) => (
        <S.Group key={section.title}>
          <h3>{section.title}</h3>
          <S.Grid>
            {section.items.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.caption} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </S.Grid>
        </S.Group>
      ))}

      <S.Foot>
        ※ 주차장 : 울산광역시 울주군 청량읍 덕하로 33 · 세차장 : 울산광역시 남구
        산업로 130
      </S.Foot>
    </S.Section>
  );
}

export default NaeilFacilities;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 8rem 2rem 9rem;

    @media (max-width: 767px) {
      padding: 5rem 1.25rem 6rem;
    }
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.NAEIL};
      color: #fff;
      padding: 1rem 2.2rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 1.3rem;
      box-shadow: 0 6px 15px ${({ theme }) => theme.color.NAEIL + '55'};
    }

    h2 {
      font-size: clamp(3rem, 4vw, 3.6rem);
      font-weight: 800;
      margin-top: 1.6rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.2rem;
      word-break: keep-all;
    }
  `,
  Summary: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.6rem;
    list-style: none;
    padding: 0;
    margin: 0 0 6rem;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    li {
      display: grid;
      gap: 0.4rem;
      justify-items: center;
      text-align: center;
      padding: 2.2rem 1.2rem;
      border-radius: 1.6rem;
      background: ${({ theme }) => theme.color.NAEIL + '10'};
      border: 1px solid ${({ theme }) => theme.color.NAEIL + '33'};
    }

    .label {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.deepGray};
      word-break: keep-all;
    }

    strong {
      font-size: 3rem;
      font-weight: 900;
      color: ${({ theme }) => theme.color.NAEIL};
    }

    .sub {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.color.deepGray};
    }
  `,
  Group: styled.div`
    margin-bottom: 5rem;

    h3 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 2rem;
      padding-left: 1.2rem;
      border-left: 5px solid ${({ theme }) => theme.color.NAEIL};
      color: ${({ theme }) => theme.color.black};
      word-break: keep-all;
    }
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    gap: 2rem;

    figure {
      margin: 0;
      border-radius: 1.4rem;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    img {
      display: block;
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }

    figcaption {
      padding: 1.2rem 1.4rem;
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.black};
    }
  `,
  Foot: styled.p`
    text-align: center;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.deepGray};
    line-height: 1.8;
    word-break: keep-all;
  `,
};
