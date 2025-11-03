import { useEffect } from 'react';
import processImg from '../../../assets/images/total/businessAbout.png';
import styled from 'styled-components';
import EsBusinessArea from './EsBusinessArea';

function EsBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <EsBusinessArea />
    </S.Container>
  );
}

export default EsBusinessAbout;

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
      object-fit: cover;
    }
  `,
};
