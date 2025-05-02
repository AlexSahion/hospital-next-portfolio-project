import css from './search-input.module.scss'
import cn from 'classnames'
import { Search } from 'lucide-react';

export const SearchInput = ({ className }: { className?: string }) => {
	return (
		<div className={css.content}>
			<div className={css.icon}>
				<Search size={20} />
			</div>
			<input placeholder='Искать на тему...' type="text" />
		</div>
	)
}