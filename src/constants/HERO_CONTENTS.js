const commonContent = Object.freeze({
  info: '회사 소개',
  business: '사업 내용',
  facilities: '보유 설비',
  licenses: '인허가사항',
});

const otherCompanies = ['CE', 'CARONE', 'SG', 'TOTAL', 'SI', 'ES'];

export const HERO_CONTENTS = Object.freeze({
  HOME: {
    ceo: '인사말',
    business: '사업 분야',
    location: '오시는 길',
    recruit: '인재 채용',
  },
  ...otherCompanies.reduce(
    (acc, section) => ({ ...acc, [section]: commonContent }),
    {},
  ),
});
