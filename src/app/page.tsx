import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import AppLink from './shared/compontsts/app-link';
const ARTICLES_PER_PAGE = 10;

export const metadata = {
	title: 'NoEscape blog',
};

export default async function Home({
	searchParams,
}: {
	searchParams: Record<string, string>;
}) {
	const allArticles = await getAllArticles();
	const page = Number.parseInt(searchParams['page'] ?? 1);

	const articles = allArticles.slice(
		(page - 1) * ARTICLES_PER_PAGE,
		page * ARTICLES_PER_PAGE
	);

	const nextPageUrl = {
		search: new URLSearchParams({
			page: (page + 1).toString(),
		}).toString()
	};

	return (
		<>
			<h1>Education blog, page {page}</h1>
			<ul>
				{articles.map((article, index) => (
					<li key={index}>
						<AppLink href={ROUTING.article(article.name)}>
							{article.header}
						</AppLink>
					</li>
				))}
			</ul>

			<AppLink href={nextPageUrl}>Next</AppLink>
		</>
	);
}
