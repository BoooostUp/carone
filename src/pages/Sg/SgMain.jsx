import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function SgMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.SG.map((item, index) => {
        return <MainArticle key={index} currentCompany="SG" item={item} />;
      })}
    </div>
  );
}

export default SgMain;
