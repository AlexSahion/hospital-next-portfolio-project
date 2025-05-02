import css from './header.module.scss'
import { BaseContainer } from '@/shared/ui';
import { ButtonBlue } from '@/shared/ui'
import { Logo } from '@/shared/ui';
import { LogoImage } from '@/shared/ui';
import { SearchInput } from '@/shared/ui';
import { LogIn } from 'lucide-react';

export const Header = () => {
	return (
		<header className={css.header}>
			<BaseContainer className={css.container}>
				<div className={css.logo}>
					<Logo className={css.logoText} />
					<LogoImage className={css.logoImage} />
				</div>
				<div className={css.input}>
					<SearchInput />
				</div>
				<ButtonBlue className={css.button} text='Войти' />
				<LogIn className={css.log} size={32} />
			</BaseContainer>
		</header>
	)
}