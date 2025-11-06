// src/pages/Home/Ceo.jsx
import styled from 'styled-components';
import ceoPhoto from '../../assets/images/home/ceo_photo.jpg'; // 대표 사진 (미사용)
import signature from '../../assets/images/home/signature.png'; // 사인 PNG(미사용)
import Logo from '../../assets/icons/Logo.svg'; // 회사 로고 (워터마크용)

function Ceo() {
  return (
    <S.Section>
      <S.Container>
        {/* 좌측: 로고 + 타이틀 + 본문(원문 유지) */}
        <S.Left>
          <S.Brand>
            <img src={Logo} alt="회사 로고" />
            <span>인사말</span>
          </S.Brand>

          <S.Headline>
            환경가치와 기술혁신으로
            <br />
            지속가능한 내일을 만들어가겠습니다.
          </S.Headline>

          {/* ---- 원문 시작 ---- */}
          <S.Paragraph>안녕하십니까,</S.Paragraph>

          <S.Paragraph>
            환경과 미래에 삶을 최고로 생각하는{' '}
            <b>
              자동차환경 · 카원(유) · (주)에스지산업 · (주)토탈 · (주)황지 ·
              (주)에너지스토리
            </b>{' '}
            입니다.
          </S.Paragraph>

          <S.Paragraph>
            인류가 살아가고 있는 지구의 환경은 급격한 산업발전으로 나날이
            오염도가 증가하고 있으며 경제성장에 따른 생활수준의 향상으로
            사업장폐기물은 물론 생활폐기물 또한 급격히 증가하고 그 성상도
            다양화됨으로써 그에 따라 발생되는 폐기물로 인한 환경오염 및 막대한
            처리비용은 심각한 사회적 문제와 기업의 비용손실로 직결되고 있습니다.
          </S.Paragraph>

          <S.Paragraph>
            전 세계적으로 <b>재활용, 재이용을 최우선</b>시하며 <b>탄소중립</b>을
            목표로 나아가고 있습니다.
          </S.Paragraph>

          <S.Paragraph>
            이에 저희 기업은 폐기물을 최대한 재활용하여 국가의 자원 절약 및 녹색
            환경 정책에 부응한{' '}
            <b>‘폐기물의 자원순환, 폐기물 재활용 99.9%에 도전한다’</b>라는
            슬로건 아래 더 밝은 미래와 더 나은 삶, 깨끗한 환경을 위해 최선을
            다하며 환경을 최고로 생각하는 신뢰받는 기업, 존경받는 기업으로
            거듭나겠습니다.
          </S.Paragraph>

          <S.Paragraph>
            그 여정에 여러분의 변함없는 신뢰와 응원을 부탁드립니다. 감사합니다.
          </S.Paragraph>
          {/* ---- 원문 끝 ---- */}
        </S.Left>

        {/* 우측: 캡션만 (사진/직함 제거) */}
        <S.Right>
          <S.Caption>
            <span>
              ㈜자동차환경 · (유)카원 · ㈜에스지산업 · ㈜토탈 · ㈜황지 ·
              ㈜에너지스토리
            </span>
            {/* 직함 제거 */}
            <span>회장</span>
            <strong>김 홍 휘</strong>
          </S.Caption>
        </S.Right>
      </S.Container>
    </S.Section>
  );
}

export default Ceo;

/* ===================== styled ===================== */
const S = {
  Section: styled.section`
    position: relative;
    overflow: hidden;

    /* 베이스 톤(은은한 텍스처) */
    background-image: radial-gradient(
      1200px 600px at 10% -10%,
      #ffffff 0%,
      #f6f6f6 55%,
      #eeeeee 100%
    );

    /* 워터마크 로고: ::before로 독립 레이어에 렌더링 */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      user-select: none;
      z-index: 0;

      background-image: url(${Logo});
      background-repeat: no-repeat;
      background-position: right 6% bottom 10%;
      background-size: clamp(280px, 40vw, 520px);

      opacity: 0.08;
      mix-blend-mode: multiply;
      filter: brightness(1.1);
    }
  `,

  Container: styled.div`
    position: relative;
    z-index: 1; /* 워터마크(::before) 위로 콘텐츠 올리기 */

    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(56px, 6vw, 92px) clamp(20px, 4vw, 36px);
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: clamp(24px, 4vw, 64px);

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  `,

  /* LEFT */
  Left: styled.div`
    display: grid;
    align-content: start;
    gap: clamp(20px, 2.6vw, 28px); /* 간격 살짝 키움 */
  `,

  Brand: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: clamp(36px, 4vw, 44px);
      height: auto;
      display: block;
    }
    span {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: clamp(16px, 1.6vw, 18px);
      color: ${({ theme }) => theme.color.TOTAL};
    }
  `,

  Headline: styled.h1`
    font-weight: 900;
    color: ${({ theme }) => theme.color.black};
    line-height: 1.14;
    /* 제목 더 크게 */
    font-size: clamp(36px, 5vw, 54px);
    letter-spacing: -0.02em;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 92px;
      height: 7px;
      margin-top: 18px;
      border-radius: 999px;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.color.TOTAL} 0%,
        ${({ theme }) => theme.color.TOTAL + '88'} 70%,
        transparent 100%
      );
    }
  `,

  Paragraph: styled.p`
    /* 본문 글자 크게 */
    font-size: clamp(19px, 1.9vw, 22px);
    line-height: 1.95;
    color: #212529;
    text-align: justify;
    word-break: keep-all;

    b {
      font-size: 1.5rem;
      font-weight: 900;
      color: ${({ theme }) => theme.color.TOTAL};
    }
  `,

  /* RIGHT */
  Right: styled.aside`
    display: grid;
    align-content: end;
    gap: 18px;

    @media (max-width: 980px) {
      align-content: start;
      justify-items: center;
      gap: 24px;
    }
  `,

  /* 사진/사인 컴포넌트 삭제됨 */

  Caption: styled.div`
    display: grid;
    justify-items: end;
    gap: 4px;
    color: #0b0d0f;

    /* 소개 줄(회사 나열) 더 작게 */
    span:first-of-type {
      font-size: clamp(12px, 1.4vw, 13px);
      color: #6b7280;
      font-weight: 600;
    }

    /* 직함 줄 삭제됨 */
    span:nth-of-type(2) {
      /* ✅ 직함 스타일 */
      font-size: clamp(14px, 1.6vw, 15px);
      color: #374151;
      font-weight: 700;
    }

    /* 이름은 존재감 있게 */
    strong {
      font-size: clamp(24px, 2.6vw, 28px);
      letter-spacing: 0.04em;
      font-weight: 900;
      margin-bottom: 2px;
    }

    @media (max-width: 980px) {
      justify-items: center;
      text-align: center;
    }
  `,
};
