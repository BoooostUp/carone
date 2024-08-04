import styled, { css } from 'styled-components';

const HomeRecruitApply = () => {
  return (
    <S.Container>
      <S.Title>입사 신청</S.Title>
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
      <div>예&#41; 대한민국 82 010-1234-5678</div>
      <S.FormBox>
        <S.Label htmlFor="file">이력서 첨부</S.Label>
        <S.Input type="file" id="file" name="file" $fileUpload="true" />
      </S.FormBox>
      <S.FormBox>
        <S.Label htmlFor="subject">지원 회사</S.Label>
        <S.Select id="subject" name="subject">
          <S.Option value="CE">(주)자동차환경</S.Option>
          <S.Option value="CARONE">(주)카원</S.Option>
          <S.Option value="SG">(주)에스지산업</S.Option>
          <S.Option value="TOTAL">(주)토탈</S.Option>
          <S.Option value="SI">(주)세명인텍</S.Option>
        </S.Select>
      </S.FormBox>
      <S.FormBox>
        <S.Label htmlFor="message">메시지</S.Label>
        <S.TextArea type="text" id="message" />
      </S.FormBox>
      <S.Button type="submit">등록</S.Button>
    </S.Container>
  );
};

export default HomeRecruitApply;

const S = {
  Container: styled.div`
    width: 100%;
    padding-bottom: 3rem;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 2rem;
    border-radius: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    ${({ theme }) => theme.font.FONT20B};
  `,

  HorizontalLine: styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    margin: 0.2rem 0 1rem;
  `,

  FormBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 2rem;
  `,

  Label: styled.label`
    min-width: 8rem;
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT14B}
  `,

  Input: styled.input`
    width: 100%;
    padding: 1.4rem;
    border-radius: 0.4rem;
    border: 0.8px solid ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT14};

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
    padding: 1rem 1.4rem;
    border-radius: 0.4rem;
    border: 0.8px solid ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT12};

    &:focus {
      outline: none;
      border: 1.2px solid ${({ theme }) => theme.color.TOTAL};
    }
  `,

  Option: styled.option`
    ${({ theme }) => theme.font.FONT12};
  `,

  TextArea: styled.textarea`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.4rem;
    border: 0.8px solid ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT14};

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
    ${({ theme }) => theme.font.FONT14B}
  `,
};
