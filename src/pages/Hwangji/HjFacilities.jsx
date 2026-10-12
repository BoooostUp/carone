import styled from 'styled-components';

// 황지 보유 설비 자료가 준비되면 이미지/내용으로 교체
function HjFacilities() {
  return (
    <S.Container>
      <S.Empty>
        <span aria-hidden="true">🏗️</span>
        <p>보유 설비 정보를 준비 중입니다.</p>
      </S.Empty>
    </S.Container>
  );
}

export default HjFacilities;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 70rem;
    min-height: 40rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    @media (max-width: 767px) {
      display: block;
      width: 100%;
      padding: 5rem 1.25rem;
      min-height: 30rem;
    }
  `,
  Empty: styled.div`
    display: grid;
    justify-items: center;
    gap: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.color.deepGray};

    span {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 600;
    }
  `,
};
