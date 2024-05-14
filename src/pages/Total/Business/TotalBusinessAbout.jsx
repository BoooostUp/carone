import { useEffect } from 'react';
import processImg from '../../../assets/images/total/businessAbout.png';

function TotalBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src={processImg} alt="사업분야" style={{ width: '100%' }} />
    </div>
  );
}

export default TotalBusinessAbout;
