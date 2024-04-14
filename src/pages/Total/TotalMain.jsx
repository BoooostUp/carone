import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function TotalMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.TOTAL1.map((item, index) => {
        return <MainArticle key={index} currentCompany="TOTAL" item={item} />;
      })}
    </div>
  );
}

export default TotalMain;
