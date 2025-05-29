'use client'

import css from './post-feed.module.scss'
import cn from 'classnames'
import { UserPostAction } from '@/features/user-post-action';
import { ThankButton } from '@/features/thank-button';
import { usePostCard } from '@/entities/post-card/model/use-post-card';
import { PostCard } from '@/entities/post-card';

export const PostFeed = ({ className }: { className?: string }) => {
	const posts = usePostCard()?.slice(0, 6)

	return (
		<div className={cn(css.container, className)}>
			{posts?.map(params => (
				<PostCard key={params.id} params={params} thank={ThankButton} actions={<UserPostAction />} />
			))}
		</div>
	)
}