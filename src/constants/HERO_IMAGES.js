import about from '../assets/images/hero/about.webp';
import caroneCeo from '../assets/images/hero/carone/caroneCeo.webp';
import carone from '../assets/images/hero/caroneCars.webp';
import ce from '../assets/images/hero/ce/ce.webp';
import ceCeo from '../assets/images/hero/ce/ceCeo.webp';
import certification from '../assets/images/hero/certification.webp';
import facilities from '../assets/images/hero/facilities.webp';
import homeBussiness from '../assets/images/hero/home/bussiness.webp';
import homeCeo from '../assets/images/hero/home/ceo.webp';
import home from '../assets/images/hero/home/home.webp';
import homeLocation from '../assets/images/hero/home/location.webp';
import homeRecruit from '../assets/images/hero/home/recruit.webp';
import sg from '../assets/images/hero/sg/sg.webp';
import sgCeo from '../assets/images/hero/sg/sgCeo.webp';
import si from '../assets/images/hero/si/si.webp';
import siAbout from '../assets/images/hero/si/siAbout.webp';
import siCeo from '../assets/images/hero/si/siCeo.webp';
import total from '../assets/images/hero/total/total.webp';
import total2 from '../assets/images/hero/total/total2.webp';
import totalCeo from '../assets/images/hero/total/totalCeo.webp';

export const HERO_IMAGES = Object.freeze({
  HOME: {
    home: home,
    ceo: homeCeo,
    business: homeBussiness,
    location: homeLocation,
    process: homeRecruit,
    apply: homeRecruit,
  },
  CARONE: {
    carone: carone,
    carone2: carone,
    ceo: caroneCeo,
    history: caroneCeo,
    location: caroneCeo,
    'business-partner': caroneCeo,
    about: about,
    waste: about,
    process: about,
    facilities: facilities,
    certification: certification,
    patent: certification,
  },
  CE: {
    ce: ce,
    ceo: ceCeo,
    history: ceCeo,
    about: about,
    waste: about,
    registration: about,
    location: ceCeo,
    'business-partner': carone,
    facilities: facilities,
    certification: certification,
    patent: certification,
  },
  SG: {
    sg: sg,
    ceo: sgCeo,
    history: sgCeo,
    location: sgCeo,
    'business-partner': sgCeo,
    about: about,
    waste: about,
    flowchart: about,
    facilities: facilities,
    certification: certification,
  },
  TOTAL: {
    total: total,
    total2: total2,
    ceo: totalCeo,
    history: totalCeo,
    location: totalCeo,
    'business-partner': totalCeo,
    about: about,
    waste: about,
    process: about,
    facilities: about,
    certification: certification,
    patent: certification,
  },
  SI: {
    si: si,
    ceo: siCeo,
    history: siCeo,
    location: siCeo,
    'business-partner': siCeo,
    cleaning: siAbout,
    dredging: siAbout,
    pipe: siAbout,
    facilities: facilities,
    certification: certification,
  },
});
