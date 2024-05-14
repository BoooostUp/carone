import { useEffect } from 'react';
import img from '../../../assets/images/ce/businessAbout.png';

function CeBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src={img} alt="사업 분야" style={{ width: '100%' }} />
    </div>
  );
}

export default CeBusinessAbout;
