import css from './page.module.scss'
import { BaseContainer } from "@/shared/ui";
import { Events, HeaderBanner, OnlineSchoolWidget, PostFeed, Stats } from "@/widgets";
import { Sidebar } from "@/widgets";

export default function Home() {
	return (
		<BaseContainer className={css.container}>
			<Sidebar className={css.sidebar} />
			<div className={css.content}>
				<div className={css.posts}>
					<HeaderBanner />
					<PostFeed className={css.feed} />
				</div>
				<div className={css.right}>
					<Stats />
					<Events />
					<OnlineSchoolWidget />
				</div>
			</div>
		</BaseContainer>
	);
}
