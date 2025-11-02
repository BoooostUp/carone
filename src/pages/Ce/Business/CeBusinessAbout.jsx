import { useEffect } from 'react';
import img from '../../../assets/images/ce/businessAbout.png';
import CeBusinessArea from './CeBusinessArea';

function CeBusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: '100' }}>
      <CeBusinessArea />
    </div>
  );
}

export default CeBusinessAbout;
