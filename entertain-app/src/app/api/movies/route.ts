import { NextResponse } from 'next/server';
import data from '../../../data/data.json';

export const dynamic = 'force-dynamic';

export async function GET() {
	return NextResponse.json({
		title: 'test',
	});
}
