import caroneImage from '../assets/images/root/carone.png';
import ceImage from '../assets/images/root/ce.png';
import homeImage from '../assets/images/root/home.png';
import sgImage from '../assets/images/root/sg.png';
import siImage from '../assets/images/root/sg.png';
import totalImage from '../assets/images/root/total.png';

export const CELL_IMAGE = Object.freeze({
  home: homeImage,
  ce: ceImage,
  carone: caroneImage,
  sg: sgImage,
  total: totalImage,
  si: siImage,
});

export const ROOT = Object.freeze({
  CELLS: [
    {
      id: 1,
      name: '회사소개',
      company: 'home',
      description: 'Energy & Water',
      indexColor: 'HOME',
    },
    {
      id: 2,
      name: '자동차환경',
      company: 'ce',
      description: '자동차정비업 폐기물\n운반·재처리',
      indexColor: 'CE',
    },
    {
      id: 3,
      name: '(주)카원',
      company: 'carone',
      description: '사업장 지정폐기문 운반\n중간처리(종합재활용)',
      indexColor: 'CARONE',
    },
    {
      id: 4,
      name: '(주)에스지산업',
      company: 'sg',
      description: '이온정제유 및 윤활유\n생산 판매',
      indexColor: 'SG',
    },
    {
      id: 5,
      name: '(주)토탈',
      company: 'total',
      description:
        '일반, 지정폐기물 중간 처분업(소각전문)\n지정폐기물 중간 재활용업(폐페인트 캔류)',
      indexColor: 'TOTAL',
    },
    {
      id: 6,
      name: '세명인텍(주)',
      company: 'si',
      description: '이온정제유 및 윤활유 \n생산 판매',
      indexColor: 'SI',
    },
  ],
});
