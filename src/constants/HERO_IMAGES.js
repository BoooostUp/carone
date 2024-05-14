import about from '../assets/images/hero/about.jpg';
import caroneCeo from '../assets/images/hero/carone/caroneCeo.jpg';
import carone from '../assets/images/hero/caroneCars.jpg';
import ce from '../assets/images/hero/ce/ce.jpg';
import ceCeo from '../assets/images/hero/ce/ceCeo.jpg';
import certification from '../assets/images/hero/certification.jpg';
import facilities from '../assets/images/hero/facilities.jpg';
import homeBussiness from '../assets/images/hero/home/bussiness.jpg';
import homeCeo from '../assets/images/hero/home/ceo.jpg';
import home from '../assets/images/hero/home/home.jpg';
import homeLocation from '../assets/images/hero/home/location.jpg';
import homeRecruit from '../assets/images/hero/home/recruit.jpg';
import sg from '../assets/images/hero/sg/sg.jpg';
import sgCeo from '../assets/images/hero/sg/sgCeo.jpg';
import si from '../assets/images/hero/si/si.jpg';
import siAbout from '../assets/images/hero/si/siAbout.jpg';
import siCeo from '../assets/images/hero/si/siCeo.jpeg';
import total from '../assets/images/hero/total/total.jpg';
import total2 from '../assets/images/hero/total/total2.jpeg';
import totalCeo from '../assets/images/hero/total/totalCeo.jpeg';

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
    bussinessPartner: caroneCeo,
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
    bussinessPartner: carone,
    facilities: facilities,
    certification: certification,
    patent: certification,
  },
  SG: {
    sg: sg,
    ceo: sgCeo,
    history: sgCeo,
    location: sgCeo,
    bussinessPartner: sgCeo,
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
    bussinessPartner: totalCeo,
    about: carone,
    waste: carone,
    process: carone,
    facilities: carone,
    certification: carone,
    patent: carone,
  },
  SI: {
    si: si,
    ceo: siCeo,
    history: siCeo,
    location: siCeo,
    bussinessPartner: siCeo,
    about: siAbout,
    dredging: siAbout,
    pipe: siAbout,
    facilities: facilities,
    certification: certification,
  },
});
