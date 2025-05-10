import css from './time-ago.module.scss'
import cn from 'classnames'
import { Clock } from 'lucide-react'

interface Props {
	time: string,
	clsasName?: string
}

export const TimeAgo = ({ time, clsasName }: Props) => {
	return (
		<div className={cn(css.time, clsasName)}>
			<Clock size={16} />
			<span>{`${time} назад`}</span>
		</div>
	)
}