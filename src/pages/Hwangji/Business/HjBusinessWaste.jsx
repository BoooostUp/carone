// src/pages/Hj/Business/HjBusinessWaste.jsx
import React from 'react';
import styled from 'styled-components';

function HjBusinessWaste() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">🧾 영업대상 폐기물</span>
        <h2>㈜황지 영업대상 폐기물</h2>
        <p>
          황지는 울산시청 허가 하에 <b>사업장 일반폐기물 중 매립대상 폐기물</b>
          을 안정적으로 처리합니다. (오니류, 소각재, 폐토사 등)
        </p>
      </S.Header>

      <S.Cards>
        <S.Card>
          <div className="icon">🧱</div>
          <h3>오니류</h3>
          <p>탈수케이크, 슬러지 등 수분을 포함한 폐기물</p>
        </S.Card>

        <S.Card>
          <div className="icon">🔥</div>
          <h3>소각재</h3>
          <p>소각 후 발생하는 비가연성 잔재물</p>
        </S.Card>

        <S.Card>
          <div className="icon">🏗️</div>
          <h3>폐토사</h3>
          <p>건설·산업 현장에서 발생하는 흙·토사류</p>
        </S.Card>
      </S.Cards>

      <S.Foot>
        ※ 현재 <b>행정절차 진행 중</b>이며, 허가 완료 시 울산권역 내 안정적
        매립지로 운영될 예정입니다.
      </S.Foot>
    </S.Section>
  );
}

export default HjBusinessWaste;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 2rem 8rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 4.5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.HJ || '#0033cc'};
      color: #fff;
      padding: 0.85rem 2.1rem;
      border-radius: 999px;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 0 5px 14px
        ${({ theme }) => (theme.color.HJ || '#0033cc') + '55'};
    }

    h2 {
      font-size: clamp(3rem, 4vw, 3.4rem);
      font-weight: 800;
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.1rem;
      line-height: 1.8;
      max-width: 780px;
      margin-inline: auto;

      b {
        color: ${({ theme }) => theme.color.HJ || '#0033cc'};
      }
    }
  `,
  Cards: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.4rem;
  `,
  Card: styled.div`
    background: #fff;
    border: 2px solid ${({ theme }) => (theme.color.HJ || '#0033cc') + '22'};
    border-radius: 1.8rem;
    padding: 3rem 2rem 2.6rem;
    text-align: center;
    box-shadow: 0 8px 26px rgba(0, 0, 0, 0.04);
    /* 황지는 안정감 컨셉이라 transform 안 넣음 */
    transition: box-shadow 0.25s ease;

    .icon {
      font-size: 3.5rem;
      margin-bottom: 1.2rem;
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.6rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.7;
    }

    &:hover {
      /* 살짝만 강조 */
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    }
  `,
  Foot: styled.p`
    margin-top: 4.2rem;
    text-align: center;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.deepGray};

    b {
      color: ${({ theme }) => theme.color.HJ || '#0033cc'};
    }
  `,
};
