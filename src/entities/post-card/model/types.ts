export interface PostType {
	id: number,
	image: string,
	likes: number,
	time: string,
	hashtags?: string[],
	title: string,
	text: string,
	avatar: string,
	name: string,
	position: string
}