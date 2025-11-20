import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS';

const HomeBusiness = () => {
  return (
    <>
      {MAIN_ARTICLE_CONTENTS.HOME.map((item, index) => (
        <MainArticle
          key={item.id || index}
          currentCompany="HOME"
          item={item}
          index={index}
        />
      ))}
    </>
  );
};

export default HomeBusiness;
