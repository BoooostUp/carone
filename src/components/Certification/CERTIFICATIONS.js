import caroneRegister from '../../assets/images/certificates/carone/카원사업자등록증.webp';
import caronePermission1 from '../../assets/images/certificates/carone/카원수집운반업생활계.svg';
import caronePermission2 from '../../assets/images/certificates/carone/카원일반사업장배출시설계폐기물운반업허가증.svg';
import caronePermission3 from '../../assets/images/certificates/carone/카원일반종합재활용업허가증.svg';
import caronePermission4 from '../../assets/images/certificates/carone/카원종합재활용업보증보험증권.svg';
import caronePermission5 from '../../assets/images/certificates/carone/카원지정종합재활용업허가증.svg';
import caronePermission6 from '../../assets/images/certificates/carone/카원지정폐기물수집운반업허가증.svg';
import carone2Register from '../../assets/images/certificates/carone2/카원 2공장 - 사업자등록증.webp';
import carone2Permission1 from '../../assets/images/certificates/carone2/카원 제2공장 - 종합재활용업허가증23.9.18, 변경허가-1.svg';
import cePermission1 from '../../assets/images/certificates/ce/ce1.webp';
import cePermission2 from '../../assets/images/certificates/ce/ce2.webp';
import ceRegister from '../../assets/images/certificates/ce/ceRegister.webp';
import patent1 from '../../assets/images/certificates/patents/특허증 - 드럼통 세척 장치.webp';
import patent2 from '../../assets/images/certificates/patents/특허증 - 트롬멜 선별기.webp';
import patent3 from '../../assets/images/certificates/patents/특허증 - 폐수처리장치.webp';
import patent4 from '../../assets/images/certificates/patents/특허증 - 폐캔 재활용.webp';
import sgRegister from '../../assets/images/certificates/sg/에스지산업 - 사업자등록증.webp';
import sgPermission1 from '../../assets/images/certificates/sg/주에스지산업 - 종합재활용업 허가증22.07-01.svg';
import totalRegister from '../../assets/images/certificates/total/토탈-사업자등록증-1.svg';
import totalPermission1 from '../../assets/images/certificates/total/토탈-중간재활용업 허가번호 제2-2-225호-1.svg';
import totalPermission2 from '../../assets/images/certificates/total/토탈-중간처분폐기물일반 허가번호 제2호-1.svg';
import totalPermission3 from '../../assets/images/certificates/total/토탈-중간처분폐기물지정 허가번호 제2-1-10호-01.svg';
export const CERTIFICATIONS = {
  CARONE: {
    certifications: [
      { certification: caroneRegister, title: '사업자등록증 (법인)' },
      {
        certification: caronePermission1,
        title: '폐기물-수집운반업-허가증 (생활계)',
      },
      {
        certification: caronePermission2,
        title: '폐기물-운반업-허가증 (일반)',
      },
      { certification: caronePermission3, title: '일반-종합재활용업-허가증' },
      { certification: caronePermission4, title: '종합재활용-보증보험증권' },
      { certification: caronePermission5, title: '지정종합재활용-허가증' },
      { certification: caronePermission6, title: '지정폐기물-수집운반-허가증' },
    ],
  },
  CARONE2: {
    certifications: [
      { certification: carone2Register, title: '사업자등록증' },
      {
        certification: carone2Permission1,
        title: '종합재활용업-허가증',
      },
    ],
  },
  TOTAL: {
    certifications: [
      { certification: totalRegister, title: '사업자 등록증' },
      { certification: totalPermission1, title: '중간재활용업-허가증' },
      { certification: totalPermission2, title: '중간처분폐기불-허가증' },
      { certification: totalPermission3, title: '중간처분폐기불지정-허가증' },
    ],
  },
  CE: {
    certifications: [
      { certification: ceRegister, title: '사업자등록증' },
      { certification: cePermission1, title: '사업장폐기물배출자-신고증명서' },
      { certification: cePermission2, title: '폐기물처리계획-확인증명서' },
    ],
  },
  SG: {
    certifications: [
      { certification: sgRegister, title: '사업자등록증' },
      { certification: sgPermission1, title: '종합재활욜업-허가증' },
    ],
  },
  SI: {
    certifications: [],
  },
  PATENTS: {
    certifications: [
      { certification: patent1, title: '드럼통 세척 장치' },
      { certification: patent2, title: '트롬멜 선별기' },
      { certification: patent3, title: '페수처리장치' },
      { certification: patent4, title: '폐캔 재활용' },
    ],
  },
};
