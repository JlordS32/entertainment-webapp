import { fetchMovies } from "./action";

async function Home() {
	
	const data = await fetchMovies(0);
	console.log(data);
	
	return (
		<main>
			<div>
				<p>Ls</p>
			</div>
		</main>
	);
}

export default Home;