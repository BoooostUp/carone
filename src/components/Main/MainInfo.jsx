import styled from 'styled-components';
import { media } from '../../styles/utils/mediaQuery';
import mainInfoImage2 from './../../assets/images/home/main_info2.png';
import mainInfoBg from './../../assets/images/home/main_info.png';
import { Link as RouterLink } from 'react-router-dom';

const MainInfo = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.LeftSection>
          <S.TextContainer>
            <S.Title>99.9%</S.Title>
            <S.SubText>
              폐기물의 99.9%를 자원으로 순환시키는 혁신적인 기술로 환경을 위해
              노력을 기울이고 있습니다.
            </S.SubText>
            <S.Link to="/business">더 보기 →</S.Link>
          </S.TextContainer>
          <S.Image src={mainInfoImage2} alt="자원 순환 기술 이미지" />
        </S.LeftSection>
        <S.RightSection />
      </S.Container>
    </S.Layout>
  );
};

export default MainInfo;

const S = {
  Layout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    min-height: calc(100dvh - 8rem); /* 주소창 대응 */
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(0, 70, 134, 0.05) 40%
    );

    ${media.tablet`
      padding: 80px 40px;
    `}
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 1100px;
    align-items: center;

    ${media.tablet`
      flex-direction: row;
      gap: 80px;
      justify-content: space-between;
    `}
  `,

  LeftSection: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    width: 100%;

    ${media.tablet`
      width: 50%;
    `}
  `,

  RightSection: styled.div`
    width: 100%;
    min-height: 300px;
    flex: 0 0 auto;
    min-height: 300px;
    border-radius: 1rem;
    background-image: url(${mainInfoBg});
    background-size: cover;
    background-position: center;
    ${media.desktop`
      width: 50%;
    `}
  `,

  Image: styled.img`
    width: 100%;
    border-radius: 0.8rem;
    object-fit: cover;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  Title: styled.h1`
    font-size: clamp(2.8rem, 5vw, 4.2rem);
    font-weight: 800;
    color: ${({ theme }) => theme.color.TOTAL};
  `,

  SubText: styled.p`
    font-size: clamp(1.6rem, 2.5vw, 2rem);
    line-height: 1.6;
    color: ${({ theme }) => theme.color.mainGray};
  `,

  Link: styled(RouterLink)`
    margin-top: 20px;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    color: ${({ theme }) => theme.color.black};

    &:hover {
      color: ${({ theme }) => theme.color.TOTAL};
    }
  `,
};
