import styled from 'styled-components';
import Logo from '../../assets/icons/Logo.svg';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';
import { media } from '../../styles/utils/mediaQuery.ts';

const Footer = ({ company }) => {
  return (
    <S.Container>
      <S.ContentWrapper>
        {/* Company Information Section */}
        <S.CompanyInfo>
          <S.LogoImage src={Logo} alt="Company Logo" />
          <div>
            <S.CompanyName>
              {FOOTER_CONTENTS[company].companyName}
            </S.CompanyName>
            {company !== 'HOME' && (
              <S.Subtitle>{FOOTER_CONTENTS[company].subtitle}</S.Subtitle>
            )}
          </div>
        </S.CompanyInfo>

        {/* Contact Information Section */}
        <S.ContactInfo>
          {FOOTER_CONTENTS[company].info.map((info) => (
            <S.InfoBlock key={info.companyName}>
              <S.Address>{info.address}</S.Address>
              <S.ContactDetails>
                <S.Tel>{info.tel}</S.Tel>
                {info.fax && <S.Fax>Fax: {info.fax}</S.Fax>}
              </S.ContactDetails>
            </S.InfoBlock>
          ))}
        </S.ContactInfo>
      </S.ContentWrapper>

      {/* Footer Bottom Section */}
      <S.BottomWrapper>
        <S.SinceText>© Since 2002</S.SinceText>
      </S.BottomWrapper>
    </S.Container>
  );
};

export default Footer;

const S = {
  Container: styled.footer`
    background-color: ${({ theme }) => theme.color.black};
    color: #f0f0f0;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    ${media.desktop`
      padding: 4rem 6rem;
    `}
  `,

  ContentWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  `,

  CompanyInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 30rem;
    ${media.desktop`
      flex: 1;
    `}
  `,

  LogoImage: styled.img`
    width: 8rem;
  `,

  CompanyName: styled.h2`
    ${({ theme }) => theme.font.FONT16};
    margin: 0;
  `,

  Subtitle: styled.div`
    ${({ theme }) => theme.font.FONT14};
  `,

  ContactInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${media.desktop`
      flex: 2;
    `}
  `,

  InfoBlock: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    ${({ theme }) => theme.font.FONT16};
  `,

  Address: styled.div`
    ${({ theme }) => theme.font.FONT16};
    width: 100%;
  `,

  ContactDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    ${({ theme }) => theme.font.FONT16};

    ${media.desktop`
      flex-direction: row;
      gap: 1.5rem;
    `}
  `,

  Tel: styled.div`
    ${({ theme }) => theme.font.FONT16};
  `,

  Fax: styled.div`
    ${({ theme }) => theme.font.FONT16};
  `,

  BottomWrapper: styled.div`
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.color.white};
    padding-top: 1rem;
  `,

  SinceText: styled.div`
    ${({ theme }) => theme.font.FONT14};
  `,
};
