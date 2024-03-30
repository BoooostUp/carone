import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LNB_CONTENTS } from '../../constants/LNB_CONTENTS';

const LNB = ({ company }) => {
  return (
    <Lnb.Container company={company}>
      <Lnb.IntroduceContainer>
        {LNB_CONTENTS.OUR_COMPANY.map((item, index) => (
          <Link to="/" key={index}>
            <Lnb.LnbButton>{item}</Lnb.LnbButton>
          </Link>
        ))}
      </Lnb.IntroduceContainer>
      <Lnb.Contents>
        {LNB_CONTENTS[company].map((item, index) => (
          <Link to="/" key={index}>
            <Lnb.LnbButton key={index}>{item}</Lnb.LnbButton>
          </Link>
        ))}
      </Lnb.Contents>
    </Lnb.Container>
  );
};

export default LNB;

const Lnb = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    width: 100%;
    padding: 2rem;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.6;
      background-color: ${({ theme, company }) => theme.color[company]};
    }
  `,
  IntroduceContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Contents: styled.div`
    display: flex;
    flex-direction: column;
  `,
  LnbButton: styled.button`
    text-align: start;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT14};
    line-height: 1.8;
    position: relative;
    z-index: 1;

    &:hover {
      text-decoration: underline;
    }
  `,
};
