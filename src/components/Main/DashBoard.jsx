import styled from 'styled-components';
import capability from '../../assets/images/dashboard/capability.png';
import contract from '../../assets/images/dashboard/contract.png';
import factory from '../../assets/images/dashboard/factory.png';
import recycle from '../../assets/images/dashboard/recycle.png';
import { media } from '../../styles/utils/mediaQuery';

const DashBoard = () => {
  return (
    <S.MainWrapper>
      <S.MainTitle>깨끗한 지구를 위한 우리의 도전</S.MainTitle>
      <S.SubWrapper>
        <S.SubTitle>
          우리 기업은 폐기물을 최대한 재활용하여 자원의 절약 및 녹색환경 정책에
          부응하여 ‘폐기물의 자원순환, 폐기물 재활용 <S.Span>99.9%</S.Span>에
          도전한다’라는 슬로건 아래 더 밝은 미래와 더 나은 삶,깨끗한 환경을 위해
          최선을 다하며 환경을 최고로 생각하는 신뢰받는 기업, 존경받는 기업으로
          거듭나겠습니다.
        </S.SubTitle>
      </S.SubWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Image src={recycle} alt="Dashboard" />
          <S.Title>99% 재활용</S.Title>
          <S.Description>
            자원 순환율을 목표로 하며, 폐기물의 최대 재활용을 지향합니다.
          </S.Description>
        </S.Container>
        <S.Container>
          <S.Image src={contract} alt="Deal" />
          <S.Title>주요 거래처</S.Title>
          <S.Description>2,000개의 주요 기업과 협력 중입니다.</S.Description>
        </S.Container>
        <S.Container>
          <S.Image src={capability} alt="Facility" />
          <S.Title>폐기물 처리 능력</S.Title>
          <S.Description>
            연간 60만 톤 이상의 폐기물을 처리합니다.
          </S.Description>
        </S.Container>
        <S.Container>
          <S.Image src={factory} alt="Recycle" />
          <S.Title>지점 및 설비</S.Title>
          <S.Description>
            10개의 주요 지점에서 폐기물 수집 및 재활용 작업을 수행합니다.
          </S.Description>
        </S.Container>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default DashBoard;

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
    background-color: ${({ theme }) => theme.color.white};
  `,

  SubWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 40px;
    width: 500px;
    background-color: ${({ theme }) => theme.color.white};
    ${media.desktop`
      width: 1000px;
    `}
  `,

  MainTitle: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: #2a472f;
    ${media.desktop`
      font-size: 50px;
      margin-top: 40px;
    `}
  `,
  SubTitle: styled.div`
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.secondary};
    line-height: 30px;
    ${media.desktop`
      font-size: 30px;
      line-height: 50px;
    `}
  `,

  Span: styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #2a472f;
    ${media.desktop`
      font-size: 40px;
    `}
  `,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 40px;
    justify-content: center;
    border-radius: 15px;
    ${media.desktop`
     grid-template-columns: repeat(4, 1fr);
    `}
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 180px;
    height: 270px;
    text-align: center;
    ${media.desktop`
      width: 200px;
      height: 270px;
    `}
    gap: 15px;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* More prominent shadow */
    transition:
      transform 0.4s,
      box-shadow 0.4s;

    &:hover {
      transform: scale(1.05); /* Scale on hover */
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3); /* Larger shadow on hover */
      background-color: #f0f0f0; /* Slight background color change */
    }
  `,

  Image: styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
  `,

  Title: styled.div`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
    transition: color 0.3s;

    &:hover {
      color: #004d40; /* Color change on hover */
    }
  `,

  Description: styled.div`
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
  `,
};
