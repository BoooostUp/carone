import styled from 'styled-components';

const OPTIONS = [
  { value: 'HOME', label: 'HOME' },
  { value: 'CE', label: '(주)자동차환경' },
  { value: 'CARONE', label: '(유)카원' },
  { value: 'ES', label: '(주)에너지스토리' }, // ✅ ES를 가운데로
  { value: 'TOTAL', label: '(주)토탈' },
  { value: 'HJ', label: '(주)황지' },
  { value: 'SG', label: '(주)에스지산업' }, // ✅ SG는 맨 끝
];

const DropDown = ({ handleClick, buttonStatus }) => {
  const selected =
    Object.keys(buttonStatus).find((k) => buttonStatus[k]) || 'HOME';

  return (
    <S.Wrap>
      <S.Label htmlFor="company-select">회사 선택</S.Label>
      <S.Select
        id="company-select"
        aria-label="회사 선택"
        value={selected}
        onChange={(e) => handleClick(e.target.value)}
      >
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </S.Select>
    </S.Wrap>
  );
};

export default DropDown;

/* ================= styles ================= */
const S = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Label: styled.label`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.color.TOTAL};
    margin-bottom: 10px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 3px;
      background-color: ${({ theme }) => theme.color.TOTAL};
      border-radius: 2px;
      opacity: 0.7;
    }

    transition: all 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.color.black};
      transform: scale(1.02);
    }
  `,

  Select: styled.select`
    display: block;
    margin: 0 auto;
    /* 기본 */
    width: 95%;
    padding: 14px 44px 14px 16px; /* 오른쪽 여백(아이콘 자리) */
    font-size: 16px; /* iOS 확대 방지 */
    font-weight: 600;
    color: ${({ theme }) => theme.color.black};
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
    line-height: 1.3;
    text-align: center; /* 옵션 텍스트도 중앙 정렬 */

    /* 네이티브 화살표 제거 + 커스텀 아이콘 */
    appearance: none; /* 표준 */
    -webkit-appearance: none; /* Safari */
    -moz-appearance: none; /* Firefox */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="%23202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>');
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 22px;

    /* 인터랙션 */
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
    &:hover {
      border-color: rgba(0, 0, 0, 0.18);
      background-color: #fcfcfc;
    }
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.color.TOTAL};
      box-shadow:
        0 0 0 3px rgba(33, 122, 84, 0.12),
        0 8px 18px rgba(0, 0, 0, 0.08);
    }

    /* 비활성화 옵션 스타일 대비 (브라우저별 한계 있음) */
    option:disabled {
      color: #9aa0a6;
    }
  `,
};
