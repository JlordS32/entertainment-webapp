import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

// components
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Entertainment App',
	description: 'Made by Jaylou Rasonabe',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
