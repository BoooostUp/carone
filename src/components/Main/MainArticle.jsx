import styled from 'styled-components';
import { media } from '../../styles/utils/mediaQuery';

const MainArticle = ({ currentCompany, item }) => {
  const {
    id,
    title1,
    title2 = '',
    content1,
    content2 = '',
    imageAddress,
  } = item;

  return (
    <S.Container $company={currentCompany}>
      <S.Img src={imageAddress} />
      <S.ContentBox>
        <S.Title $companyTitle={id} $currentCompany={currentCompany}>
          {title1}
        </S.Title>
        <S.Content>{content1}</S.Content>
        {title2 && (
          <>
            <S.Title $companyTitle={id} $currentCompany={currentCompany}>
              {title2}
            </S.Title>
            <S.Content>{content2}</S.Content>
          </>
        )}
      </S.ContentBox>
    </S.Container>
  );
};
export default MainArticle;

const S = {
  Container: styled.article`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding: 4rem 2rem;
    position: relative;

    &:nth-of-type(even) {
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.1;
        background-color: ${({ $company, theme }) => theme.color[$company]};
      }
    }

    ${media.desktop`
    display: grid;
    padding: 8rem 2rem;
    gap: 6rem;

    &:nth-of-type(even) {
      background-color: #9FA6B21A;
      grid-template-areas:
      "Img ContentBox";
    }

    &:nth-of-type(odd) {
      grid-template-areas:
        "ContentBox Img";
    }
    `}
  `,
  ContentBox: styled.div`
    max-width: 44rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    position: relative;
    z-index: 1;
    grid-area: ContentBox;

    ${media.desktop`
    width: 36rem;
    `}
  `,
  Title: styled.h1`
    color: ${({ theme, $companyTitle, $currentCompany }) =>
      $currentCompany === 'HOME'
        ? theme.color[$companyTitle]
        : theme.color.mainGray};
    ${({ theme }) => theme.font.FONT20B};

    ${media.desktop`
    ${({ theme }) => theme.font.FONT24B};
    `}
  `,
  Content: styled.pre`
    white-space: pre-line;
    color: ${({ theme }) => theme.color.deepGray};
    ${({ theme }) => theme.font.FONT14};
  `,
  Img: styled.img`
    border-radius: 3rem;
    width: 30rem;
    height: 20rem;
    object-fit: cover; /*이미지 비율 유지*/
    object-position: bottom; /* 이미지를 아래쪽으로 정렬 */
    position: relative;
    z-index: 1;
    grid-area: Img;

    ${media.desktop`
      width: 40rem;
      height: 28rem;
    `}
  `,
};
