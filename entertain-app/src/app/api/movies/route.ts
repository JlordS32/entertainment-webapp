// next imports
import { NextRequest, NextResponse } from 'next/server';

// data
import data from '../../../data/data.json';

export const dynamic = 'force-dynamic';

// Change as needed for query handling.
const queries = ['limit', 'page'];

/**
 * Handles the GET request
 * @param req The NextRequest object
 */
export async function GET(req: NextRequest) {
   // Extract the query parameters from the URL
   const searchParams = req.nextUrl.searchParams;
   const query = queries.reduce((acc: { [key: string]: string }, item) => {
      const queryParams = searchParams.get(item);
      if (queryParams) {
         acc[item] = queryParams;
      }
      return acc;
   }, {});

   // Check if limit or page query parameters are present
   if (query && (query.limit || query.page)) {

      // extract data and convert to numbers
      const page = Number(query.page);
      const limit = Number(query.limit);

      // Calculate the start and end indices for slicing the data
      const startIndex = page - 1 * limit || 0;
      const endIndex = startIndex + limit;
      return NextResponse.json(data.slice(startIndex, endIndex));
   }

   return NextResponse.json(data);
}