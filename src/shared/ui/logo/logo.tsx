import css from './logo.module.scss'
import Image from "next/image"
import Link from "next/link"

interface Props {
	className?: string,
	isWhite?: boolean,
	height?: number,
	width?: number
}

export const Logo = ({ className, isWhite, height = 35, width = 35 }: Props) => {
	return (
		<Link href='/' className={className}>
			<Image
				alt="logo"
				width={width}
				height={height}
				src={isWhite ? '/assets/logo/logo-white.svg' : '/assets/logo/logoText.svg'} />
		</Link>
	)
}