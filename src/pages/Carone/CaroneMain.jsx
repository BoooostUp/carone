import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function CaroneMain() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.CARONE1.map((item, index) => {
        return <MainArticle key={index} currentCompany="CARONE" item={item} />;
      })}
    </div>
  );
}

export default CaroneMain;
