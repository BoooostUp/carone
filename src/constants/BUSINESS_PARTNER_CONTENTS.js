import carone1Partner1 from '../assets/images/carone/business_partner1.webp';
import carone1Partner2 from '../assets/images/carone/business_partner2.webp';
import carone1Partner3 from '../assets/images/carone/business_partner3.webp';
import carone1Partner4 from '../assets/images/carone/business_partner4.webp';
import carone1Partner5 from '../assets/images/carone/business_partner5.webp';
import carone1Partner6 from '../assets/images/carone/business_partner6.webp';
import carone1Partner7 from '../assets/images/carone/business_partner7.webp';
import carone1Partner8 from '../assets/images/carone/business_partner8.webp';
import carone2Partner1 from '../assets/images/carone2/business_partner1.webp';
import carone2Partner2 from '../assets/images/carone2/business_partner2.webp';
import carone2Partner3 from '../assets/images/carone2/business_partner3.webp';
import carone2Partner4 from '../assets/images/carone2/business_partner4.webp';
import carone2Partner5 from '../assets/images/carone2/business_partner5.webp';
import carone2Partner6 from '../assets/images/carone2/business_partner6.webp';
import carone2Partner7 from '../assets/images/carone2/business_partner7.webp';
import ce1 from '../assets/images/ce/business_partner1.png';
import ce2 from '../assets/images/ce/business_partner2.png';
import ce3 from '../assets/images/ce/business_partner3.png';
import ce4 from '../assets/images/ce/business_partner4.png';
import ce5 from '../assets/images/ce/business_partner5.png';
import ce6 from '../assets/images/ce/business_partner6.png';
import image from '../assets/images/introContent/IntroContent1.webp'; // mock data
import sg1 from '../assets/images/sg/business_partner1.png';
import si1 from '../assets/images/si/business_partner1.webp';
import si2 from '../assets/images/si/business_partner2.webp';
import si3 from '../assets/images/si/business_partner3.webp';
import si4 from '../assets/images/si/business_partner4.webp';

export const BUSINESS_PARTNER_CONTENTS = Object.freeze({
  CE: {
    id: 1,
    title:
      '현대블루핸즈, 한국지엠, GM대우바로정비, SK내트럭하우스, 르노코리아,기아 등 약 1000개소',
    imageAddress: [ce1, ce2, ce3, ce4, ce5, ce6],
  },

  CARONE1: {
    id: 2,
    title:
      '현대중공업, 삼성중공업, 대우조선해양, 르노코리아, BGF리테일(CU),부산신항국제터미널, LS전선, 부산식약청 등 약 2,000개소',
    imageAddress: [
      carone1Partner1,
      carone1Partner2,
      carone1Partner3,
      carone1Partner4,
      carone1Partner5,
      carone1Partner6,
      carone1Partner7,
      carone1Partner8,
    ],
  },
  CARONE2: {
    id: 3,
    title:
      '재생드럼 생산업체, 금강페인트, 현대중공업, 삼성중공업, 한화오션, HJ중공업, 대한조선, 현대삼호조선 등',
    imageAddress: [
      carone2Partner1,
      carone2Partner2,
      carone2Partner3,
      carone2Partner4,
      carone2Partner5,
      carone2Partner6,
      carone2Partner7,
    ],
  },
  SG: {
    id: 4,
    title: '(주)동신화학, 신성메탈(주), (주)협성이피에스, (주)태산개발',
    imageAddress: [sg1],
  },
  TOTAL1: {
    id: 5,
    title:
      '현대자동차, 현대제철, SKPIC글로벌, SKPU코어, 한국무브넥스, 대륙금속,고려제강, 삼성전기, 울산대학교병원 등',
    imageAddress: [image, image, image],
  },
  TOTAL2: {
    id: 6,
    title:
      '재생드럼 생산업체, 금강페인트, 현대중공업, 삼성중공업, 한화오션, HJ중공업,대한조선, 현대삼호조선 등',
    imageAddress: [image, image, image],
  },
  SI: {
    id: 7,
    title: 'POSCO, SK가스, SK FCC 2공장, 태광산업, KPS울산사업소, 울산화력 등',
    imageAddress: [si1, si2, si3, si4],
  },
});
