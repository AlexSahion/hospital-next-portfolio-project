import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { BaseProvider } from "./_providers";
import { type PropsWithChildren } from "react";
import { Header } from "@/widgets";

const inter = Inter({
	subsets: ['cyrillic'],
	variable: '--font-inter',
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Hospital",
	description: "This is my protfolio project",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={inter.variable}>
			<body >
				<BaseProvider>
					<Header />
					{children}
				</BaseProvider>
			</body>
		</html>
	);
}
