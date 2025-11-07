// src/components/common/Footer.jsx
import styled from 'styled-components';
import Logo from '../../assets/icons/Logo.svg';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';
import { media } from '../../styles/utils/mediaQuery.ts';

const Footer = ({ company = 'HOME' }) => {
  const data = FOOTER_CONTENTS[company];

  // "회사명 : 주소" 형태일 수 있어서 콜론 뒤만 주소로 사용
  const cleanAddress = (addr) => (addr ? addr.split(':').pop().trim() : '');
  const toTelHref = (tel) => {
    if (!tel) return '#';
    const numbers = tel.replace(/[^\d+]/g, '');
    return numbers ? `tel:${numbers}` : '#';
  };
  const toMapHref = (addr) =>
    addr
      ? `https://maps.google.com/?q=${encodeURIComponent(cleanAddress(addr))}`
      : '#';

  return (
    <S.Container aria-label="사이트 푸터">
      <S.Top>
        <S.Brand>
          <S.Logo src={Logo} alt="Company Logo" loading="lazy" />
          <div>
            {data.companyName && (
              <S.CompanyName>{data.companyName}</S.CompanyName>
            )}
            {company !== 'HOME' && data.subtitle && (
              <S.Subtitle>{data.subtitle}</S.Subtitle>
            )}
          </div>
        </S.Brand>

        {/* 빠른 링크(홈/인사말/사업/오시는 길/채용) : HOME 또는 회사 공통 키가 있을 때만 노출 */}
        <S.QuickLinks role="navigation" aria-label="바로가기">
          {['home', 'ceo', 'business', 'location', 'process']
            .filter((k) => data?.[k])
            .map((k) => (
              <li key={k}>
                <a href={`/${k === 'home' ? '' : k}`} aria-label={data[k]}>
                  {data[k]}
                </a>
              </li>
            ))}
        </S.QuickLinks>

        {/* 연락처/주소 */}
        <S.Contacts>
          {data.info?.map((info, idx) => {
            const addr = info.address || '';
            const tel = info.tel || '';
            const fax = info.fax || '';

            return (
              <S.Block as="address" key={`${info.companyName || idx}-${idx}`}>
                {info.companyName && (
                  <S.BlockTitle>{info.companyName}</S.BlockTitle>
                )}

                {addr && (
                  <S.Row>
                    <S.Label>주소</S.Label>
                    <S.Value>
                      <a
                        href={toMapHref(addr)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cleanAddress(addr)}
                      </a>
                    </S.Value>
                  </S.Row>
                )}

                {tel && (
                  <S.Row>
                    <S.Label>전화</S.Label>
                    <S.Value>
                      <a href={toTelHref(tel)}>{tel.replace(/^TEL\s*/i, '')}</a>
                    </S.Value>
                  </S.Row>
                )}

                {fax && (
                  <S.Row>
                    <S.Label>팩스</S.Label>
                    <S.Value>{fax.replace(/^FAX\s*/i, '')}</S.Value>
                  </S.Row>
                )}
              </S.Block>
            );
          })}
        </S.Contacts>
      </S.Top>

      <S.Bottom>
        <S.Copyright>© Since 2002</S.Copyright>

        {/* 필요 시 사업자정보/메일/개인정보 처리방침 링크 추가 */}
        <S.Legal>
          <li>
            <a href="/">개인정보처리방침</a>
          </li>
          <li>
            <a href="/">이용약관</a>
          </li>
        </S.Legal>

        <S.BackToTop
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="맨 위로"
        >
          ↑ 맨 위로
        </S.BackToTop>
      </S.Bottom>
    </S.Container>
  );
};

export default Footer;

/* ===================== Styles ===================== */

const S = {
  Container: styled.footer`
    --bg: ${({ theme }) => theme.color.black};
    --fg: #f2f2f2;
    --muted: #b7b7b7;
    --line: rgba(255, 255, 255, 0.16);

    background: var(--bg);
    color: var(--fg);
    padding: 3rem 1.6rem 2rem;
    ${media.desktop`
      padding: 4rem 6rem 2.4rem;
    `}
  `,

  Top: styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    border-bottom: 1px solid var(--line);
    padding-bottom: 2rem;

    ${media.desktop`
      grid-template-columns: 1.2fr .8fr 1fr; /* Brand | QuickLinks | Contacts */
      align-items: start;
      gap: 3rem;
    `}
  `,

  Brand: styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
  `,

  Logo: styled.img`
    width: 7.5rem;
    height: auto;
    opacity: 0.95;
    filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.4));
    ${media.desktop`width: 8.5rem;`}
  `,

  CompanyName: styled.h2`
    ${({ theme }) => theme.font.FONT18};
    margin: 0;
    letter-spacing: 0.02em;
  `,

  Subtitle: styled.p`
    ${({ theme }) => theme.font.FONT14};
    margin: 0.3rem 0 0;
    color: var(--muted);
    line-height: 1.5;
  `,

  QuickLinks: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.75rem;

    li a {
      ${({ theme }) => theme.font.FONT16};
      text-decoration: none;
      color: var(--fg);
      opacity: 0.9;
      border-bottom: 1px dashed transparent;
      transition:
        opacity 0.2s ease,
        border-color 0.2s ease;
    }
    li a:hover,
    li a:focus {
      opacity: 1;
      border-color: var(--fg);
      outline: none;
    }

    ${media.desktop`
      justify-self: center;
    `}
  `,

  Contacts: styled.div`
    display: grid;
    gap: 1rem;

    /* HOME 은 여러 회사가 있으니 2열, 그 외는 1열 */
    grid-template-columns: 1fr;
    ${media.desktop`
      grid-template-columns: repeat(2, minmax(0, 1fr));
    `}
  `,

  Block: styled.div`
    font-style: normal; /* address 기본 기울임 제거 */
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 1rem 1.2rem;
  `,

  BlockTitle: styled.h3`
    ${({ theme }) => theme.font.FONT16};
    margin: 0 0 0.6rem;
    color: var(--fg);
  `,

  Row: styled.div`
    display: grid;
    grid-template-columns: 3.4rem 1fr;
    gap: 0.75rem;
    align-items: start;
    & + & {
      margin-top: 0.35rem;
    }
  `,

  Label: styled.span`
    ${({ theme }) => theme.font.FONT14};
    color: var(--muted);
    letter-spacing: 0.02em;
  `,

  Value: styled.span`
    ${({ theme }) => theme.font.FONT15};
    line-height: 1.5;
    a {
      color: var(--fg);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition:
        border-color 0.2s ease,
        opacity 0.2s ease;
    }
    a:hover {
      border-color: var(--fg);
    }
  `,

  Bottom: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-top: 1.2rem;

    ${media.desktop`
      grid-template-columns: 1fr auto auto;
      align-items: center;
      gap: 1.2rem;
    `}
  `,

  Copyright: styled.div`
    ${({ theme }) => theme.font.FONT14};
    color: var(--muted);
  `,

  Legal: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    li a {
      ${({ theme }) => theme.font.FONT14};
      color: var(--muted);
      text-decoration: none;
      border-bottom: 1px dotted transparent;
      transition:
        color 0.2s,
        border-color 0.2s;
    }
    li a:hover {
      color: var(--fg);
      border-color: var(--fg);
    }
  `,

  BackToTop: styled.button`
    justify-self: start;
    ${media.desktop`justify-self: end;`}

    ${({ theme }) => theme.font.FONT14};
    color: var(--fg);
    background: transparent;
    border: 1px solid var(--line);
    padding: 0.5rem 0.8rem;
    border-radius: 999px;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.05s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    &:active {
      transform: translateY(1px);
    }
  `,
};
