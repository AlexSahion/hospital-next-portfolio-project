import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { PostType } from "./types";

export const usePostCard = () => {
	const [posts, setPosts] = useState<PostType[] | null>(null)

	useEffect(() => {
		getPosts()
			.then(setPosts)
			.catch(err => {
				console.error(err);
			})
	}, [])

	return posts
}