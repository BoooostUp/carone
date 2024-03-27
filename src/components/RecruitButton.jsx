import styled from 'styled-components';

const RecruitButton = () => {
  return (
    <S.Container>
      <S.ButtonText>인재 채용</S.ButtonText>
    </S.Container>
  );
};

export default RecruitButton;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11rem;
    height: 5rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.color.black};
    cursor: pointer;
  `,

  ButtonText: styled.h3`
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT18B};
  `,
};
