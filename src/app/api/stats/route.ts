import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		users: '35 904',
		newUsers: '41',
	})
}