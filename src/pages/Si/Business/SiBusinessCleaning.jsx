import { useEffect } from 'react';
import processImg from '../../../assets/images/si/businessCleaning.png';

function SiBusinessCleaning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src={processImg} alt="세정 사업 영역" style={{ width: '100%' }} />
    </div>
  );
}

export default SiBusinessCleaning;
