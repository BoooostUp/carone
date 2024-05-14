import homeImage1 from '/src/assets/images/mainArticle/ce.webp';
import homeImage2 from '/src/assets/images/mainArticle/carone.webp';
import homeImage3 from '/src/assets/images/mainArticle/sg.webp';
import homeImage4 from '/src/assets/images/mainArticle/total.webp';
import homeImage5 from '/src/assets/images/mainArticle/si.webp';

import ceImage1 from '/src/assets/images/ce/main1.png';
import ceImage2 from '/src/assets/images/ce/main2.png';
import ceImage3 from '/src/assets/images/ce/main3.png';
import ceImage4 from '/src/assets/images/ce/main4.png';

import sgImage1 from '/src/assets/images/sg/main1.png';
import sgImage2 from '/src/assets/images/sg/main2.png';
import sgImage3 from '/src/assets/images/sg/main3.png';
import sgImage4 from '/src/assets/images/sg/main4.png';

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

import total1Image1 from '/src/assets/images/total/total_factory.webp';
import total1Image2 from '/src/assets/images/total/total_factory.webp';
import total1Image3 from '/src/assets/images/total/total_factory.webp';
import total1Image4 from '/src/assets/images/total/total_factory.webp';

import total2Image1 from '/src/assets/images/total2/material.webp';
import total2Image2 from '/src/assets/images/total2/shredding.webp';
import total2Image3 from '/src/assets/images/total2/grinding.webp';
import total2Image4 from '/src/assets/images/total2/magnetic_separation.webp';

// import siImage1 from '';
// import siImage2 from '';
// import siImage3 from '';
// import siImage4 from '';

export const MAIN_ARTICLE_CONTENTS = Object.freeze({
  HOME: [
    {
      id: 'CE',
      title1: '(주)자동차 환경',
      content1: `(주)자동차환경은 자동차정비업에서 배출되는 폐기물을 배출하는 회원사에 위탁받아 폐기물 배출 신고 및 관리하는 공동운영기구입니다.
        
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
      imageAddress: ceImage1,
    },
    {
      id: 2,
      title1: '폐기물 운반',
      content1:
        '폐기물의 종류와 특성에 맞는 전용 차량을 사용하며, 운반 과정에서 발생할 수 있는 환경오염을 최소화합니다.',
      imageAddress: ceImage2,
    },
    {
      id: 3,
      title1: '폐기물 재처리',
      content1:
        '폐기물의 성분과 특성을 분석하여 적절한 재처리 방법을 적용하며, 관련 법규를 준수합니다.',
      imageAddress: ceImage3,
    },
    {
      id: 4,
      title1: '폐기물 재활용',
      content1:
        '사업장에서 발생한 폐기물 중 재활용이 가능한 자원을 선별하여 새로운 제품 생산에 활용하는 서비스를 제공합니다.',
      imageAddress: ceImage4,
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
    {
      id: 1,
      title1: '폐유 저장시설',
      content1: '폐유를 안전하게 보관하고 관리하는 시설을 운영하고 있습니다.',
      imageAddress: sgImage1,
    },
    {
      id: 2,
      title1: '폐유 여과처리',
      content1:
        '폐유 내 부유물질 및 불순물을 여과 및 정화하는 기술을 보유하고 있습니다.',
      imageAddress: sgImage2,
    },
    {
      id: 3,
      title1: '이온정제유 생산',
      content1: '벙커 A/B/C유 대체연료유로 사용할 수 있습니다.',
      imageAddress: sgImage3,
    },
    {
      id: 4,
      title1: '재생연료유 생산',
      content1:
        '시멘트 및 석고를 제조하는 소성로의 보조 연료로 사용할 수 있습니다.',
      imageAddress: sgImage4,
    },
  ],
  TOTAL1: [
    {
      id: 1,
      title1: '폐기물 수집',
      content1:
        '다양한 산업 현장에서 발생하는 고체 및 액체 폐기물을 수집하여 적절한 처리를 위해 전달하는 전문적인 서비스입니다.',
      imageAddress: total1Image1,
    },
    {
      id: 2,
      title1: '유기용제 생산',
      content1:
        '화학 산업의 일부로, 다양한 산업 공정에서 사용되는 유기화학 제품을 제조하는 과정입니다.',
      imageAddress: total1Image2,
    },
    {
      id: 3,
      title1: '스팀 생산',
      content1:
        '열에너지를 이용하여 물을 가열하여 대량의 증기를 생성하는 과정으로, 이 증기는 주로 발전, 난방, 산업 공정 등에 활용됩니다.',
      imageAddress: total1Image3,
    },
    {
      id: 4,
      title1: '연료 재활용',
      content1:
        '사용된 연료나 폐자원을 수집하고 처리하여 재사용 가능한 형태로 전환하는 과정으로, 자원의 효율적 사용과 환경 보호에 기여합니다.',
      imageAddress: total1Image4,
    },
  ],
  TOTAL2: [
    {
      id: 1,
      title1: '원료입고 및 보관',
      content1:
        ' 제조 과정에서 필요한 원료를 안전하게 수령하고, 적절한 조건에서 저장하여 품질을 유지하는 활동입니다.',
      imageAddress: total2Image1,
    },
    {
      id: 2,
      title1: '파쇄',
      content1:
        '재활용 과정에서 대형 폐기물을 작은 조각으로 쪼개어 처리 용이성을 높이는 과정으로, 이는 재활용 효율을 개선하고 추가 처리 과정을 용이하게 합니다.',
      imageAddress: total2Image2,
    },
    {
      id: 3,
      title1: '분쇄',
      content1:
        '고체 재료를 더 작은 입자로 만드는 과정으로, 화학 반응의 표면적을 늘리거나, 특정 제품의 생산을 위해 사용됩니다.',
      imageAddress: total2Image3,
    },
    {
      id: 4,
      title1: '마그네틱 선별',
      content1:
        '자성을 이용하여 혼합물에서 철과 같은 자성 금속을 분리하는 과정으로, 재활용 산업에서 폐기물에서 가치 있는 재료를 회수하는 데 중요한 역할을 합니다.',
      imageAddress: total2Image4,
    },
  ],
  SI: [
    { id: 1, title1: '(주)세명인텍', content1: '', imageAddress: '' },
    { id: 2, title1: '사업 내용', content1: '', imageAddress: '' },
    { id: 3, title1: '클리닝 세척', content1: '', imageAddress: '' },
    { id: 4, title1: '작업 내역', content1: '', imageAddress: '' },
  ],
});
