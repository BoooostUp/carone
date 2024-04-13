import styled from 'styled-components';
import siFacilities from '../../assets/images/facilities/siFacilities.png';

function SiFacilities() {
  return (
    <S.Container>
      <S.Image src={siFacilities} alt="카원 보유 설비" />
    </S.Container>
  );
}

export default SiFacilities;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 70rem;
    min-height: 40rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    @media (max-width: 767px) {
      padding: 5rem 3rem;
      min-height: 30rem;
    }
  `,

  Image: styled.img`
    width: 100%;
  `,
};
