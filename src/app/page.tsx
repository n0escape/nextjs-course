import { getAllArticles } from "./(server)/api";

export const metadata = {
	title: "NoEscape blog",
}

export default async function Home() {

	const allArticles = await getAllArticles();

	return (<>
		<h1>Education blog</h1>
		<ul>
			{allArticles.map((article, index) => (
				<li key={index}>{article.header}</li>
			))}
		</ul>
	</>);
}
