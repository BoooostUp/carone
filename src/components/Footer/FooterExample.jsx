import styled from 'styled-components';
import Footer from './Footer';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';

const FooterExample = () => {
  return (
    <S.FooterWrapper>
      <Footer contents={FOOTER_CONTENTS.carone} />
      <Footer contents={FOOTER_CONTENTS.ce} />
      <Footer contents={FOOTER_CONTENTS.total} />
      <Footer contents={FOOTER_CONTENTS.si} />
      <Footer contents={FOOTER_CONTENTS.sg} />
      <Footer contents={FOOTER_CONTENTS.main} />
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
