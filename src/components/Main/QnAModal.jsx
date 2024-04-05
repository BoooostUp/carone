import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const QnAModal = ({ onClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    /*
    ref.current는 외부 클릭을 감지하고자 하는 대상
    ref.current가 e.target을 포함하는지 판단하여 모달을 닫을지 말지를 결정함
    */
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Background>
      <S.Container ref={ref}>
        <S.Title>Q&A - E-mail 문의</S.Title>
        <S.FormBox>
          <S.Label htmlFor="customId">이름</S.Label>
          <S.Input type="text" id="customId" />
        </S.FormBox>
        <S.FormBox>
          <S.Label htmlFor="eMail">Email</S.Label>
          <S.Input type="email" id="eMail" />
        </S.FormBox>
        <S.FormBox>
          <S.Label htmlFor="customTel">전화번호</S.Label>
          <S.Input type="tel" id="customTel" />
        </S.FormBox>
        <S.FormBox>
          <S.Label htmlFor="message">메시지</S.Label>
          <S.TextArea type="text" id="message" />
        </S.FormBox>
        <S.Button type="submit">등록</S.Button>
      </S.Container>
    </S.Background>
  );
};
export default QnAModal;

const S = {
  Background: styled.div`
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  `,
  Container: styled.div`
    width: 55rem;
    height: 55rem;
    padding: 4rem 3rem;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 2rem;
    border-radius: 1.5rem;
    border: 1px solid ${({ theme }) => theme.color.mainGray};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.color.balck};
    ${({ theme }) => theme.font.FONT20B};
  `,
  FormBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 2rem;
  `,
  Label: styled.label`
    min-width: 7rem;
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT20}
  `,
  Input: styled.input`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT14};
  `,
  TextArea: styled.textarea`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT14};
  `,
  Button: styled.button`
    display: flex;
    width: 10rem;
    padding: 1rem 2rem;
    justify-content: center;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.HOME};
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT14B}
  `,
};
