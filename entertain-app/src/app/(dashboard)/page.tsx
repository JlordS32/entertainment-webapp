// server actions
import { fetchMovies } from './action';

// components
import MovieCard from '@/components/MovieCard';

// styles
import styles from './home.module.css';

async function Home() {
	const data = await fetchMovies(1);

	return (
		<main>
			<section>
			<div className={styles.movieCardWrapper}>
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
			</section>
		</main>
	);
}

export default Home;
