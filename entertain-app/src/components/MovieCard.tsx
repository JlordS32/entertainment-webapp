// next imports
import Image from 'next/image';

// styles
import styles from './styles/moviecard.module.css';

interface MovieCardProps {
	movie: MovieProps;
	index: number;
}
const MovieCard = ({ movie }: MovieCardProps) => {
	const link = movie.thumbnail.regular.large;

	return (
		<div className={styles.movieCard}>
			<div>
				<Image
					width={280}
					height={175}
					priority={true}
					layout='responsive'
					src={`http://localhost:3000/${link}`}
					alt={movie.title}
				/>
			</div>
		</div>
	);
};

export default MovieCard;
