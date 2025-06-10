import styles from "./page.module.css";
import users from "@/app/users.json"
import User from "./user";
// import PureClientComp from "./pure-client-component";

import dynamic from "next/dynamic";

const PureClientComp = dynamic(
	() => import('@/app/pure-client-component'),
	{ ssr: !!false }
);

const getAllUsers = async (): Promise<typeof users> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(users), 1000)
	})
}

export default async function Home() {

	const users = await getAllUsers();

	return (
		<div className={styles.page}>
			<PureClientComp />
			<main className={styles.main}>
				<h1 className="header">Users</h1>
				<ul>
					{users.map((user) =>
						<li key={user.username}> 
							<User name={user.name} username={user.username} />
						</li> 
					)}
				</ul>
			</main>
		</div>
	);
}
