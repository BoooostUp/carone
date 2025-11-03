import wasteImg from '../../../assets/images/carone2/businessWaste.png';
import styled from 'styled-components';

const designatedWaste = [
  '지정폐기물',
  '사업장 배출시설계 폐기물',
  '폐합성수지류(51-03-01)',
  '폐합성고무류(51-03-02)',
  '폐유(폐합성수지용기류)',
  '폐유(폐오일필터, 폐흡수용기류)',
  '철제용기류 - 폐유성페인트(05-01-00)',
  '철제용기류 - 폐주둥유(06-01-03)',
  '철제용기류 - 기타 폐광물유(06-01-99)',
];

const generalWaste = ['고철', '건설폐기물'];
function Carone2BusinessWaste() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">♻️ 영업대상 폐기물</span>
        <h2>카원이 처리하는 폐기물 품목</h2>
        <p>
          카원은 지정폐기물, 금속계 폐기물, 건설폐기물 등 다양한 품목을
          수집·운반·재활용합니다. 모든 폐기물은 성상과 분류에 따라 안전하게
          선별·처리됩니다.
        </p>
      </S.Header>

      <S.ContentWrapper>
        <S.Block>
          <h3>① 지정폐기물</h3>
          <p className="desc">사업장 및 금속·화학 계열 폐기물 중심</p>
          <S.BadgeWrap>
            {designatedWaste.map((item) => (
              <span key={item} className="badge badge--designated">
                {item}
              </span>
            ))}
          </S.BadgeWrap>
        </S.Block>

        <S.Block>
          <h3>② 일반 / 건설폐기물</h3>
          <p className="desc">건설 및 철재 구조물에서 발생하는 재활용 대상</p>
          <S.BadgeWrap>
            {generalWaste.map((item) => (
              <span key={item} className="badge badge--general">
                {item}
              </span>
            ))}
          </S.BadgeWrap>
        </S.Block>
      </S.ContentWrapper>

      <S.Note>
        ※ 실제 반입 가능 품목은 성상·혼입물 여부에 따라 달라질 수 있습니다.
      </S.Note>
    </S.Section>
  );
}

const S = {
  Section: styled.section`
    max-width: 1150px;
    margin: 0 auto;
    padding: 6rem 2rem 8rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.CARONE};
      color: #fff;
      padding: 0.6rem 1.3rem;
      border-radius: 9999px;
      font-size: 1rem;
      font-weight: 700;
      box-shadow: 0 4px 10px ${({ theme }) => theme.color.CARONE + '66'};
      text-transform: uppercase;
    }

    h2 {
      ${({ theme }) => theme.font.FONT28B};
      font-size: clamp(2rem, 3vw, 2.5rem);
      margin-top: 1.2rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      ${({ theme }) => theme.font.FONT18};
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1rem;
      line-height: 1.8;
      max-width: 750px;
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
    background: #fff;
    border: 1px solid rgba(246, 180, 54, 0.18);
    border-radius: 1.5rem;
    padding: 2.5rem 2rem 2rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);

    h3 {
      ${({ theme }) => theme.font.FONT20B};
      margin-bottom: 0.3rem;
      color: ${({ theme }) => theme.color.black};
    }

    .desc {
      ${({ theme }) => theme.font.FONT14};
      color: ${({ theme }) => theme.color.deepGray};
      margin-bottom: 1.2rem;
    }
  `,
  BadgeWrap: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    .badge {
      border-radius: 9999px;
      padding: 0.45rem 1rem;
      ${({ theme }) => theme.font.FONT14};
      white-space: nowrap;
      border: 1px solid rgba(246, 180, 54, 0.4);
      color: ${({ theme }) => theme.color.black};
    }

    .badge--designated {
      background: rgba(246, 180, 54, 0.12);
    }

    .badge--general {
      background: rgba(255, 241, 209, 0.4);
    }
  `,
  Note: styled.p`
    ${({ theme }) => theme.font.FONT12};
    color: ${({ theme }) => theme.color.deepGray};
    margin-top: 2.2rem;
    text-align: right;
  `,
};

export default Carone2BusinessWaste;
