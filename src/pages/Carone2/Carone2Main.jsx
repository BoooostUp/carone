import MainArticle from '../../components/Main/MainArticle';
import { MAIN_ARTICLE_CONTENTS } from '../../constants/MAIN_ARTICLE_CONTENTS.js';

function Carone2Main() {
  return (
    <div>
      {MAIN_ARTICLE_CONTENTS.CARONE2.map((item, index) => {
        return <MainArticle key={index} currentCompany="CARONE2" item={item} />;
      })}
    </div>
  );
}

export default Carone2Main;
