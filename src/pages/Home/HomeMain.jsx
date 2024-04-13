import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function HomeMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.HOME.map((item, index) => {
        return <MainArticle key={index} currentCompany="HOME" item={item} />;
      })}
    </div>
  );
}

export default HomeMain;
