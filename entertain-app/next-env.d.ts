/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
type Thumbnail = {
	trending: {
		small: string;
		large: string;
	};
	regular: {
		small: string;
		medium: string;
		large: string;
	};
};

type MovieProps = {
	title: string;
	thumbnail: Thumbnail;
	year: number;
	category: string;
	rating: string;
	isBookmarked: boolean;
	isTrending: boolean;
};
