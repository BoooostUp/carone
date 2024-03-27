import { useState } from 'react';
import styled from 'styled-components';
import Certification from './Certification';
import lens from '../../assets/icons/lens.svg';

const CertificationTestPage = ({
  image,
  setModalOpen,
  modalOpen,
  showModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <S.Container>
        <S.CertificationImgContainer
          onClick={showModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <S.CertificationImg
            src={image}
            alt="certificate"
            className={isHovered ? 'hovered' : ''}
          />
          <S.Lens
            src={lens}
            alt="lens"
            className={!isHovered ? 'display' : ''}
          />
        </S.CertificationImgContainer>
      </S.Container>
      {modalOpen && <Certification image={image} setModalOpen={setModalOpen} />}
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
    cursor: pointer;
  `,

  CertificationImgContainer: styled.div`
    cursor: pointer;
  `,
  Lens: styled.img`
    width: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    &.display {
      display: none;
    }
  `,
  CertificationImg: styled.img`
    width: 100%;
    display: block;
    transition: filter 0.5s;
    &.hovered {
      filter: brightness(0.5);
    }
  `,
};
