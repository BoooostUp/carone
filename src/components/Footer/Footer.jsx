import styled from 'styled-components';
import Logo from '../../assets/icons/Logo.svg';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';
import { media } from '../../styles/utils/mediaQuery.ts';

const Footer = ({ company }) => {
  return (
    <div>
      <S.NameSloganWrapper>
        <div>
          <S.MainWrapper>
            <S.LogoImage src={Logo} alt="" />
            <div>
              <S.CompanyName>
                {FOOTER_CONTENTS[company].companyName}
              </S.CompanyName>
              {company !== 'HOME' && (
                <S.Subtitle>{FOOTER_CONTENTS[company].subtitle}</S.Subtitle>
              )}
            </div>
          </S.MainWrapper>
        </div>

        <div>© Since 2002</div>
      </S.NameSloganWrapper>

      <S.InfoContainer>
        {FOOTER_CONTENTS[company].info.map((info, index) => {
          return (
            <S.InfoWrapper key={index}>
              <p>{info.address}</p>
              <S.TelFaxWrapper
                $companyName={FOOTER_CONTENTS[company].companyName}
              >
                <p>{info.tel}</p>
                <p>{info.fax}</p>
              </S.TelFaxWrapper>
            </S.InfoWrapper>
          );
        })}
      </S.InfoContainer>
    </div>
  );
};

export default Footer;

const S = {
  LogoImage: styled.img`
    width: 6rem;
    margin-right: 1rem;
  `,
  NameSloganWrapper: styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  `,

  Subtitle: styled.div`
    ${({ theme }) => theme.font.FONT}
  `,

  InfoWrapper: styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    ${({ theme }) => theme.font.FONT16};
    ${media.desktop`
        flex-direction: row;
        justify-content: start;
    `};
  `,

  MainWrapper: styled.div`
    display: flex;
    align-items: center;
  `,

  InfoContainer: styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    ${media.desktop`
        flex-direction: column;
    `}
  `,

  TelFaxWrapper: styled.div`
    display: flex;
    gap: 1.5rem;
    ${({ theme }) => theme.font.FONT16};
    //if contents company name is main then make flex direction column
    ${({ companyName }) =>
      companyName === 'Waste Treatment & Collection of Waste' &&
      `flex-direction: column;
      gap: 0.5rem;`}
  `,

  CompanyName: styled.div`
    justify-content: center;
    ${({ theme }) => theme.font.FONT16};
    margin-bottom: 10px;
  `,
};
