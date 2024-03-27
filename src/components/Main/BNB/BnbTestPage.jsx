import React from 'react';
import { useState } from 'react';
import Bnb from './Bnb';

//TODO : initialState를 전역으로 관리해야하는데 어떻게 관리할지 같이 고민하기 현제 페이지가 어떤 페이지인지 확인해야함

const BnbTestPage = () => {
  const initialState = {
    home: false,
    ce: false,
    carone: false,
    sg: false,
    total: false,
    si: false,
  };
  const [buttonStatus, setButtonStatus] = useState(initialState);

  const handleClick = (buttonName) => {
    // Update the status of the button
    setButtonStatus({
      ...initialState,
      [buttonName]: true,
    });
    // Navigate to the designated path
  };

  return <Bnb status={buttonStatus} onClick={handleClick} />;
};

export default BnbTestPage;
