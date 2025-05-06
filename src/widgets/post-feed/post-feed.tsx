import css from './post-feed.module.scss'
import cn from 'classnames'

export const PostFeed = ({ className }: { className?: string }) => {
	return (
		<div className={cn(css.container, className)}>
			<h2>PostFeed</h2>
		</div>
	)
}