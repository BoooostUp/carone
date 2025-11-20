import React from 'react';
import styled from 'styled-components';

function EsBusinessProcess() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">폐기물 처리 Flow</span>
        <h2>㈜에너지스토리 폐기물 재활용 공정</h2>
        <p>
          에너지스토리는 수집된 폐유·폐페인트류를 <b>파쇄 → 분쇄 → 정제</b>{' '}
          과정을 거쳐
          <b>유기용제 및 재생연료</b>로 재활용하는 친환경 순환 시스템을
          운영합니다.
        </p>
      </S.Header>

      <S.Timeline>
        <S.Item>
          <S.Badge>01</S.Badge>
          <S.Body>
            <h3>폐기물 반입</h3>
            <p>
              허가된 차량으로 액상폐기물을 반입하여 성상과 품목을 확인합니다.
            </p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>02</S.Badge>
          <S.Body>
            <h3>파쇄</h3>
            <p>대형 또는 혼합 폐기물을 1차 파쇄하여 균일한 크기로 만듭니다.</p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>03</S.Badge>
          <S.Body>
            <h3>분쇄</h3>
            <p>파쇄된 폐기물을 2차 분쇄하여 재활용이 가능한 상태로 만듭니다.</p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>04</S.Badge>
          <S.Body>
            <h3>정제</h3>
            <p>
              불순물을 제거하고 유분을 분리하여 고순도의 유기용제를 생산합니다.
            </p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>05</S.Badge>
          <S.Body>
            <h3>재활용 / 생산</h3>
            <p>정제된 폐유를 유기용제 및 재생연료유로 재활용합니다.</p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>06</S.Badge>
          <S.Body>
            <h3>출고</h3>
            <p>
              생산된 유기용제 및 연료를 협력업체 및 재활용 기업에 공급합니다.
            </p>
          </S.Body>
        </S.Item>
      </S.Timeline>

      <S.Foot>
        ※ 본 공정은 낙동강유역환경청 및 울산 남구청 허가 하에 운영되며, 모든
        과정에서 환경오염 방지를 위한 철저한 관리가 이루어집니다.
      </S.Foot>
    </S.Section>
  );
}

export default EsBusinessProcess;

const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 2rem 8rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 5rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.ES || '#2e8540'};
      color: #fff;
      padding: 0.8rem 2rem;
      border-radius: 999px;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 0 5px 15px
        ${({ theme }) => (theme.color.ES || '#2e8540') + '55'};
    }

    h2 {
      font-size: clamp(2.8rem, 4vw, 3.3rem);
      font-weight: 800;
      margin-top: 1.3rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.35rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.2rem;
      line-height: 1.9;
      max-width: 820px;
      margin-inline: auto;
    }

    b {
      color: ${({ theme }) => theme.color.ES || '#2e8540'};
      font-weight: 700;
    }
  `,
  Timeline: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  `,
  Item: styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1.6rem;
  `,
  Badge: styled.div`
    min-width: 3.4rem;
    height: 3.4rem;
    border-radius: 999px;
    background: #fff;
    border: 4px solid ${({ theme }) => theme.color.ES || '#2e8540'};
    display: grid;
    place-items: center;
    font-weight: 700;
    color: ${({ theme }) => theme.color.ES || '#2e8540'};
    font-size: 1.3rem;
    z-index: 2;
  `,
  Body: styled.div`
    background: #f9fbf9;
    border: 1px solid rgba(46, 133, 64, 0.25);
    border-radius: 1.2rem;
    padding: 1.5rem 1.8rem;
    flex: 1;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);

    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.7;
    }
  `,
  Line: styled.div`
    position: absolute;
    left: 1.9rem;
    top: 3.3rem;
    width: 3px;
    height: calc(100% + 1.8rem);
    background: ${({ theme }) => (theme.color.ES || '#2e8540') + '55'};
    z-index: 1;
  `,
  Foot: styled.p`
    margin-top: 4rem;
    text-align: center;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.deepGray};
    line-height: 1.9;

    b {
      color: ${({ theme }) => theme.color.ES || '#2e8540'};
    }
  `,
};
