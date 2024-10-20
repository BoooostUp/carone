import carone2Image from '/src/assets/images/map/CARONE2.webp';
import {
  default as caroneImage,
  default as ceImage,
  default as sgImage,
} from '/src/assets/images/map/CE_CARONE_SG.webp';
import {
  default as siImage,
  default as totalImage,
} from '/src/assets/images/map/TOTAL_SI.webp';

export const MAP_CONTENTS = Object.freeze({
  CE: {
    name: '(주)자동차환경',
    address: '경상남도 양산시 상북면 공원로 403 - 19',
    tel: '055. 381. 0703',
    fax: '055. 384. 0703',
    imageSrc: ceImage,
  },
  SG: {
    name: '(주)에스지산업',
    address: '경상남도 양산시 상북면 공원로 403 - 19',
    tel: '055. 374. 7784',
    fax: '055. 374. 7786',
    imageSrc: sgImage,
  },
  SI: {
    name: '(주)세명인텍',
    address: '울산광역시 남구 용연로 98번길 23',
    tel: '052. 277. 5550',
    fax: '052. 970. 5800',
    imageSrc: siImage,
  },
  TOTAL: {
    name: '(주)토탈',
    address: '울산광역시 남구 용연로 179번길 18',
    tel: '052. 256. 0207',
    fax: '052. 256. 0209',
    imageSrc: totalImage,
  },
  CARONE: {
    name: '(유)카원',
    address: '경상남도 양산시 상북면 공원로 403 - 19',
    tel: '055. 381. 0703',
    fax: '055. 384. 0703',
    imageSrc: caroneImage,
  },
  CARONE2: {
    name: '(유)카원 2공장',
    address: '경상남도 양산시 상북면 수서로 503-104',
    tel: '055. 381. 0703',
    fax: '055. 384. 0703',
    imageSrc: carone2Image,
  },
  //TODO: 황지 정보 기입
  HJ: {
    name: '(주)황지',
    address: '울산광역시 남구 용연로 179번길 18',
    tel: '052. 256. 0207',
    fax: '052. 256. 0209',
    imageSrc: carone2Image,
  },
  //TODO: 에너지스토리 정보 기입
  ES: { name: '', address: '', tel: '', fax: '', imageSrc: '' },
});
