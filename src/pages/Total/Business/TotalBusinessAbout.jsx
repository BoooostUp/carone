import { useEffect } from 'react';
import processImg from '../../../assets/images/total/businessAbout.png';
import styled from 'styled-components';
import TotalBusinessArea from './TotalBusinessArea';

function TotalBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <TotalBusinessArea />
    </S.Container>
  );
}

export default TotalBusinessAbout;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  Banner: styled.div`
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 0;
      object-fit: cover;
    }
  `,
};
