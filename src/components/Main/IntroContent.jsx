import styled from 'styled-components';
import DashBoard from './DashBoard';
import { INTRO_CONTENT_CONTENTS as C } from '../../constants/INTRO_CONTENT_CONTENTS';
import { media } from '../../styles/utils/mediaQuery';

const IntroContent = () => {
  return (
    <>
      <DashBoard />
      {C.CONTENTS.map((item, index) => {
        return (
          <S.Container key={index}>
            <S.Img src={item.imageAddress} />
            <S.TextBox>
              <S.TitleBox>
                <S.Title>{item.title}</S.Title>
              </S.TitleBox>
              {item.element1 && <S.Content>{item.element1}</S.Content>}
              {item.element2 && <S.Content>{item.element2}</S.Content>}
              {item.element3 && <S.Content>{item.element3}</S.Content>}
              {item.element4 && <S.Content>{item.element4}</S.Content>}
            </S.TextBox>
          </S.Container>
        );
      })}
    </>
  );
};

export default IntroContent;

const S = {
  Container: styled.article`
    display: flex;
    margin: 4rem auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    ${media.desktop`
      flex-direction: row;
      margin: 8rem auto;
      gap: 8rem;
    `}
  `,
  Img: styled.img`
    border-radius: 2rem;
    width: 30rem;
    height: 18rem;
    object-fit: cover;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    ${media.desktop`
      width: 50rem;
      height: 24rem;
    `}
  `,
  TextBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 23rem;

    ${media.desktop`
      width: 30rem;
    `}
  `,
  TitleBox: styled.div`
    border-radius: 5rem 0rem;
    background: #2a472f;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    ${({ theme }) => theme.font.FONT18SB};

    ${media.desktop`
    ${({ theme }) => theme.font.FONT20};
    `}
  `,
  Content: styled.li`
    list-style: inside;
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT14};
    padding-left: 1rem;

    ${media.desktop`
    ${({ theme }) => theme.font.FONT16};
    `}
  `,
};
