import { PostType } from "../model/types";

export const getPosts = async (): Promise<PostType[]> => {
	const res = await fetch('/api/posts')
	if (!res.ok) {
		throw new Error('failed posts data')
	}
	return res.json()
}