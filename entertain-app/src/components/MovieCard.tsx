import Image from 'next/image';

interface MovieCardProps {
	movie: MovieProps;
	index: number;
}
const MovieCard = ({ movie, index }: MovieCardProps) => {
	return (
		<div>
			<div>
				<p>{movie.title}</p>
				<small>{movie.year}</small>
				<div>
					<Image
						width={200}
						height={200}
						src={`/assets/thumbnails/beyond-earth/regular/small.jpg`}
						alt={movie.title}
					/>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
