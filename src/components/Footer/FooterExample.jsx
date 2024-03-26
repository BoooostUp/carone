import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { footerContents } from './FooterContents';

const FooterExample = () => {
  return (
    <S.FooterWrapper>
      <Footer contents={footerContents.carone} />
      <Footer contents={footerContents.ce} />
      <Footer contents={footerContents.carone} />
      <Footer contents={footerContents.carone} />
      <Footer contents={footerContents.carone} />
    </S.FooterWrapper>
  );
};

export default FooterExample;

const S = {
  FooterWrapper: styled.div`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    padding: 25px 25px;
    gap: 20px;
  `,
};
