import css from './event-item.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { EventItemProps } from '../model'
import { TextWeigth, TimeAgo } from '@/shared/ui'

interface Props extends EventItemProps {
	className?: string,
}

export const EventItem = ({ className, ...item }: Props) => {
	const { avatar, name, position, text, time } = item
	return (
		<div className={cn(css.event, className)}>
			<div className={css.header}>
				<div className={css.user}>
					<div className={css.avatar}>
						<Image
							alt={'event img'}
							src={avatar}
							width={28}
							height={28}
						/>
					</div>
					<div className={css.info}>
						<div className={css.name}><TextWeigth text={name} /></div>
						<div className={css.position}>{position}</div>
					</div>
				</div>
				<TimeAgo time={time} />
			</div>
			<div className={css.content}>
				<div className={css.text}>{text}</div>
			</div>
		</div>
	)
}