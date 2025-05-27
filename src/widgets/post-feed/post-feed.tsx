import css from './post-feed.module.scss'
import cn from 'classnames'
import { PostCard } from '@/entities/post-card';

export const PostFeed = ({ className }: { className?: string }) => {
	return (
		<div className={cn(css.container, className)}>
			<PostCard />
		</div>
	)
}