import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json([
		{
			avatar: '/assets/avatars/avatar-1.png',
			name: 'Девятых Т.',
			position: 'Реаниматолог',
			time: '1 д.',
			text: 'Уже завтра - поэтому срочно в номер - стартует продолжение серии вебинаров об ультразвуковой сосудистой визуализации с прекрасной Людмилой Эдуардовной Шульгиной.'
		},

		{
			avatar: '/assets/avatars/avatar-2.png',
			name: 'Doctor News. D.',
			position: 'Frontend',
			time: '1 д.',
			text: 'Уже завтра - поэтому срочно в номер - стартует продолжение серии вебинаров об ультразвуковой сосудистой визуализации с прекрасной Людмилой Эдуардовной Шульгиной.'
		},
	])
}