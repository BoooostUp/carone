import homeImage2 from '/src/assets/images/mainArticle/carone.webp';
import homeImage1 from '/src/assets/images/mainArticle/ce.webp';
import homeImage3 from '/src/assets/images/mainArticle/sg.webp';
import homeImage4 from '/src/assets/images/mainArticle/total.webp';

import ceImage1 from '/src/assets/images/ce/main1.webp';
import ceImage2 from '/src/assets/images/ce/main2.png';
import ceImage3 from '/src/assets/images/ce/main3.png';
import ceImage4 from '/src/assets/images/ce/main4.webp';

import sgImage1 from '/src/assets/images/sg/main1.png';
import sgImage2 from '/src/assets/images/sg/main2.png';
import sgImage3 from '/src/assets/images/sg/main3.png';
import sgImage4 from '/src/assets/images/sg/main4.png';

import carone1Image1 from '/src/assets/images/carone/main1.webp';
import carone1Image2 from '/src/assets/images/carone/main2.webp';
import carone1Image3 from '/src/assets/images/carone/main3.webp';
import carone1Image4 from '/src/assets/images/carone/main4.jpg';

import carone2Image1 from '/src/assets/images/carone2/main1.webp';
import carone2Image2 from '/src/assets/images/carone2/main2.webp';
import carone2Image3 from '/src/assets/images/carone2/main3.webp';
import carone2Image4 from '/src/assets/images/carone2/main4.webp';

import total1Image1 from '/src/assets/images/total/main1.webp';
import total1Image2 from '/src/assets/images/total/main2.webp';
import total1Image3 from '/src/assets/images/total/main3.webp';
import total1Image4 from '/src/assets/images/total/main4.webp';

import esImage1 from '/src/assets/images/es/esImage1.png';
import esImage2 from '/src/assets/images/es/esImage2.png';
import esImage3 from '/src/assets/images/es/esImage3.png';
import esImage4 from '/src/assets/images/es/esImage4.png';

import hgImage1 from '/src/assets/images/hj/hjImage1.png';
import hgImage2 from '/src/assets/images/hj/hjImage2.png';
import hgImage3 from '/src/assets/images/hj/hjImage3.png';
import hgImage4 from '/src/assets/images/hj/hjImage4.png';

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
      title1: '카원(유) 1공장',
      title2: '카원(유) 2공장',
      content1:
        '카원(유)은 폐기물 수집·운반업을 중점으로 모든 사업장폐기물을 수집운반하며, 재활용업까지 사업분야를 넓혀 폐기물을 자원으로 최대한 활용합니다.',
      content2: `카원(유) 제 2공장은 기존에 소각으로 처리하던 용기류(폐페인트칩, 폐유드럼통)를 파쇄 분쇄하여 원자재 고철로 생산하는 재활용업입니다.
        
        폐기물이 99.9%의 자원으로 재활용될 때까지 최선을 다하겠습니다.`,
      imageAddress: homeImage2,
    },
    {
      id: 'ES',
      title1: '(주)에너지스토리',
      content1: `(주)에너지스토리는 폐유성페인트, 폐수성페인트, 폐유기용제 등을 파쇄·분쇄·정제하여
      유기용제 및 재생연료로 재활용하는 액상폐기물 재활용 전문 기업입니다.`,
      imageAddress: homeImage2, // 실제 있는 이미지로 교체
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
      id: 'HJ',
      title1: '(주)황지',
      content1: `(주)황지는 울산시청 허가를 받아 사업장 일반폐기물 중 매립대상 폐기물을
      안정적으로 처리하는 최종처분(매립) 전문 업체입니다.`,
      imageAddress: homeImage2, // 실제 있는 이미지로 교체
    },
    {
      id: 'SG',
      title1: '(주)에스지산업',
      content1: `(주)에스지산업은 숙련된 생산기술력과 인력으로 폐유를 재활용하여 이온정제유를 생산, 산업체 연료유로 재활용합니다.
        
        국가 정책에 부합하는 그린에너지를 실천하는 기업이 되기 위해 더욱더 노력하겠습니다.`,
      imageAddress: homeImage3,
    },
  ],
  CE: [
    {
      id: 1,
      title1: '공동운영기구',
      content1: `(주)자동차환경은 자동차정비업 관련 폐기물 배출 신고와 
      관리를 담당하는 공동운영기구입니다.`,
      imageAddress: ceImage1,
    },
    {
      id: 2,
      title1: '배출 신고·관리',
      content1: `양산시 관할로 사업장폐기물배출자 신고와 지정폐기물 
      처리계획증명을 수행합니다.`,
      imageAddress: ceImage2,
    },
    {
      id: 3,
      title1: '주요 배출 품목',
      content1: `폐수처리오니, 폐합성수지, 폐타이어, 폐윤활유, 폐배터리, 
      폐페인트 등을 취급합니다.`,
      imageAddress: ceImage3,
    },
    {
      id: 4,
      title1: '협력 네트워크',
      content1: `회원사와 협력업체가 함께 투명하고 안전한 폐기물 
      관리체계를 유지합니다.`,
      imageAddress: ceImage4,
    },
  ],
  CARONE1: [
    {
      id: 1,
      title1: '폐기물 수집·운반',
      content1: `사업장에서 발생한 지정 및 일반폐기물을 안전하게 모아
      수집·운반합니다.`,
      imageAddress: carone1Image1,
    },
    {
      id: 2,
      title1: '재활용 처리',
      content1: `폐합성수지류, 폐고무류 등 재활용 가능한 자원들을 수집해
      파쇄·분쇄합니다.`,
      imageAddress: carone1Image2,
    },
    {
      id: 3,
      title1: '취급 품목',
      content1: `PP, PE, 파쇄고철, 폐배터리, 폐유기용제 등을 취급합니다.`,
      imageAddress: carone1Image3,
    },
    {
      id: 4,
      title1: '보유 설비',
      content1: `폐기물 전용 차량 등 다양한 운반 장비를 보유하고 있습니다.`,
      imageAddress: carone1Image4,
    },
  ],
  CARONE2: [
    {
      id: 1,
      title1: '파쇄·분쇄',
      content1: `폐페인트칩, 폐유드럼통 등 용기류를 파쇄·분쇄하여 자원화
      하도록 합니다.`,
      imageAddress: carone2Image1,
    },
    {
      id: 2,
      title1: '자원 순환',
      content1: `폐기물을 재활용하여 친환경 순환경제 실현에 기여합니다.`,
      imageAddress: carone2Image2,
    },
    {
      id: 3,
      title1: '취급 품목',
      content1: `PP, PE, 파쇄고철, 폐배터리 등 다양한 재활용 자재를 
      취급합니다.`,
      imageAddress: carone2Image3,
    },
    {
      id: 4,
      title1: '주요 설비',
      content1: `파쇄·탈수·탈유시설 및 마그네틱 선별기 등을 보유하고 
      있습니다.`,
      imageAddress: carone2Image4,
    },
  ],
  SG: [
    {
      id: 1,
      title1: '폐유 저장시설',
      content1: '폐유를 안전하게 보관·관리하는 전용 저장시설을 운영합니다.',
      imageAddress: sgImage1,
    },
    {
      id: 2,
      title1: '폐유 여과처리',
      content1: '부유물질 및 불순물을 여과해 고품질 재생유로 정화합니다.',
      imageAddress: sgImage2,
    },
    {
      id: 3,
      title1: '이온정제유 생산',
      content1: '벙커A·B·C유를 대체할 친환경 정제유를 생산합니다.',
      imageAddress: sgImage3,
    },
    {
      id: 4,
      title1: '재생연료유 생산',
      content1:
        '시멘트·석고 소성로의 보조 연료로 활용되는 재생연료유를 생산합니다.',
      imageAddress: sgImage4,
    },
  ],
  TOTAL1: [
    {
      id: 1,
      title1: '폐기물 수집',
      content1:
        '산업 현장에서 발생한 폐기물을 수집해 안전한 처리 과정으로 전달합니다.',
      imageAddress: total1Image1,
    },
    {
      id: 2,
      title1: '고온 소각',
      content1:
        '최첨단 소각 설비로 폐기물을 고온 처리하여 환경오염을 최소화합니다.',
      imageAddress: total1Image2,
    },
    {
      id: 3,
      title1: '스팀 생산',
      content1:
        '소각 과정의 열에너지를 활용해 산업용 스팀을 생산하고 공급합니다.',
      imageAddress: total1Image3,
    },
    {
      id: 4,
      title1: '연료 재활용',
      content1:
        '폐자원을 재활용 연료로 전환해 자원순환과 환경보호에 기여합니다.',
      imageAddress: total1Image4,
    },
  ],
  //TODO: 황지 정보 기입
  HJ: [
    {
      id: 1,
      title1: '(주)황지',
      content1: `(주)황지는 위생적이고 안정적인 매립시설을 갖춘 
    사업장폐기물 최종처분 전문 업체입니다.`,
      imageAddress: hgImage1,
    },
    {
      id: 2,
      title1: '매립시설 운영',
      content1: `폐기물의 성상과 기준에 맞춰 
    환경안전기준에 부합하는 매립처리를 수행합니다.`,
      imageAddress: hgImage2,
    },
    {
      id: 3,
      title1: '현장 관리 및 세척',
      content1: `매립장 내 청결 유지와 장비 세척을 통해 
    안정적이고 위생적인 작업환경을 유지합니다.`,
      imageAddress: hgImage3,
    },
    {
      id: 4,
      title1: '협력 및 관리 체계',
      content1: `관련 기관 및 협력사와 연계하여 
    투명하고 효율적인 폐기물 관리체계를 운영합니다.`,
      imageAddress: hgImage4,
    },
  ],

  //TODO: 에너지스토리 정보 기입
  ES: [
    {
      id: 1,
      title1: '에너지스토리 소개',
      content1: `(주)에너지스토리는 금속 폐기물의 파쇄·선별·재활용을 
      전문으로 하는 자원순환 기업입니다.`,
      imageAddress: esImage1,
    },
    {
      id: 2,
      title1: '파쇄·선별',
      content1: `철스크랩 등 다양한 금속을 파쇄하고 선별하여 고품질 
      재활용 원료로 재가공합니다.`,
      imageAddress: esImage2,
    },
    {
      id: 3,
      title1: '금속 재활용',
      content1: `파쇄된 금속을 재활용하여 자원의 재사용률을 높이고 
      환경부담을 줄입니다.`,
      imageAddress: esImage3,
    },
    {
      id: 4,
      title1: '친환경 기술',
      content1: `효율적인 자원 순환과 환경 보호를 위한 기술 개발에 
      앞장섭니다.`,
      imageAddress: esImage4,
    },
  ],
});
