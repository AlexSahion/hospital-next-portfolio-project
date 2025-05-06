import css from './page.module.scss'
import { BaseContainer } from "@/shared/ui";
import { PostFeed, RightColumn } from "@/widgets";
import { Sidebar } from "@/widgets";

export default function Home() {
	return (
		<BaseContainer className={css.container}>
			<Sidebar className={css.sidebar} />
			<PostFeed className={css.posts} />
			<RightColumn className={css.right} />
		</BaseContainer>
	);
}
