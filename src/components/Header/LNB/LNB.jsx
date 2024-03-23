import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const LNB = ({ company }) => {
  return (
    <Lnb.Container company={company.toLowerCase()}>
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
    background-color: ${({ theme, company }) => theme.color[company]};
    opacity: 70%;
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

    &:hover {
      text-decoration: underline;
    }
  `,
};
