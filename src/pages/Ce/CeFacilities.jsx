import styled from 'styled-components';
import ceFacilities from '../../assets/images/facilities/ceFacilities.png';

function CeFacilities() {
  return (
    <S.Container>
      <S.Image src={ceFacilities} alt="자동차환경 보유 설비" />
      <h2>운송/집하 장비</h2>
    </S.Container>
  );
}

export default CeFacilities;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    margin: 0 auto;
    max-width: 70rem;
    min-height: 40rem;
    padding-top: 8rem;
    padding-bottom: 8rem;

    & h2 {
      ${({ theme }) => theme.font.FONT20B}
    }

    @media (max-width: 767px) {
      padding: 5rem 3rem;
      min-height: 30rem;

      & h2 {
        ${({ theme }) => theme.font.FONT12SB}
      }
    }
  `,

  Image: styled.img`
    width: 100%;
  `,
};
