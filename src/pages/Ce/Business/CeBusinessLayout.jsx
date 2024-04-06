import { useLocation } from 'react-router-dom';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const CeBusinessLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <div>
      <CategoryBar
        company="CE"
        category={LNB_CONTENTS.CE}
        selectedButton={selectedCategory}
        currentPage="business"
      />
    </div>
  );
};

export default CeBusinessLayout;
