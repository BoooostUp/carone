import { useEffect } from 'react';
import styled from 'styled-components';
import SubCategoryBar from '../../../components/Main/SubCategoryBar';

function SgBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Layout>
      <SubCategoryBar company="SG" />
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
export default SgBusinessAbout;
