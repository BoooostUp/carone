import { useLocation } from 'react-router-dom';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const SiBusinessLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <div>
      <CategoryBar
        company="SI"
        category={LNB_CONTENTS.SI}
        selectedButton={selectedCategory}
        currentPage="business"
      />
    </div>
  );
};

export default SiBusinessLayout;
