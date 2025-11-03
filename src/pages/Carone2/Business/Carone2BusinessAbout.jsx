import { useEffect } from 'react';
import styled from 'styled-components';
import aboutImg from '../../../assets/images/carone2/businessAbout.png';
import CaroneBusinessArea from '../../Carone/Business/CaroneBusinessArea';

function Carone2BusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Layout>
      {/* <SubCategoryBar company="CARONE" /> */}
      <CaroneBusinessArea />
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    margin-top: -8rem;

    @media (max-width: 767px) {
      margin-top: -5rem;
    }
  `,
};

export default Carone2BusinessAbout;
