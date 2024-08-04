import styled from 'styled-components';
import BusinessPartner from '../../../components/Main/BusinessPartner';
import { BUSINESS_PARTNER_CONTENTS } from '../../../constants/BUSINESS_PARTNER_CONTENTS';
import { media } from '../../../styles/utils/mediaQuery';

const Total2InfoBusinessPartner = () => {
  return (
    <>
      <S.Text>{BUSINESS_PARTNER_CONTENTS.TOTAL2.title}</S.Text>
      <S.Container>
        {BUSINESS_PARTNER_CONTENTS.TOTAL2.imageAddress.map((item, index) => {
          return <BusinessPartner imageAddress={item} key={index} />;
        })}
      </S.Container>
    </>
  );
};

export default Total2InfoBusinessPartner;

const S = {
  Container: styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
  `,
  Text: styled.div`
    color: ${({ theme }) => theme.color.black};
    text-align: center;
    ${({ theme }) => theme.font.FONT14};
    margin-bottom: 4rem;

    ${media.desktop`
    ${({ theme }) => theme.font.FONT18}
    `}
  `,
};
