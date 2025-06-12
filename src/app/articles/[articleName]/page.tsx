import {FC} from 'react'

type ArticlePageProps = {
    params: {
        articleName: string
    }
}
const ArticlePage: FC<ArticlePageProps> = ({params}) => {
    const {articleName} = params;

    return (
        <>
            This is article 
            <p>
                {articleName}
            </p>
        </>
    )
};

export default ArticlePage;
