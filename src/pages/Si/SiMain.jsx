import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function SiMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.SI.map((item, index) => {
        return <MainArticle key={index} currentCompany="SI" item={item} />;
      })}
    </div>
  );
}

export default SiMain;
