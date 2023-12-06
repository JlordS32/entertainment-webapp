'use server';

export const fetchMovies = async (page: number): Promise<MovieProps[]> => {
	const res = await fetch(`http://localhost:3000/api/movies?limit=9&page=${page}`);

   const data = await res.json();

   return data;
};
