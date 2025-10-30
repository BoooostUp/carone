import introImage1 from '/src/assets/images/introContent/IntroContent1.webp';
import introImage2 from '/src/assets/images/introContent/IntroContent2.png';
import introImage3 from '/src/assets/images/introContent/IntroContent3.png';
import introImage4 from '/src/assets/images/introContent/IntroContent4.png';

export const INTRO_CONTENT_CONTENTS = Object.freeze({
  CONTENTS: [
    {
      title: '폐기물 수집운반업',
      element1: '지정폐기물 (액상·고상)',
      element2: '사업장배출시설계',
      element3: '사업장비배출시설계 (사업장생활계)',
      element4: '건설폐기물',
      imageAddress: introImage1,
    },
    {
      title: '폐기물 재활용업',
      element1: '폐합성수지 (파쇄)',
      element2: '폐페인트 폐유기용제·폐유 (정제)',
      element3: '폐페인트 캔, 드럼 (파쇄)',
      element4: '폐유 캔, 드럼 (파쇄)',
      imageAddress: introImage2,
    },
    {
      title: '폐기물 중간처분업',
      element1: '지정폐기물 (고온소각)',
      element2: '일반폐기물 (일반소각)',
      element3: '건설폐기물 중 가연성폐기물 (일반소각)',
      imageAddress: introImage3,
    },
    {
      title: '폐기물 매립업',
      element1: '비가연성 폐기물 (슬러지, 오니 등)',
      element2: '소각잔재물 및 비금속성 폐기물',
      element3: '안정형·관리형 매립장 운영',
      element4: '차수막·침출수 처리시설 운영',
      imageAddress: introImage4,
    },
  ],
});
