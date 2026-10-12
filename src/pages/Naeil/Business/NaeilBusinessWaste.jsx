import styled from 'styled-components';

// 출처: 폐기물 수집·운반업 허가증 영업대상폐기물 항목 (2024.04.02 변경허가 기준)
const wasteGroups = [
  {
    icon: '🧱',
    title: '지정폐기물 (고상)',
    authority: '낙동강유역환경청',
    items: [
      '오니류',
      '분진',
      '폐내화물',
      '사업장폐기물 소각시설 비산재',
      '폐유기용제',
      '폐페인트',
      '폐유',
      '폐유독물',
      '폐석면',
    ],
  },
  {
    icon: '🛢️',
    title: '지정폐기물 (액상)',
    authority: '낙동강유역환경청',
    items: ['폐산', '폐알칼리', '폐유기용제', '폐페인트', '폐유', '폐유독물'],
  },
  {
    icon: '🏭',
    title: '사업장배출시설계폐기물 (고상)',
    authority: '울산광역시 울주군',
    items: ['사업장배출시설계폐기물(고상)'],
  },
];

function NaeilBusinessWaste() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">🗑️ Business Waste</span>
        <h2>㈜내일넷 영업대상 폐기물</h2>
        <p>
          내일넷은 <b>낙동강유역환경청</b>과 <b>울산광역시 울주군</b> 허가에
          따라 아래 폐기물을 수집·운반합니다.
        </p>
      </S.Header>

      <S.Groups>
        {wasteGroups.map((group) => (
          <S.Group key={group.title}>
            <S.GroupHead>
              <span className="icon" aria-hidden="true">
                {group.icon}
              </span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.authority} 허가</p>
              </div>
            </S.GroupHead>
            <S.Chips>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </S.Chips>
          </S.Group>
        ))}
      </S.Groups>

      <S.Foot>
        ※ 유해물질 함유 폐기물 : 분진, 폐내화물, 사업장폐기물 소각시설 비산재
      </S.Foot>
    </S.Section>
  );
}

export default NaeilBusinessWaste;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 2rem 8rem;

    @media (max-width: 767px) {
      padding: 4rem 0 6rem;
    }
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4.5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.NAEIL};
      color: #fff;
      padding: 0.85rem 2.1rem;
      border-radius: 999px;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 0 5px 14px ${({ theme }) => theme.color.NAEIL + '55'};
    }

    h2 {
      font-size: clamp(2.8rem, 4vw, 3.4rem);
      font-weight: 800;
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.color.black};
      word-break: keep-all;
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.1rem;
      line-height: 1.8;
      max-width: 780px;
      margin-inline: auto;
      word-break: keep-all;

      b {
        font-size: inherit;
        color: ${({ theme }) => theme.color.NAEIL};
      }
    }
  `,
  Groups: styled.div`
    display: grid;
    gap: 2.4rem;
  `,
  Group: styled.div`
    background: #fff;
    border: 2px solid ${({ theme }) => theme.color.NAEIL + '22'};
    border-radius: 1.8rem;
    padding: 2.8rem 3rem;
    box-shadow: 0 8px 26px rgba(0, 0, 0, 0.04);

    @media (max-width: 767px) {
      padding: 2.2rem 1.8rem;
    }
  `,
  GroupHead: styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin-bottom: 1.8rem;

    .icon {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.9rem;
      font-weight: 800;
      color: ${({ theme }) => theme.color.black};
      word-break: keep-all;
    }

    p {
      margin-top: 0.3rem;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.NAEIL};
    }
  `,
  Chips: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.7rem 1.4rem;
      border-radius: 999px;
      background: ${({ theme }) => theme.color.NAEIL + '12'};
      color: ${({ theme }) => theme.color.black};
      font-size: 1.35rem;
      font-weight: 600;
    }
  `,
  Foot: styled.p`
    margin-top: 3.2rem;
    text-align: center;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.deepGray};
    word-break: keep-all;
  `,
};
