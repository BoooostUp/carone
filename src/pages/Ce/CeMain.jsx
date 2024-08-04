import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';
function CeMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.CE.map((item, index) => {
        return <MainArticle key={index} currentCompany="CE" item={item} />;
      })}
    </div>
  );
}

export default CeMain;
