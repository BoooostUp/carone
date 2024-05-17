import styled from 'styled-components';

const BusinessPartner = ({ imageAddress }) => {
  return (
    <S.Box>
      <S.Img src={imageAddress} />
    </S.Box>
  );
};

export default BusinessPartner;

const S = {
  Box: styled.div`
    display: flex;
    align-items: center;
    width: 24rem;
    height: 14rem;
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 3rem;
    padding: 2rem 1rem;
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `,
};
