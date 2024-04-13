import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import closeIcon from '../../assets/icons/close.png';
import { media } from '../../styles/utils/mediaQuery';

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

  const handleClickButton = () => {
    alert('등록되었습니다.');
    onClick();
  };

  return (
    <S.Background>
      <S.Container ref={ref}>
        <S.Image src={closeIcon} onClick={onClick} />
        <S.Title>Q&A - E-mail 문의</S.Title>
        <S.HorizontalLine />
        <S.FormBox>
          <S.Label htmlFor="customName">이름</S.Label>
          <S.Input type="text" id="customName" name="name" />
        </S.FormBox>
        <S.FormBox>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input type="email" id="email" name="email" />
        </S.FormBox>
        <S.FormBox>
          <S.Label htmlFor="customTel">전화번호</S.Label>
          <S.Input type="text" name="phone1" maxLength="4" placeholder="82" />
          <S.Input type="text" name="phone2" maxLength="15" />
        </S.FormBox>
        <div>예) 대한민국 82 010-1234-5678</div>
        <S.FormBox>
          <S.Label htmlFor="file">파일 첨부</S.Label>
          <S.Input type="file" id="file" name="file" $fileUpload="true" />
        </S.FormBox>
        <S.FormBox>
          <S.Label htmlFor="subject">관련 문의회사</S.Label>
          <S.Select id="subject" name="subject">
            <option value="CE">(주)자동차환경</option>
            <option value="CARONE">(주)카원</option>
            <option value="SG">(주)에스지산업</option>
            <option value="TOTAL">(주)토탈</option>
            <option value="SI">(주)세명인텍</option>
          </S.Select>
        </S.FormBox>
        <S.FormBox>
          <S.Label htmlFor="message">메시지</S.Label>
          <S.TextArea type="text" id="message" />
        </S.FormBox>
        <S.Button type="submit" onClick={handleClickButton}>
          등록
        </S.Button>
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
    z-index: 2;
  `,
  Container: styled.div`
    max-width: 30rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${media.tablet`
      max-width: 50rem;
      padding: 4rem 3rem;
      gap: 2rem;
    `}
  `,
  Image: styled.img`
    width: 3rem;
    position: absolute;
    top: -13px;
    right: -15px;
    cursor: pointer;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT16SB};

    ${media.tablet`
      ${({ theme }) => theme.font.FONT20B};
    `}
  `,
  HorizontalLine: styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    margin: 0.1rem 0 0.5rem;
  `,
  FormBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
  `,
  Label: styled.label`
    min-width: 8rem;
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT12SB};

    ${media.tablet`
      ${({ theme }) => theme.font.FONT14B};
    `}
  `,
  Input: styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 0.4rem;
    border: 0.8px solid ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT12};

    ${media.tablet`
      ${({ theme }) => theme.font.FONT14};
    `}

    &:focus {
      border: 1.2px solid ${({ theme }) => theme.color.TOTAL};
      ${({ $fileUpload }) =>
        $fileUpload === 'true' &&
        css`
          border: 0.8px solid ${({ theme }) => theme.color.black};
        `}
    }
  `,
  Select: styled.select`
    padding: 1rem 1.2rem;
    border-radius: 0.4rem;
    border: 0.8px solid ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT12};

    &:focus {
      outline: none;
      border: 1.2px solid ${({ theme }) => theme.color.TOTAL};
    }
  `,
  TextArea: styled.textarea`
    width: 100%;
    padding: 1.3rem;
    border-radius: 0.4rem;
    border: 0.8px solid ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT12};

    ${media.tablet`
      ${({ theme }) => theme.font.FONT14};
    `}

    &:focus {
      outline: none;
      border: 1.2px solid ${({ theme }) => theme.color.TOTAL};
    }
  `,
  Button: styled.button`
    display: flex;
    width: 10rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    justify-content: center;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.HOME};
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT12SB};

    ${media.tablet`
      ${({ theme }) => theme.font.FONT14B};
    `}
  `,
};
