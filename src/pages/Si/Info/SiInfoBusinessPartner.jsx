import styled from 'styled-components';
import BusinessPartner from '../../../components/Main/BusinessPartner';
import { BUSINESS_PARTNER_CONTENTS } from '../../../constants/BUSINESS_PARTNER_CONTENTS';

function SiInfoBusinessPartner() {
  return (
    <>
      <S.Text>{BUSINESS_PARTNER_CONTENTS.SI.title}</S.Text>
      <S.Container>
        {BUSINESS_PARTNER_CONTENTS.SI.imageAddress.map((item, index) => {
          return <BusinessPartner imageAddress={item} key={index} />;
        })}
      </S.Container>
    </>
  );
}

export default SiInfoBusinessPartner;

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
    ${({ theme }) => theme.font.FONT20SB}
    margin-bottom: 4rem;
  `,
};
