import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import certificate from '../../assets/images/certificates/certificate1.svg';
const Certification = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setModalOpen]);
  return (
    <>
      <S.Backdrop onClick={closeModal} />
      <S.CertificationContainer ref={modalRef}>
        <button onClick={closeModal}>X</button>
        <img src={certificate} alt="" />
      </S.CertificationContainer>
    </>
  );
};

export default Certification;

const S = {
  CertificationContainer: styled.div`
    width: 300px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  Backdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,
};
