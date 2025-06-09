"use client";

import { useState } from "react";

type UserProps = {
	name: string;
	username: string;
};

type LikeState = "unset" | "liked" | "unliked";
export default function User({ name, username }: UserProps) {
	const [likeState, setLikeState] = useState<LikeState>("unset");

	const setLike = () => {
		likeState === "unset" || likeState === "unliked"
			? setLikeState("liked")
			: likeState === "liked" && setLikeState("unliked");
	};

	return (
		<>
			<h2>{name}</h2>
			<button onClick={setLike}>
				{likeState === "unset"
				? "🤍"
				: likeState === "liked"
				? "❤️"
				: likeState === "unliked" && "🤍"}
			</button>
			<p>{username}</p>
		</>
  );
}
