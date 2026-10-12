import MainArticle from '../../components/Main/MainArticle.jsx';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function NaeilMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.NAEIL.map((item, index) => {
        return <MainArticle key={index} currentCompany="NAEIL" item={item} />;
      })}
    </div>
  );
}

export default NaeilMain;
