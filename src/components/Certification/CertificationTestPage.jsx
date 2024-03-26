import { useState } from 'react';
import styled from 'styled-components';
import Certification from './Certification';
import lens from '../../assets/icons/lens.svg';
import certificate from '../../assets/images/certificates/certificate1.svg';

const CertificationTestPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <S.Container>
        <S.CertificationImgContainer onClick={showModal}>
          <S.CertificationImg src={certificate} alt="" />
        </S.CertificationImgContainer>

        <S.Lens src={lens} alt="lens" />
      </S.Container>

      {modalOpen && <Certification setModalOpen={setModalOpen} />}
    </>
  );
};

export default CertificationTestPage;
const S = {
  Container: styled.div`
    position: relative;
    width: 10rem;
    height: auto;
    display: inline-block;
  `,

  CertificationImgContainer: styled.div`
    cursor: pointer;
    &:hover {
      filter: brightness(0.5);
    }
  `,

  Lens: styled.img`
    width: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
  `,
  CertificationImg: styled.img`
    width: 100%;
    display: block;
  `,
};
