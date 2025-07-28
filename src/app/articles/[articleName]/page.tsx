import { getArticleByName } from '@/app/(server)/api';
import {FC} from 'react'

// type ArticlePageProps = {
//     params: {
//         articleName: string
//     }
// }
const ArticlePage = async ({params}: Params) => {
    const {articleName} = params;
    const article = await getArticleByName(articleName);

    return (
        <>
            <h1>{article.header}</h1>
            {article.text.map((line, index)=>(
                <p key={index}>{line}</p>
            ))}
        </>
    )
};

export default ArticlePage;
