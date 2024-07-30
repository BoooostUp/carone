import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BnbButton from './BnbButton';
import { media } from '../../../styles/utils/mediaQuery';

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
  };

  const [buttonStatus, setButtonStatus] = useState(initialState);

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
      HOME: '/home',
      CE: '/ce',
      CARONE: '/carone',
      SG: '/sg',
      TOTAL: '/total',
      SI: '/si',
    };

    // Navigate to the designated path based on button name
    const path = pathMapping[buttonName];
    if (path) {
      navigate(path);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
    </S.ButtonWrapper>
  );
};
export default Bnb;

const S = {
  ButtonWrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${media.desktop`
     grid-template-columns: repeat(6, 1fr);

    `}
  `,
};
