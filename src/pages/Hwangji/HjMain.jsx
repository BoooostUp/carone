import MainArticle from '../../components/Main/MainArticle.jsx';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function HjMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.HJ.map((item, index) => {
        return <MainArticle key={index} currentCompany="HJ" item={item} />;
      })}
    </div>
  );
}

export default HjMain;
