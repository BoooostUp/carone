import styled from 'styled-components';
import ceo from '../../assets/images/home/ceo.png';

function Ceo() {
  return (
    <S.Container>
      <S.Image src={ceo} alt="home 인사말" />
    </S.Container>
  );
}

export default Ceo;

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
