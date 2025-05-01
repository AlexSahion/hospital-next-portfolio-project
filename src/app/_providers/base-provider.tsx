import { type PropsWithChildren } from "react";

export const BaseProvider = ({ children }: PropsWithChildren) => {
	return (
		<div className="wrapper">
			<main className="main">
				{children}
			</main>
		</div>
	)
}