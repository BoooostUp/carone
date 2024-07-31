import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DropDown from '../DropDown';
import BnbButton from './BnbButton';

//TODO: Change initialState all false
const Bnb = ({ company }) => {
  const navigate = useNavigate();
  // Make initial state true if company name props is same as the button name
  const initialState = {
    HOME: company === 'HOME',
    CE: company === 'CE',
    CARONE: company === 'CARONE',
    SG: company === 'SG',
    TOTAL: company === 'TOTAL',
    SI: company === 'SI',
    HJ: company === 'HJ',
    ES: company === 'ES',
  };

  const [buttonStatus, setButtonStatus] = useState(initialState);
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 768);

  const handleClick = (buttonName) => {
    // Update the status of the button
    // Make previous true value make false
    setButtonStatus((prev) => {
      const newStatus = { ...prev };
      Object.keys(newStatus).forEach((key) => {
        if (key === buttonName) {
          newStatus[key] = true;
        } else {
          newStatus[key] = false;
        }
      });
      return newStatus;
    });
    // Navigate to the designated path
    const pathMapping = {
      HOME: '/',
      CE: '/ce',
      CARONE: '/carone',
      SG: '/sg',
      TOTAL: '/total',
      SI: '/si',
      HJ: '/hj',
      ES: '/es',
    };

    // Navigate to the designated path based on button name
    const path = pathMapping[buttonName];
    if (path) {
      navigate(path);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isMobileSize ? (
    <DropDown handleClick={handleClick} buttonStatus={buttonStatus} />
  ) : (
    <S.ButtonWrapper>
      <BnbButton
        variant="home"
        status={buttonStatus.HOME}
        onClick={() => handleClick('HOME')}
      >
        HOME
      </BnbButton>
      <BnbButton
        variant="ce"
        status={buttonStatus.CE}
        onClick={() => handleClick('CE')}
      >
        (주)자동차환경
      </BnbButton>
      <BnbButton
        variant="carone"
        status={buttonStatus.CARONE}
        onClick={() => handleClick('CARONE')}
      >
        (유)카원
      </BnbButton>
      <BnbButton
        variant="sg"
        status={buttonStatus.SG}
        onClick={() => handleClick('SG')}
      >
        (주)에스지산업
      </BnbButton>
      <BnbButton
        variant="total"
        status={buttonStatus.TOTAL}
        onClick={() => handleClick('TOTAL')}
      >
        (주)토탈
      </BnbButton>
      <BnbButton
        variant="si"
        status={buttonStatus.SI}
        onClick={() => handleClick('SI')}
      >
        (주)세명인텍
      </BnbButton>
      <BnbButton
        variant="hj"
        status={buttonStatus.HJ}
        onClick={() => handleClick('HJ')}
      >
        (주)황지
      </BnbButton>
      <BnbButton
        variant="es"
        status={buttonStatus.ES}
        onClick={() => handleClick('ES')}
      >
        (주)에너지스토리
      </BnbButton>
    </S.ButtonWrapper>
  );
};
export default Bnb;

const S = {
  ButtonWrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  `,
};
