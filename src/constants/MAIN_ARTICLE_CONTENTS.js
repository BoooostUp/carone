import homeImage1 from '/src/assets/images/mainArticle/ce.webp';
import homeImage2 from '/src/assets/images/mainArticle/carone.webp';
import homeImage3 from '/src/assets/images/mainArticle/sg.webp';
import homeImage4 from '/src/assets/images/mainArticle/total.webp';
import homeImage5 from '/src/assets/images/mainArticle/si.webp';

// import ceImage1 from '';
// import ceImage2 from '';
// import ceImage3 from '';
// import ceImage4 from '';

import carone1Image1 from '/src/assets/images/carone/main1.webp';
import carone1Image2 from '/src/assets/images/carone/main2.webp';
import carone1Image3 from '/src/assets/images/carone/main3.webp';
import carone1Image4 from '/src/assets/images/carone/main4.webp';

import carone2Image1 from '/src/assets/images/carone2/main1.webp';
import carone2Image2 from '/src/assets/images/carone2/main2.webp';
import carone2Image3 from '/src/assets/images/carone2/main3.webp';
import carone2Image4 from '/src/assets/images/carone2/main4.webp';

// import sgImage1 from '';
// import sgImage2 from '';
// import sgImage3 from '';
// import sgImage4 from '';

// import total1Image1 from '';
// import total1Image2 from '';
// import total1Image3 from '';
// import total1Image4 from '';

// import total2Image1 from '';
// import total2Image2 from '';
// import total2Image3 from '';
// import total2Image4 from '';

// import siImage1 from '';
// import siImage2 from '';
// import siImage3 from '';
// import siImage4 from '';

export const MAIN_ARTICLE_CONTENTS = Object.freeze({
  HOME: [
    {
      id: 'CE',
      title1: '(주)자동차 환경',
      content1: `자동차환경은 자동차정비업에서 배출되는 폐기물을 배출하는 회원사에 위탁받아 폐기물 배출 신고 및 관리하는 공동운영기구입니다.
        
      폐기물을 공동으로 수집 · 운반 · 재활용 · 처분하며 깨끗한 환경을 위해 더욱더 앞장서겠습니다.`,
      imageAddress: homeImage1,
    },
    {
      id: 'CARONE',
      title1: '(주)카원 1공장',
      title2: '(주)카원 2공장',
      content1:
        '(주)카원은 폐기물 수집·운반업을 중점으로 모든 사업장폐기물을 수집운반하며, 재활용업까지 사업분야를 넓혀 폐기물을 자원으로 최대한 활용합니다.',
      content2: `(주)카원 제 2공장은 기존에 소각으로 처리하던 용기류(폐페인트칩, 폐유드럼통)를 파쇄 분쇄하여 원자재 고철로 생산하는 재활용업입니다.
        
        폐기물이 99.9%의 자원으로 재활용될 때까지 최선을 다하겠습니다.`,
      imageAddress: homeImage2,
    },
    {
      id: 'SG',
      title1: '(주)에스지산업',
      content1: `(주)에스지산업은 숙련된 생산기술력과 인력으로 폐유를 재활용하여 이온정제유를 생산, 산업체 연료유로 재활용합니다.
        
        국가 정책에 부합하는 그린에너지를 실천하는 기업이 되기 위해 더욱더 노력하겠습니다.`,
      imageAddress: homeImage3,
    },
    {
      id: 'TOTAL',
      title1: '(주)토탈 1공장',
      title2: '(주)토탈 2공장',
      content1:
        '(주)토탈은 폐기물이 소각되기 전까지 철저한 분리, 재활용처리에 관심을 기울이며 정제, 파쇄 등을 거쳐 최종 소각하며 소각열 재이용 등 최고의 기술로 탄소중립에 최선을 다하고 있습니다.',
      content2:
        '(주)토탈 제 2공장은 기존에 소각으로 처리하던 용기류(폐페인트칩, 폐유드럼통)를 파쇄 분쇄하여 원자재 고철로 생산하는 재활용업입니다.',
      imageAddress: homeImage4,
    },
    {
      id: 'SI',
      title1: '(주)세명인텍',
      content1: `(주)세명인텍은 안전, 환경을 우선하는 기업으로 정직과 신뢰를 바탕으로 미래의 주도적인 기업을 창조합니다.
        
        고객의 입장에서 고객이 만족할 때까지 최선을 다하겠습니다.`,
      imageAddress: homeImage5,
    },
  ],
  CE: [
    {
      id: 1,
      title1: '사업장 폐기물 공동 수집',
      content1:
        '자동차정비업에서 배출되는 폐기물을 배출하는 회원사에 위탁받아 폐기물 배출 신고 및 관리하는 공동운영기구입니다.',
      imageAddress: '',
    },
    {
      id: 2,
      title1: '폐기물 운반',
      content1: '',
      imageAddress: '',
    },
    {
      id: 3,
      title1: '폐기물 재처리',
      content1: '',
      imageAddress: '',
    },
    {
      id: 4,
      title1: '폐기물 재활용',
      content1: '',
      imageAddress: '',
    },
  ],
  CARONE1: [
    {
      id: 1,
      title1: '석면운반/처리',
      content1:
        '사업장에서 발생하는 석면 폐기물의 안전한 운반 및 처리 서비스를 제공합니다.',
      imageAddress: carone1Image1,
    },
    {
      id: 2,
      title1: '고철운반/처리',
      content1:
        '사업장에서 발생하는 고철 폐기물의 안전한 운반 및 처리 서비스를 제공합니다.',
      imageAddress: carone1Image2,
    },
    {
      id: 3,
      title1: '취급품목',
      content1: 'PP, PE, 파쇄고철, 폐밧데리 등을 취급하고 있습니다.',
      imageAddress: carone1Image3,
    },
    {
      id: 4,
      title1: '보유설비',
      content1:
        '지정폐기물 및 일반폐기물을 수집하고 운반할 수 있는 전용 차량을 사용합니다.',
      imageAddress: carone1Image4,
    },
  ],
  CARONE2: [
    {
      id: 1,
      title1: '파쇄/분쇄',
      content1:
        '기존에 소각으로 처리하던 용기류(폐페인트칩, 폐유드럼통)를 파쇄/분쇄합니다.',
      imageAddress: carone2Image1,
    },
    {
      id: 2,
      title1: '재활용',
      content1:
        '사업장에서 발생하는 폐기물을 자원으로 최대한 활용하여 맑고 깨끗한 환경을 추구합니다.',
      imageAddress: carone2Image2,
    },
    {
      id: 3,
      title1: '취급품목',
      content1: 'PP, PE, 파쇄고철, 폐밧데리 등을 취급하고 있습니다.',
      imageAddress: carone2Image3,
    },
    {
      id: 4,
      title1: '보유설비',
      content1:
        '파쇄시설, 탈수시설, 탈유시설, 마그네틱 선별기 등의 다양한 장비를 사용하고 있습니다.',
      imageAddress: carone2Image4,
    },
  ],
  SG: [
    { id: 1, title1: '폐유 저장시설', content1: '', imageAddress: '' },
    { id: 2, title1: '폐유 여과처리', content1: '', imageAddress: '' },
    { id: 3, title1: '이온정제유 생산', content1: '', imageAddress: '' },
    { id: 4, title1: '재생연료유 생산', content1: '', imageAddress: '' },
  ],
  TOTAL1: [
    { id: 1, title1: '폐기물 수집', content1: '', imageAddress: '' },
    { id: 2, title1: '유기용제 생산', content1: '', imageAddress: '' },
    { id: 3, title1: '스팀 생산', content1: '', imageAddress: '' },
    { id: 4, title1: '연료 재활용', content1: '', imageAddress: '' },
  ],
  TOTAL2: [
    { id: 1, title1: '', content1: '', imageAddress: '' },
    { id: 2, title1: '', content1: '', imageAddress: '' },
    { id: 3, title1: '', content1: '', imageAddress: '' },
    { id: 4, title1: '', content1: '', imageAddress: '' },
  ],
  SI: [
    { id: 1, title1: '(주)세명인텍', content1: '', imageAddress: '' },
    { id: 2, title1: '사업 내용', content1: '', imageAddress: '' },
    { id: 3, title1: '클리닝 세척', content1: '', imageAddress: '' },
    { id: 4, title1: '작업 내역', content1: '', imageAddress: '' },
  ],
});
