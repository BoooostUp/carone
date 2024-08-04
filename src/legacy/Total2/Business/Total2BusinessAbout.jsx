import { useEffect } from 'react';

function Total2BusinessAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img alt="사업분야" style={{ width: '100%' }} />
    </div>
  );
}

export default Total2BusinessAbout;
