import { getAllArticles } from "./(server)/api";
import { ROUTING } from "./routing";
import AppLink from "./shared/compontsts/app-link";

export const metadata = {
	title: "NoEscape blog",
}

export default async function Home() {

	const allArticles = await getAllArticles();

	return (<>
		<h1>Education blog</h1>
		<ul>
			{allArticles.map((article, index) => (
				<li key={index}>
					<AppLink
						href={ROUTING.article(article.name)}	
					>
						{article.header}
					</AppLink>
				</li>
			))}
		</ul>
	</>);
}
