// next imports
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// data
import data from '../../../data/data.json';

export const dynamic = 'force-dynamic';

const queries = ['limit', 'page'];

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const query = queries.reduce((acc: { [key: string]: string }, item) => {
		const queryParams = searchParams.get(item);
		if (queryParams) {
			acc[item] = queryParams;
		}
		return acc;
	}, {});

	if (query && query.limit || query.page) {
		const startIndex = (Number(query.page) - 1) * Number(query.limit) || 0;
		const endIndex = startIndex + Number(query.limit);
		return NextResponse.json(data.slice(startIndex, endIndex));
	}

	return NextResponse.json(data);
}
