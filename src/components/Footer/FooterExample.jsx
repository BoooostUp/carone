import styled from 'styled-components';
import Footer from './Footer';
import { footerContents as FOOTER_CONTETNTS } from './FOOTER_CONTENTS';

const FooterExample = () => {
  return (
    <S.FooterWrapper>
      <Footer contents={FOOTER_CONTETNTS.carone} />
      <Footer contents={FOOTER_CONTETNTS.ce} />
      <Footer contents={FOOTER_CONTETNTS.total} />
      <Footer contents={FOOTER_CONTETNTS.si} />
      <Footer contents={FOOTER_CONTETNTS.sg} />
      <Footer contents={FOOTER_CONTETNTS.main} />
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
