import patent1 from '../../assets/images/certificates/patents/특허증 - 드럼통 세척 장치.webp';
import patent2 from '../../assets/images/certificates/patents/특허증 - 트롬멜 선별기.webp';
import patent3 from '../../assets/images/certificates/patents/특허증 - 폐수처리장치.webp';
import patent4 from '../../assets/images/certificates/patents/특허증 - 폐캔 재활용.webp';

export const CERTIFICATIONS = {
  CARONE: {
    mode: 'list',
    certifications: [
      { title: '사업자등록증 (법인)' },
      { title: '폐기물 수집운반업 허가증 (생활계)' },
      { title: '폐기물 운반업 허가증 (일반)' },
      { title: '일반 종합재활용업 허가증' },
      { title: '종합재활용 보증보험증권' },
      { title: '지정 종합재활용업 허가증' },
      { title: '지정폐기물 수집운반업 허가증' },
    ],
  },
  CARONE2: {
    mode: 'list',
    certifications: [
      { title: '사업자등록증' },
      { title: '종합재활용업 허가증' },
    ],
  },
  TOTAL: {
    mode: 'list',
    certifications: [
      { title: '사업자등록증' },
      { title: '중간재활용업 허가증' },
      { title: '중간처분(일반) 허가증' },
      { title: '중간처분(지정) 허가증' },
    ],
  },
  CE: {
    mode: 'list',
    certifications: [
      { title: '사업자등록증' },
      { title: '사업장폐기물배출자 신고증명서' },
      { title: '폐기물처리계획 확인증명서' },
    ],
  },
  SG: {
    mode: 'list',
    certifications: [
      { title: '사업자등록증' },
      { title: '종합재활용업 허가증' }, // (오타 수정: 종합재활욜업 → 종합재활용업)
    ],
  },
  SI: {
    mode: 'list',
    certifications: [],
  },
  HJ: {
    mode: 'list',
    certifications: [{ title: '사업자등록증' }],
  },
  ES: {
    mode: 'list',
    certifications: [],
  },
  PATENTS: {
    mode: 'images', // ★ 특허만 이미지 유지
    certifications: [
      { certification: patent1, title: '드럼통 세척 장치' },
      { certification: patent2, title: '트롬멜 선별기' },
      { certification: patent3, title: '폐수처리장치' }, // (오타 수정: 페수 → 폐수)
      { certification: patent4, title: '폐캔 재활용' },
    ],
  },
};
