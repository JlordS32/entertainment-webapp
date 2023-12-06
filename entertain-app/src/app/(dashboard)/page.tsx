import Image from 'next/image';
import { fetchMovies } from './action';
import imgtest from '../../assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg';
import MovieCard from '@/components/MovieCard';

async function Home() {
	const data = await fetchMovies(1);

	return (
		<main>
			<div style={{ display: 'flex', gap: '50px' }}>
				{data.map((item, index) => {
					return (
						<MovieCard
							movie={item}
							index={index}
							key={index}
						/>
					);
				})}
			</div>
		</main>
	);
}

export default Home;
