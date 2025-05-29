import css from './post-card.module.scss'
import Image from 'next/image'
import { PostType } from '../model'
import { TimeAgo, TextWeigth, UserInfo } from '@/shared/ui'

interface PostCardProps {
	actions: React.ReactNode,
	thank: React.ComponentType<{ className?: string }>
	params: PostType
}

export const PostCard = ({ params, actions, thank: Thank }: PostCardProps) => {
	const { avatar, likes, name, position, text, time, title, hashtags, image } = params

	return (
		<div className={css.card}>
			<div className={css.top}>
				<div className={css.img}>
					<Image
						alt='img'
						width={327}
						height={217}
						src={image}
					/>
				</div>
				<div className={css.info}>
					<TimeAgo time={time} />
					<div className={css.help}>Коллеги, помогите</div>
				</div>
				<div className={css.content}>
					<div className={css.title}><TextWeigth text={title} /></div>
					<div className={css.text}>{text} </div>
				</div>
			</div>
			<div className={css.footer}>
				<UserInfo className={css.user} avatar={avatar} name={name} position={position} />
				<Thank className={css.thank} />
				{actions}
			</div>
		</div>
	)
}