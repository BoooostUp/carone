import styled from 'styled-components';
import Map from '../../components/Main/Map';

function HomeLocation() {
  return (
    <S.Container>
      <Map company="CE" />
      <Map company="CARONE" />
      <Map company="CARONE2" />
      <Map company="SG" />
      <Map company="TOTAL" />
    </S.Container>
  );
}

export default HomeLocation;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    margin: 0 auto;
    max-width: 70rem;
    min-height: 40rem;
    padding-top: 8rem;
    padding-bottom: 8rem;

    @media (max-width: 767px) {
      display: block;
      width: 100%;
      padding: 5rem 1.25rem;
      min-height: 30rem;
      gap: 5rem;
    }
  `,
};
