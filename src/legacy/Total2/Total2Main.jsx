import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function Total2Main() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.TOTAL2.map((item, index) => {
        return <MainArticle key={index} currentCompany="TOTAL2" item={item} />;
      })}
    </div>
  );
}

export default Total2Main;
