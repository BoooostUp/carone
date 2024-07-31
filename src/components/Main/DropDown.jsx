import styled from 'styled-components';

const DropDown = ({ handleClick, buttonStatus }) => {
  return (
    <S.DropDownWrapper>
      <S.Select
        onChange={(e) => handleClick(e.target.value)}
        value={Object.keys(buttonStatus).find((key) => buttonStatus[key])}
      >
        <option value="HOME">HOME</option>
        <option value="CE">(주)자동차환경</option>
        <option value="CARONE">(유)카원</option>
        <option value="SG">(주)에스지산업</option>
        <option value="TOTAL">(주)토탈</option>
        <option value="SI">(주)세명인텍</option>
      </S.Select>
    </S.DropDownWrapper>
  );
};

export default DropDown;

const S = {
  DropDownWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Select: styled.select`
    padding: 1rem;
    margin-bottom: 1rem;
    ${({ theme }) => theme.font.FONT16};
    width: 100%;
  `,
};
