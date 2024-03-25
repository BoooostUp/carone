import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const FooterExample = () => {
  return (
    <S.FooterWrapper>
      <Footer />
    </S.FooterWrapper>
  );
};

export default FooterExample;

const S = {
  FooterWrapper: styled.div`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    padding: 25px 25px;
  `,
};
