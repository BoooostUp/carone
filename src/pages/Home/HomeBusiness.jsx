import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

const HomeBusiness = () => {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.HOME.map((item, index) => {
        return <MainArticle key={index} currentCompany="HOME" item={item} />;
      })}
    </div>
  );
};

export default HomeBusiness;
