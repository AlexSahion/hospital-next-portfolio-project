import css from './event-item.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { EventItemProps } from '../model'
import { TextWeigth, TimeAgo, UserInfo } from '@/shared/ui'

interface Props extends EventItemProps {
	className?: string,
}

export const EventItem = ({ className, ...item }: Props) => {
	const { avatar, name, position, text, time } = item
	return (
		<div className={cn(css.event, className)}>
			<div className={css.header}>
				<UserInfo avatar={avatar} name={name} position={position} />
				<TimeAgo time={time} />
			</div>
			<div className={css.content}>
				<div className={css.text}>{text}</div>
			</div>
		</div>
	)
}