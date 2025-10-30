import homeBusiness from '../assets/images/hero/home/business.webp';
import homeCeo from '../assets/images/hero/home/ceo.webp';
import homeLocation from '../assets/images/hero/home/location.webp';
import homeRecruit from '../assets/images/hero/home/recruit.webp';
import introContent1 from '../assets/videos/IntroContent1.mp4';

export const HERO_VIDEOS = Object.freeze({
  HOME: {
    home: introContent1,
    ceo: homeCeo,
    business: homeBusiness,
    location: homeLocation,
    process: homeRecruit,
    apply: homeRecruit,
  },
  CARONE: {},
  CE: {},
  SG: {},
  TOTAL: {},
  SI: {},
  //TODO: 에너지스토리 정보 기입
  ES: {},
  //TODO: 황지 정보 기입
  HJ: {},
});
