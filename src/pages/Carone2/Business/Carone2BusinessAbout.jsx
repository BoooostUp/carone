import { useEffect } from 'react';
import aboutImg from '../../../assets/images/carone2/businessAbout.png';

function Carone2BusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src={aboutImg} alt="사업 분야" style={{ width: '100%' }} />
    </div>
  );
}

export default Carone2BusinessAbout;
