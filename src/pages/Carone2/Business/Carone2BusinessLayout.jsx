import { useLocation } from 'react-router-dom';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const Carone2InfoLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <div>
      <CategoryBar
        company="CARONE"
        category={LNB_CONTENTS.CARONE}
        selectedButton={selectedCategory}
        currentPage="business"
      />
    </div>
  );
};

export default Carone2InfoLayout;
