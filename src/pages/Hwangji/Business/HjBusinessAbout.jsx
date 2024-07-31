import { useEffect } from 'react';
import img from '../../../assets/images/ce/businessAbout.png';

//TODO: 황지 정보 기입
function HjBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src={img} alt="사업 분야" style={{ width: '100%' }} />
    </div>
  );
}

export default HjBusinessAbout;
